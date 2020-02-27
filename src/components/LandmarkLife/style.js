import styled from "styled-components";
import theme from "../../styles";
const {
  colours: { primary, secondary },
  layout: { flexCenter }
} = theme;
export const StyledLandmarkLife = styled.div`
  height: 450px;
  width: 100%;
  ${flexCenter}
  flex-direction: column;
`;

export const HeaderText = styled.h3`
  letter-spacing: 3px;
  font-size: 0.85rem;
  font-weight: 400;
  color: ${secondary};
  padding-bottom: 60px;
`;

export const Life = styled.div`
  font-family: HelveticaNeue-UL, HelveticaNeue-Light, Helvetica, Arial,
    sans-serif;
  font-weight: 200;
  font-size: 6rem;
  letter-spacing: 25px;
  color: ${primary};
`;
