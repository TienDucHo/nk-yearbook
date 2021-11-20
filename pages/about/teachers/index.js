// Source
import { server } from "@config/index";

const tempServer = "https://nk-yearbook.herokuapp.com";

// Components
import Image from "next/image";
import TeacherCard from "@components/TeacherCard";
import { Swiper, SwiperSlide } from "swiper/react";

// Styling
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";

import teachersStyle from "@styles/pages/Teachers.module.scss";

import SwiperCore, {
  Navigation,
  FreeMode,
  Scrollbar,
  Mousewheel,
  EffectFade,
} from "swiper";

// install Swiper modules
SwiperCore.use([
  Navigation,
  EffectFade,
  FreeMode,
  Scrollbar,
  Mousewheel,
]);

// Hooks
import { useState } from "react";

const Teachers = ({ subjects }) => {
  const [subject, setSubject] = useState(0);
  const sort_by_key = (array, key) => {
    return [].slice.call(array).sort(function (a, b) {
      var x = a[key];
      var y = b[key];
      return x < y ? -1 : x > y ? 1 : 0;
    });
  };

  const sort_by_firstName = (array, key = "name") => {
    return [].slice.call(array).sort(function (a, b) {
      var x = a[key].trim().split(" ").at(-1);
      var y = b[key].trim().split(" ").at(-1);
      return Intl.Collator("vi").compare(x, y);
    });
  };

  subjects = sort_by_key(subjects, "id");

  for (let i = 0; i < subjects.length; ++i) {
    subjects[i]["teachers"] = sort_by_firstName(
      subjects[i]["teachers"]
    );
  }

  console.log(Intl.Collator("vi").compare("Hùng", "Hải"));

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
        <div className={teachersStyle.contentHeader}>
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            onSlideChange={(swiper) => {
              setSubject(swiper.realIndex);
            }}
            effect={"fade"}
            fadeEffect={{ crossFade: true }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            loop={true}
            className={teachersStyle.swiper}
          >
            {subjects.map((item, index) => (
              <SwiperSlide
                className={teachersStyle.slide}
                key={index}
              >
                <span>Tổ {item["name"]}</span>
              </SwiperSlide>
            ))}
            <div
              className="swiper-button-prev"
              style={{ zIndex: 999 }}
            >
              <Image
                src={"/images/left.png"}
                width={50}
                height={100}
                alt="Left button"
              />
            </div>
            <div
              className="swiper-button-next"
              style={{ zIndex: 999 }}
            >
              <Image
                src={"/images/right.png"}
                width={50}
                height={100}
                alt="Right button"
              />
            </div>
          </Swiper>
        </div>
        <div className={teachersStyle.contentBody}>
          <Swiper
            direction={"vertical"}
            slidesPerView={"auto"}
            freeMode={true}
            scrollbar={{
              draggable: true,
              el: ".swiper-scrollbar",
            }}
            mousewheel={true}
            className={teachersStyle.teacherSwiper}
          >
            <SwiperSlide className={teachersStyle.teacherSlide}>
              {subjects[subject]["teachers"].map((item, index) => (
                <TeacherCard key={index} data={item} />
              ))}
            </SwiperSlide>
            <div className="swiper-scrollbar"></div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const res = await fetch(`${tempServer}/subjects`);
  const subjects = await res.json();
  return {
    props: {
      subjects,
    },
  };
};

export default Teachers;
