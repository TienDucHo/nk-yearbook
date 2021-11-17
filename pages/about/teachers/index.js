// Source
import { server } from "@config/index";

// Components
import Image from "next/image";
import TeacherCard from "@components/TeacherCard";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Navigation]);

// Hooks
import { useState } from "react";
// Data
//let teachers = require("@libs/teachers.json");

// Styling
import teachersStyle from "@styles/pages/Teachers.module.scss";
import "swiper/css/bundle";

const Teachers = ({ subjects }) => {
  const [subject, setSubject] = useState(0);
  const sort_by_key = (array, key) => {
    return array.sort(function (a, b) {
      var x = a[key];
      var y = b[key];
      return x < y ? -1 : x > y ? 1 : 0;
    });
  };
  subjects = sort_by_key(subjects, "id");
  return (
    <div className={teachersStyle.container}>
      <div className={teachersStyle.hero}>
        <Image
          alt="Teacher backdrop"
          src="/images/teacher_artwork.png"
          layout="fill"
          objectFit="contain"
          objectPosition="center"
          className={teachersStyle.image}
        ></Image>
        <h1 className={teachersStyle.title}>
          Các thầy cô ở Năng Khiếu
        </h1>
      </div>
      <div className={teachersStyle.content}>
        <Swiper
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={(swiper) => {
            setSubject(swiper.realIndex);
            console.log(subject);
          }}
          onSwiper={() => {}}
          navigation
          loop={true}
          className={teachersStyle.swiper}
        >
          {subjects.map((item, index) => (
            <SwiperSlide className={teachersStyle.slide} key={index}>
              Tổ {item["name"]}
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={teachersStyle.teachers}>
          {subjects[subject]["teachers"].map((item, index) => (
            <TeacherCard key={index} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(`${server}/subjects`);
  const subjects = await res.json();
  return {
    props: {
      subjects,
    },
  };
};

export default Teachers;
