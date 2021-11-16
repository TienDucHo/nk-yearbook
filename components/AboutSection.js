// Components
import Image from "next/image";
// Styling
import aboutSectionStyles from "@styles/components/AboutSection.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(aboutSectionStyles);

const AboutSection = ({ data, right = false }) => {
  return (
    <div className={cx({ section: true, right: right })}>
      <div className={aboutSectionStyles.contents}>
        <span className={aboutSectionStyles.title}>
          {data["title"]}
        </span>
        {data["content"].map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
      <div className={aboutSectionStyles.image}>
        <Image
          src={data["image"]}
          alt="About Image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        ></Image>
      </div>
    </div>
  );
};

export default AboutSection;
