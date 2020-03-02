import React from "react";
import downArrow from "../../images/downArrow.png";
import styled from "styled-components";
import heroBanner from "../../images/heroBannerSmall.jpg";
import theme from "../../styles";
const {
  colours: { primary }
} = theme;

const StyledHeroBanner = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${heroBanner});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 20%;
`;

const BannerTitle = styled.h1`
  font-weight: 400;
  letter-spacing: 3px;
  position: absolute;
  top: 49vh;
  left: 20px;
  font-size: 0.9rem;
  color: ${primary};
  @media (min-width: 768px) {
    left: 50px;
  }
`;

const BannerSubTitle = styled.div`
  position: absolute;
  top: 54.5vh;
  letter-spacing: 0px;
  left: 20px;
  font-weight: 100;
  font-size: 2.94rem;
  color: ${primary};
  @media (min-width: 768px) {
    left: 50px;
  }
`;

const StyledScrollDownArea = styled.div`
  position: absolute;
  bottom: 40px;
  left: 20px;
  color: ${primary};
  @media (min-width: 768px) {
    bottom: 80px;
    left: 50px;
  }
`;

const Line = styled.div`
  position: absolute;
  top: -20px;
  height: 2px;
  width: 40px;
  border-bottom: 2px solid #fff;
`;

const ScrollDownText = styled.h1`
  font-weight: 600;
  letter-spacing: 2.5px;
  letter-height: 1.5rem;
  left: 20px;
  font-size: 0.65rem;
  color: ${primary};
  padding-bottom: 25px;
`;

const DownArrow = styled.img`
  height: 33.45px;
  width: 29px;
`;
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
