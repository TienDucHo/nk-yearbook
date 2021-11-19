import { server } from "@config/index";

import Image from "next/image";

import Confession from "@components/Confession";

import teacherStyle from "@styles/pages/Teacher.module.scss";

import { useState } from "react";

import { useForm } from "react-hook-form";

const years = [];
for (var i = 1993; i <= 2021; i++) {
  years.push(i);
}

const classes = require("libs/classes.json");

const Teacher = ({ teacher }) => {
  const posts = teacher[0]["posts"];
  const [postList, updatePostList] = useState(posts);
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    let post = data;
    post.teacher = teacher[0];
    let newList = [...postList, post];
    post["year"] = parseInt(post["year"]);
    console.log(post);
    updatePostList(newList);
    const add = await fetch(`${server}/posts`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });
    const addResponse = await add.json();
    console.log(addResponse);
  };
  return (
    <div className={teacherStyle.container}>
      <div className={teacherStyle.content}>
        <div className={teacherStyle.headers}>
          <div className={teacherStyle.imageContainer}>
            <Image
              src={teacher[0]["portrait"]["url"]}
              alt={teacher[0]["prefix"] + " " + teacher[0]["name"]}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className={teacherStyle.image}
            ></Image>
          </div>

          <form
            className={teacherStyle.form}
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              {...register("content", { required: true })}
              placeholder="LỜI CHÚC"
            />
            <input
              {...register("author", { required: true })}
              placeholder="NGƯỜI GỬI"
            />
            <select {...register("class")}>
              {classes.map((item, index) => (
                <option value={item.code} key={index}>
                  {item.name}
                </option>
              ))}
            </select>
            <select {...register("year")}>
              {years.map((item, index) => (
                <option value={item} key={index}>
                  {(item % 100).toLocaleString("en-US", {
                    minimumIntegerDigits: 2,
                    useGrouping: false,
                  })}
                  {((item + 3) % 100).toLocaleString("en-US", {
                    minimumIntegerDigits: 2,
                    useGrouping: false,
                  })}
                </option>
              ))}
            </select>
            <input type="submit" value="Gửi" />
          </form>
        </div>
        <div className={teacherStyle.confessions}>
          {postList.map((item, index) => (
            <Confession key={index} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `${server}/teachers?slug=${context.params.slug}`
  );
  const teacher = await res.json();
  return {
    props: {
      teacher,
    },
  };
};

export default Teacher;
