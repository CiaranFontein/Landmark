import styled from "styled-components";
import theme from "../../styles";
const {
  colours: { primary, secondary },
  layout: { flexCenter }
} = theme;

export const StyledThisIsLandmark = styled.div`
  height: 300px;
  ${flexCenter}
  flex-direction: column;
`;

export const HeaderText = styled.h3`
  color: ${primary};
  font-size: 0.9rem;
  letter-spacing: 4px;
  margin-bottom: 10px;
  font-weight: 400;
  font-family: Helvetica-Neue, Helvetica, Arial, sans-serif;
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
