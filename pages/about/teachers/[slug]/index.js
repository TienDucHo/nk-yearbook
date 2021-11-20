import { server } from "@config/index";

const tempServer = "https://nk-yearbook.herokuapp.com";

import Image from "next/image";

import Confession from "@components/Confession";

import TextareaAutosize from "react-textarea-autosize";

import Select from "react-select";

import teacherStyle from "@styles/pages/Teacher.module.scss";

import React, { useState } from "react";

import { useForm, Controller } from "react-hook-form";

const yearOptions = [];
for (var i = 1993; i <= 2021; i++) {
  let yearStart = (i % 100).toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
  let yearEnd = ((i + 3) % 100).toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
  yearOptions.push({
    value: i,
    label: `${yearStart}${yearEnd}`,
  });
}

const customDropdownStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: "1px solid  #333333",
    color: state.isSelected ? "white" : "#566de7",
    padding: 20,
  }),
  container: (base, state) => ({
    ...base,
    width: "100%",
  }),
  control: (base, state) => ({
    ...base,
    background: "rgba(0, 0, 0, 0)",
    border: "none",
    borderRadius: "0",
    borderBottom: "1.2px solid #333333",
  }),
};

const classes = require("libs/classes.json");

const Teacher = ({ teacher }) => {
  const posts = teacher[0]["posts"];
  const [postList, updatePostList] = useState(posts);
  const { handleSubmit, control, reset } = useForm();
  const onSubmit = async (post) => {
    console.log(post);
    let newPost = {
      author: post.author,
      content: post.content,
      year: post.year.value,
      class: post.class.value,
      teacher: teacher[0],
    };
    console.log(newPost);
    let newList = [...postList, newPost];
    updatePostList(newList);
    const add = await fetch(`${server}/posts`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
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
              objectFit="contain"
              objectPosition="center"
              className={teacherStyle.image}
            ></Image>
          </div>

          <form
            className={teacherStyle.form}
            onSubmit={handleSubmit(onSubmit)}
          >
            <Controller
              name="content"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TextareaAutosize
                  placeholder="LỜI YÊU THƯƠNG"
                  {...field}
                />
              )}
            />
            <Controller
              name="author"
              control={control}
              rules={{
                required: true,
                minLength: 11,
                maxLength: 400,
              }}
              render={({ field }) => (
                <TextareaAutosize
                  placeholder="NGƯỜI GỬI"
                  {...field}
                />
              )}
            />
            <div className={teacherStyle.dropdown}>
              <Controller
                name="class"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={classes}
                    styles={customDropdownStyles}
                    placeholder="LỚP"
                  />
                )}
              />
              <Controller
                name="year"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={yearOptions}
                    styles={customDropdownStyles}
                    placeholder="KHÓA"
                  />
                )}
              />
            </div>
            <input
              type="submit"
              value="Gửi"
              className={teacherStyle.button}
            />
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
