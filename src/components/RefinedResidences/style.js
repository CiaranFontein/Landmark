import styled from "styled-components";
import backdrop from "../../images/banner2Small.jpg";

export const StyledRefinedResidences = styled.div`
  height: 300px;
  background-image: url(${backdrop});
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: 700px 100vw;
`;

export const HeaderText = styled.h3`
  text-transform: uppercase;
  letter-spacing: 4.5px;
  font-size: 0.875rem;
  font-weight: 400;
  color: #fff;
`;

export const BannerSubTitle = styled.div`
  letter-spacing: 0px;
  left: 20px;
  font-weight: 100;
  font-size: 2.5rem;
  letter-spacing: 1px;
  color: #fff;
  text-transform: uppercase;
  font-family: HelveticaNeue-UL, Helvetica-Neue, Helvetica, Arial, sans-serif;
  padding-bottom: 60px;
  opacity: 0.9;
`;

export const DiscoverButton = styled.div`
  height: 40px;
  width: 275px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 0px 1px rgba(206, 175, 112, 0.2);
`;

export const DiscoverText = styled.div`
  color: #ceaf70;
  font-size: 0.7rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  font-weight: 900;
  font-family: Helvetica-Neue, Helvetica, Arial, sans-serif;
`;
