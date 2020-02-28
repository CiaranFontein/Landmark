import React from "react";
import {
  StyledRefinedResidences,
  HeaderText,
  BannerSubTitle,
  DiscoverButton,
  DiscoverText,
  SectionInfo
} from "./style";
const RefinedResidences = () => {
  return (
    <StyledRefinedResidences>
      <SectionInfo>
        <HeaderText>Refined</HeaderText>
        <BannerSubTitle>Residences</BannerSubTitle>
        <DiscoverButton>
          <DiscoverText>Discover the Residences</DiscoverText>
        </DiscoverButton>
      </SectionInfo>
    </StyledRefinedResidences>
  );
};

export default RefinedResidences;
