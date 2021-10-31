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
  return (
    <div className={storiesStyle.container}>
      <h1 className={storiesStyle.title}>
        Những câu chuyện ở Năng Khiếu
      </h1>
      {stories.map((event) => (
        <div className={storiesStyle.eventCards} key={event["id"]}>
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
                {event["status"]}
              </div>
              <h3 className={storiesStyle.storyTitle}>
                {event["title"]}
              </h3>
            </div>
            <div className={storiesStyle.description}>
              {event["description"]}
            </div>
          </div>
        </div>
      ))}
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
