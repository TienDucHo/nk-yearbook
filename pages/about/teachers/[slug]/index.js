import { server } from "@config/index";

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
    flex: 1,
  }),
  control: (base, state) => ({
    ...base,
    background: "rgba(0, 0, 0, 0)",
  }),
  // control: () => ({
  //   // none of react-select's styles are passed to <Control />
  //   width: 200,
  // }),
  // singleValue: (provided, state) => {
  //   const opacity = state.isDisabled ? 0.5 : 1;
  //   const transition = "opacity 300ms";
  //   return { ...provided, opacity, transition };
  // },
};

const classes = require("libs/classes.json");

const Teacher = ({ teacher }) => {
  const posts = teacher[0]["posts"];
  const [postList, updatePostList] = useState(posts);
  const { handleSubmit, control, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    // post.teacher = teacher[0];
    // let newList = [...postList, post];
    // post["year"] = parseInt(post["year"]);
    // updatePostList(newList);
    // const add = await fetch(`${server}/posts`, {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(post),
    // });
    // const addResponse = await add.json();
    // console.log(addResponse);
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
              rules={{ required: true }}
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
            {/* <textarea
              {...register("content", { required: true })}
              placeholder="LỜI YÊU THƯƠNG"
              type="text"
              className={teacherStyle.confessionContainer}
              cols={5}
              rows={4}
            /> */}
            {/* <input
              {...register("author", { required: true })}
              placeholder="NGƯỜI GỬI"
              type="text"
            />
            <select {...register("class")}>
              {classes.map((item, index) => (
                <option value={item.code} key={index}>
                  {item.name}
                </option>
              ))}
            </select>
            <Select options={yearOptions} {...register("year")} />
            <input type="submit" value="Gửi" /> */}
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
