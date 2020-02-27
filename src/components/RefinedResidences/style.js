import styled from "styled-components";
import backdrop from "../../images/banner2Small.jpg";
import theme from "../../styles";
const {
  colours: { primary, secondary },
  layout: { flexCenter }
} = theme;
export const StyledRefinedResidences = styled.div`
  height: 300px;
  background-image: url(${backdrop});
  ${flexCenter}
  flex-direction: column;
  background-repeat: no-repeat;
  background-size: 700px 100vw;
`;

export const HeaderText = styled.h3`
  letter-spacing: 4.5px;
  font-size: 0.875rem;
  font-weight: 400;
  color: ${primary};
`;

export const BannerSubTitle = styled.div`
  letter-spacing: 0px;
  left: 20px;
  font-weight: 100;
  font-size: 2.5rem;
  letter-spacing: 1px;
  color: ${primary};
  font-family: HelveticaNeue-UL, Helvetica-Neue, Helvetica, Arial, sans-serif;
  padding-bottom: 60px;
  opacity: 0.9;
`;

export const DiscoverButton = styled.div`
  height: 40px;
  width: 275px;
  ${flexCenter}
  box-shadow: 0px 0px 0px 1px rgba(206, 175, 112, 0.2);
`;

export const DiscoverText = styled.div`
  color: ${secondary};
  font-size: 0.7rem;
  letter-spacing: 3px;
  font-weight: 900;
  font-family: Helvetica-Neue, Helvetica, Arial, sans-serif;
`;
