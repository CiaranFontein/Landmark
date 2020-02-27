import React from "react";
import {
  StyledThisIsLandmark,
  HeaderText,
  WhiteTextImage,
  WatchFilm,
  RenderSection
} from "./style";
import thisIsLandmarkWhite from "../../images/landmarkWhite.svg";
import { Render } from "../../components";

const ThisIsLandmark = () => {
  return (
    <RenderSection>
      <Render />
      <StyledThisIsLandmark>
        <HeaderText>This is</HeaderText>
        <WhiteTextImage src={thisIsLandmarkWhite} />
        <WatchFilm>Watch The Film ►</WatchFilm>
      </StyledThisIsLandmark>
    </RenderSection>
  );
};

export default ThisIsLandmark;
