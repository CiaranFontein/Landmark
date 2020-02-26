import React from "react";
import { StyledHeroBanner, BannerTitle, BannerSubTitle } from "./style";
import ScrollDownArea from "../ScrollDownArea";

const HeroBanner = () => {
  return (
    <StyledHeroBanner>
      <BannerTitle>Transforming Vancouver's</BannerTitle>
      <BannerSubTitle>Skyline</BannerSubTitle>
      <ScrollDownArea />
    </StyledHeroBanner>
  );
};

export default HeroBanner;
