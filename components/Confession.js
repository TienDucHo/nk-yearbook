const textColor = ["#F178B6", "#333333", "#566DE7"];

import confessionStyles from "@styles/components/Confession.module.scss";

const Confession = ({ data }) => {
  return (
    <div className={confessionStyles.container}>
      <p>{data["content"]}</p>
      <h3 style={{ color: textColor[2], alignSelf: "flex-end" }}>
        {data["author"] + " " + data["class"].toUpperCase()}
        {(data["year"] % 100).toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false,
        })}
        {((data["year"] + 3) % 100).toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false,
        })}
      </h3>
    </div>
  );
};

export default Confession;
