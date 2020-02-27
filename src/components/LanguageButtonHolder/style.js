import styled from "styled-components";
import theme from "../../styles";
const {
  colours: { primary },
  layout: { flexBetween }
} = theme;

export const StyledLanguageButtonHolder = styled.div`
  ${flexBetween}
  flex-direction: column;
  position: absolute;
  right: 64px;
  top: 82px;
  height: 76px;
  z-index: 4;
  @media (min-width: 768px) {
    flex-direction: row;
    right: 290px;
    top: 22px;
  }
`;

export const VertLine = styled.div`
  display: none;
  position: absolute;
  right: 160px;
  border-left: 2px solid ${primary};
  opacity: 0.3;
  height: 50px;
  width: 1px;
  @media (min-width: 768px) {
    display: inline-block;
  }
`;

export const Register = styled.div`
  position: absolute;
  display: none;
  font-size: 0.8rem;
  font-weight: 600;
  color: ${primary};
  letter-spacing: 2.5px;
  right: 180px;
  @media (min-width: 768px) {
    display: inline-block;
  }
`;
