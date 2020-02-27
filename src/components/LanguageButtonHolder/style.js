import styled from "styled-components";
import theme from "../../styles";
const {
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
`;
