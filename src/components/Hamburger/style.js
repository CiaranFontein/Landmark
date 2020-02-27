import styled, { keyframes } from "styled-components";

const linesHolderAnim = keyframes`
0% {right: 67px}
40% {right: 61px}
100% {right: 61px}
`;

export const StyledHamburger = styled.div`
  position: absolute;
  z-index: 4;
  top: 90px;
  right: 67px;
  height: 54px;
  width: 40px;
  animation-name: ${linesHolderAnim};
  animation-direction: alternate;
  animation-duration: 0.5s;
`;

const hamburgerLine = `
position: absolute;
height: 1px;
width: 40px;
border-bottom: 2px solid #fff;
`;

const topHamburgerLineAnim = keyframes`
 0% { top: -60px; width: 40px; }
 40% { top: -50px; width: 30px; }
 60% { transform: rotate(0deg); width: 30px; opacity: 1; border-bottom: 2px solid #fff}
 100% {top: -50px; transform: rotate(45deg); width: 30px; opacity: 0.75; border-bottom: 1px solid #fff}
 `;

const midHamburgerLineAnim = keyframes`
0% {width: 40px;}
40% {opacity: 1; width: 30px}
60% {transform: rotate(0deg); width: 30px}
100%{transform: rotate(45deg); opacity: 0; width: 30px}
`;

const botHamburgerLineAnim = keyframes`
 0% { top: -40px; width:40px }
 40% { top: -50px; width: 30px }
 60% { transform: rotate(0deg); width: 30px; opacity: 1; border-bottom: 2px solid #fff}
 100% {top: -50px; transform: rotate(-45deg); width: 30px; opacity: 0.75; border-bottom: 1px solid #fff }
 `;

export const TopHamburgerLine = styled.div`
  ${hamburgerLine}
  top: -60px;
  animation-name: ${topHamburgerLineAnim};
  animation-direction: alternate;
  animation-duration: 0.5s;
`;
export const MidHamburgerLine = styled.div`
  ${hamburgerLine}
  top: -50px;
  animation-name: ${midHamburgerLineAnim};
  animation-direction: alternate;
  animation-duration: 0.5s;
`;
export const BotHamburgerLine = styled.div`
  ${hamburgerLine}
  top: -40px;
  animation-name: ${botHamburgerLineAnim};
  animation-direction: alternate;
  animation-duration: 0.5s;
`;
