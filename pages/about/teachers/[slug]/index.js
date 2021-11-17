import { server } from "@config/index";

import Image from "next/image";

import teacherStyle from "@styles/pages/Teacher.module.scss";

import RandomConfession from "@components/RandomConfession";

const Teacher = ({ teacher }) => {
  const posts = teacher[0]["posts"];
  return (
    <div className={teacherStyle.container}>
      <h1 className={teacherStyle.subject}>
        Tổ {teacher[0]["subjects"][0]["name"]}
      </h1>
      <div className={teacherStyle.content}>
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
        {posts.map((item, index) => (
          <RandomConfession
            key={index}
            className={teacherStyle.confession}
            data={item["content"]}
            top={Math.floor(Math.random() * 40) - index}
            left={Math.floor(Math.random() * 70) + index}
            size={1 + Math.random() * 1.75}
            color={Math.floor(Math.random() * 3)}
          >
            {item["content"]}
          </RandomConfession>
        ))}
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
