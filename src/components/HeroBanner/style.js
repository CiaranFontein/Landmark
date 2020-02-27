import styled from "styled-components";
import heroBanner from "../../images/heroBannerSmall.jpg";

export const StyledHeroBanner = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${heroBanner});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 20%;
`;

export const BannerTitle = styled.h1`
  font-weight: 400;
  letter-spacing: 3px;
  position: absolute;
  top: 49vh;
  left: 20px;
  font-size: 0.86rem;
  color: #fff;
`;

export const BannerSubTitle = styled.div`
  position: absolute;
  top: 54.5vh;
  letter-spacing: 0px;
  left: 20px;
  font-weight: 100;
  font-size: 2.94rem;
  color: #fff;
`;
