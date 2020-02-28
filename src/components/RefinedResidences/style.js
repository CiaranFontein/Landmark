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
  background-size: 700px 100%;
  @media (min-width: 768px) {
    width: 750px;
    height: 525px;
    margin: 100px;
  }
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
  font-size: 4rem;
  letter-spacing: 1px;
  color: ${primary};
  padding-bottom: 40px;
  opacity: 0.9;
`;

export const DiscoverButton = styled.div`
  height: 40px;
  width: 275px;
  ${flexCenter}
  box-shadow: 0px 0px 0px 1px rgba(206, 175, 112, 0.2);
  @media (min-width: 768px) {
    box-shadow: none;
  }
`;

export const DiscoverText = styled.div`
  color: ${secondary};
  font-size: 0.7rem;
  letter-spacing: 3px;
  font-weight: 600;
`;

export const SectionInfo = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: absolute;
    left: 65%;
  }
`;
