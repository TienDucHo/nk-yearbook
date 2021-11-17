import Image from "next/image";
import Link from "next/link";

import teacherCardStyle from "@styles/components/TeacherCard.module.scss";

const TeacherCard = ({ data }) => {
  return (
    <Link href={"/about/teachers/" + data["slug"]}>
      <a className={teacherCardStyle.container}>
        <div className={teacherCardStyle.imageContainer}>
          <Image
            src={data["portrait"]["url"]}
            alt={data["prefix"] + " " + data["name"]}
            layout="fill"
            objectFit="contain"
            className={teacherCardStyle.image}
          ></Image>
        </div>
        <h1 className={teacherCardStyle.title}>
          {data["prefix"] + " " + data["name"]}
        </h1>
      </a>
    </Link>
  );
};

export default TeacherCard;
