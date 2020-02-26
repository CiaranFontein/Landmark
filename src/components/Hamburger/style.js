import styled from "styled-components";

export const StyledHamburger = () => styled.div`
  position: relative;
`;

const hamburgerLine = `position: absolute;
height: 100px;
width: 100px;
border-bottom: 1px solid #fff;
`;

export const TopHamburgerLine = styled.div`
  ${hamburgerLine}
  top: -60px;
`;
export const MidHamburgerLine = styled.div`
  ${hamburgerLine}
  top: -50px;
`;
export const BotHamburgerLine = styled.div`
  ${hamburgerLine}
  top: -40px;
`;
