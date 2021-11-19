import formStyle from "@styles/components/Form.module.scss";

import { useForm } from "react-hook-form";

import { useContext } from "react";

import {
  postContext,
  dispatchPostContext,
} from "../pages/about/teachers/[slug]/index.js";

const usePostContext = () => [
  useContext(postContext),
  useContext(dispatchPostContext),
];

const postConfession = async (
  content,
  author,
  classes,
  year,
  teacher
) => {
  if (content != "" && author != "") {
    let post = {
      author: author,
      content: content,
      class: classes,
      year: year,
      teacher: teacher,
    };
    const add = await fetch(`${server}/posts`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });
    const addResponse = await add.json();
    return addResponse;
  }
};

const years = [];
for (var i = 1993; i <= 2021; i++) {
  years.push(i);
}

const classes = require("libs/classes.json");

const FormConfession = ({ teacher }) => {
  const [state, dispatch] = usePostContext();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    let post = data;
    post.teacher = teacher;
    let posts = [...state.posts, post];

    console.log("State");
    console.log(posts);
    dispatch({ posts: posts });
  };

  return (
    <form
      className={formStyle.form}
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
  );
};

export default FormConfession;
