import React from "react";
import { StyledScrollDownArea, Line, ScrollDownText, DownArrow } from "./style";
import downArrow from "../../images/downArrow.png";

const ScrollDownArea = () => {
  return (
    <StyledScrollDownArea>
      <Line />
      <ScrollDownText>Scroll Down</ScrollDownText>
      <DownArrow src={downArrow} />
    </StyledScrollDownArea>
  );
};

export default ScrollDownArea;
