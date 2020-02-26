import styled from "styled-components";

export const StyledHamburger = styled.div`
  position: absolute;
  top: 24px;
  right: 67px;
  height: 54px;
  width: 40px;
`;

const hamburgerLine = `
position: absolute;
height: 70px;
width: 40px;
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
