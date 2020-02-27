import styled from "styled-components";
import theme from "../../styles";
const {
  colours: { primary }
} = theme;

export const StyledScrollDownArea = styled.div`
  position: absolute;
  bottom: 40px;
  left: 20px;
  color: ${primary};
`;

export const Line = styled.div`
  position: absolute;
  top: -20px;
  height: 2px;
  width: 40px;
  border-bottom: 2px solid #fff;
`;

export const ScrollDownText = styled.h1`
  font-weight: 600;
  font-family: "HelveticaNeue-Light", Helvetica, Arial;
  letter-spacing: 2.5px;
  letter-height: 1.5rem;
  left: 20px;
  font-size: 0.65rem;
  color: ${primary};
  padding-bottom: 25px;
`;

export const DownArrow = styled.img`
  height: 33.45px;
  width: 29px;
`;
