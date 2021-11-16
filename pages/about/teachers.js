// Components
import Image from "next/image";
import TeacherCard from "@components/TeacherCard";

// Data
let teachers = require("@libs/teachers.json");

// Styling
import teachersStyle from "@styles/pages/Teachers.module.scss";

const Teachers = ({}) => {
  return (
    <div className={teachersStyle.container}>
      <div className={teachersStyle.hero}>
        <Image
          alt="Teacher backdrop"
          src="/images/teacher_artwork.png"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className={teachersStyle.image}
        ></Image>
        <h1 className={teachersStyle.title}>
          Các thầy cô ở Năng Khiếu
        </h1>
      </div>
      <div className={teachersStyle.content}>
        {teachers.map((item, index) => (
          <TeacherCard data={item} key={index}></TeacherCard>
        ))}
      </div>
    </div>
  );
};

export default Teachers;
