import React from "react";
import {
  StyledHeroBanner,
  BannerTitle,
  BannerSubTitle,
  StyledScrollDownArea,
  Line,
  ScrollDownText,
  DownArrow
} from "./style";
import downArrow from "../../images/downArrow.png";

const HeroBanner = () => {
  return (
    <StyledHeroBanner>
      <BannerTitle>Transforming Vancouver's</BannerTitle>
      <BannerSubTitle>Skyline</BannerSubTitle>
      <StyledScrollDownArea>
        <Line />
        <ScrollDownText>Scroll Down</ScrollDownText>
        <DownArrow src={downArrow} />
      </StyledScrollDownArea>
    </StyledHeroBanner>
  );
};

export default HeroBanner;
