import { text } from "@fortawesome/fontawesome-svg-core";
import styled from "styled-components";

const textColor = ["#F178B6", "#333333", "#566DE7"];

const StyledConfession = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 280px;
  color: ${(props) => textColor[props.color]};
  grid-row: ${(props) =>
    props.tall === true ? "span 2 / auto" : "1"};
`;

const Confession = ({ data }) => {
  return (
    <StyledConfession
      color={Math.floor(Math.random() * 3)}
      tall={data["content"].length > 300}
    >
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
    </StyledConfession>
  );
};

export default Confession;
