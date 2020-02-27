import React from "react";
import {
  StyledRefinedResidences,
  HeaderText,
  BannerSubTitle,
  DiscoverButton,
  DiscoverText
} from "./style";
const RefinedResidences = () => {
  return (
    <StyledRefinedResidences>
      <HeaderText>Refined</HeaderText>
      <BannerSubTitle>Residences</BannerSubTitle>
      <DiscoverButton>
        <DiscoverText>Discover the Residences</DiscoverText>
      </DiscoverButton>
    </StyledRefinedResidences>
  );
};

export default RefinedResidences;
