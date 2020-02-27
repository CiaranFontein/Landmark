import React from "react";
import {
  StyledThisIsLandmark,
  HeaderText,
  WhiteTextImage,
  WatchFilm
} from "./style";
import thisIsLandmarkWhite from "../../images/landmarkWhite.svg";

const ThisIsLandmark = () => {
  return (
    <StyledThisIsLandmark>
      <HeaderText>This is</HeaderText>
      <WhiteTextImage src={thisIsLandmarkWhite} />
      <WatchFilm>Watch The Film ►</WatchFilm>
    </StyledThisIsLandmark>
  );
};

export default ThisIsLandmark;
