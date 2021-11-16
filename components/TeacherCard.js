import Image from "next/image";

import teacherCardStyle from "@styles/components/TeacherCard.module.scss";

const TeacherCard = ({ data }) => {
  return (
    <div className={teacherCardStyle.container}>
      <div className={teacherCardStyle.imageContainer}>
        <Image
          src={data["image"]}
          alt={data["title"] + data["name"]}
          layout="fill"
          objectFit="cover"
          className={teacherCardStyle.image}
        ></Image>
      </div>
      <h1 className={teacherCardStyle.title}>
        {data["title"] + " " + data["name"]}
      </h1>
      <blockquote className={teacherCardStyle.quote}>
        <q>{data["quotes"]}</q>
      </blockquote>
    </div>
  );
};

export default TeacherCard;
