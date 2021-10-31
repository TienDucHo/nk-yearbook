// Libraries
import Image from "next/image";
import classNames from "classnames/bind";

// Data
var data = require("@libs/stories.json");

// Styling
import storiesStyle from "@styles/pages/Stories.module.scss";
let cx = classNames.bind(storiesStyle);

const stories = ({ stories }) => {
  let className = cx({
    eventCards: true,
  });
  let cards = [];
  data.forEach((element) => {
    <div className={storiesStyle.eventCards} key={element["id"]}>
      <Image
        src="/images/icons.jpg"
        alt="stories Banner"
        width={200}
        height={200}
        className={storiesStyle.banner}
      ></Image>
      <div className={storiesStyle.cardContent}>
        <div className={storiesStyle.basicInfo}>
          <div className={storiesStyle.status}>
            {element["status"]}
          </div>
          <h3 className={storiesStyle.storyTitle}>
            {element["title"]}
          </h3>
        </div>
        <div className={storiesStyle.description}>
          {element["description"]}
        </div>
      </div>
    </div>;
  });
  return (
    <div className={storiesStyle.container}>
      <h1 className={storiesStyle.title}>
        Những câu chuyện ở Năng Khiếu
      </h1>
    </div>
  );
};

export async function getStaticProps({}) {
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { stories: data }, // will be passed to the page component as props
  };
}

export default stories;
