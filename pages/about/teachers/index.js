//Source
const server = "https://nk-yearbook.herokuapp.com";

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
import { useState, useEffect } from "react";

const sort_by_key = (array, key) => {
  return [].slice.call(array).sort(function (a, b) {
    var x = a[key];
    var y = b[key];
    return x < y ? -1 : x > y ? 1 : 0;
  });
};

const sort_by_firstName = (array, key = "name") => {
  if (array != [])
    return [].slice.call(array).sort(function (a, b) {
      if (a && b) {
        let nameA = a[key].trim().split(" ");
        let nameB = b[key].trim().split(" ");
        return Intl.Collator("vi").compare(
          nameA[nameA.length - 1],
          nameB[nameB.length - 1]
        );
      }
    });
};

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      window.addEventListener("resize", handleResize);

      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
  return windowSize;
};

function partition(array, size, offset) {
  offset |= 0;
  var result = [];
  while (offset < array.length) {
    result.push(array.slice(offset, (offset += size)));
  }
  return result;
}

const Teachers = ({ subjects }) => {
  const [subject, setSubject] = useState(0);

  subjects = sort_by_key(subjects, "id");

  const size = useWindowSize();

  for (let i = 0; i < subjects.length; ++i) {
    subjects[i]["teachers"] = sort_by_firstName(
      subjects[i]["teachers"]
    );
  }

  let teachers = subjects[subject]["teachers"];
  let slides = [];
  slides = partition(teachers, size.width > 1100 ? 3 : 1).map(
    (items, index) => (
      <SwiperSlide className={teachersStyle.teacherSlide} key={index}>
        <div className={teachersStyle.teachersContainer}>
          {items.map((teacher, teacherID) => (
            <TeacherCard key={teacherID} data={teacher} />
          ))}
        </div>
      </SwiperSlide>
    )
  );

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
            }}
            mousewheel={true}
            className={teachersStyle.teacherSwiper}
            observer={true}
            resizeObserver={true}
            observeParents={true}
            updateOnImagesReady={true}
          >
            {slides}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const res = await fetch(`${server}/subjects`);
  const subjects = await res.json();
  return {
    props: {
      subjects,
    },
  };
};

export default Teachers;
