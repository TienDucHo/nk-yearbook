// Data
let data = require("@libs/abouts.json");

// Components
import AboutSection from "@components/AboutSection";
import Image from "next/image";

// Styling
import aboutStyles from "@styles/pages/About.module.scss";
import classNames from "classnames/bind";

let cx = classNames.bind(aboutStyles);

const About = ({}) => {
  return (
    <div className={aboutStyles.container}>
      <div className={aboutStyles.hero}>
        <Image
          alt="Teacher backdrop"
          src="/images/about_artwork.png"
          layout="fill"
          objectFit="contain"
          objectPosition="center"
          className={aboutStyles.image}
        ></Image>
        <div className={aboutStyles.title}>
          <span className={cx({ subtitle: true, left: true })}>
            Về Trường
          </span>
          <h1>Phổ Thông Năng Khiếu</h1>
          <span className={cx({ subtitle: true, right: true })}>
            Đại học Quốc Gia - TP.HCM
          </span>
        </div>
      </div>
      <div className={aboutStyles.content}>
        <AboutSection data={data[0]}></AboutSection>
        <AboutSection data={data[1]} right={true}></AboutSection>
        <AboutSection data={data[2]}></AboutSection>
      </div>
    </div>
  );
};

export default About;
