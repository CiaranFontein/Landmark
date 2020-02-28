import React from "react";
import render from "../../images/render.jpg";
import styled from "styled-components";
import thisIsLandmarkWhite from "../../images/landmarkWhite.svg";
import theme from "../../styles";
const {
  colours: { primary, secondary },
  layout: { flexCenter }
} = theme;

const StyledThisIsLandmark = styled.div`
  height: 300px;
  ${flexCenter}
  flex-direction: column;
`;

const StyledRender = styled.img`
  height: 370px;
  max-width: 100%;
  object-fit: contain;
`;

const HeaderText = styled.h3`
  color: ${primary};
  font-size: 0.9rem;
  letter-spacing: 4px;
  margin-bottom: 10px;
  font-weight: 400;
`;

export const WhiteTextImage = styled.img`
  height: 55px;
  width: 203px;
  margin-bottom: 30px;
`;

export const WatchFilm = styled.a`
  color: ${secondary};
  font-size: 0.6rem;
  letter-spacing: 4px;
  font-weight: 900;
  margin-top: 30px;
`;

export const RenderSection = styled.div`
  ${flexCenter}
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ThisIsLandmark = () => {
  return (
    <RenderSection>
      <StyledRender src={render} />
      <StyledThisIsLandmark>
        <HeaderText>This is</HeaderText>
        <WhiteTextImage src={thisIsLandmarkWhite} />
        <WatchFilm>Watch The Film ►</WatchFilm>
      </StyledThisIsLandmark>
    </RenderSection>
  );
};

export default ThisIsLandmark;
