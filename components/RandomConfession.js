import styled from "styled-components";

const textColor = ["#F178B6", "#333333", "#566DE7"];

const StyledConfession = styled.p`
  position: absolute;
  text-align: center;
  max-width: 40%;
  top: ${(props) => props.top}%;
  left: ${(props) => props.left}%;
  color: ${(props) => textColor[props.color]};
  font-size: ${(props) => props.size}rem;
`;

const RandomConfession = ({ data, top, left, size, color }) => {
  return (
    <StyledConfession color={color} top={top} left={left} size={size}>
      {data}
    </StyledConfession>
  );
};

export default RandomConfession;
