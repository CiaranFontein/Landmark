import styled, { keyframes } from "styled-components";
import theme from "../../styles";
const {
  colours: { primary },
  layout: { flexCenter }
} = theme;

const hamburgerAnimationTime = "0.5s";

//Hamburger
export const StyledHamburger = styled.button`
  ${flexCenter}
  display: block;
  z-index: 4;
  height: 60px;
  width: 60px;
  border: none;
  padding: 0px;
  margin: 0px;
  background: none;
`;

const hamburgerLine = `
position: absolute;
height: 1px;
border-bottom: 1px solid ${primary};
`;

const topHamburgerLineAnim = keyframes`
 0% { top: -10px; width: 40px; transform: rotate(0deg); opacity: 1;}
 40% { top: 0px; width: 30px; }
 60% { transform: rotate(0deg); width: 30px; opacity: 1; border-bottom: 1px solid ${primary}}
 100% {top: 0px; transform: rotate(45deg); width: 30px; opacity: 0.75; border-bottom: 1px solid ${primary}}
 `;

const topHamburgerLineAnimReverse = keyframes`
 100% { top: -10px; width: 40px; transform: rotate(0deg); opacity: 1;}
 60% { top: 0px; width: 30px; }
 40% { transform: rotate(0deg); width: 30px; opacity: 1; border-bottom: 1px solid ${primary}}
 0% {top: 0px; transform: rotate(45deg); width: 30px; opacity: 0.75; border-bottom: 1px solid ${primary}}
 `;

const midHamburgerLineAnim = keyframes`
0% {top: 0px; width: 40px; transform: rotate(0deg); opacity: 1;}
40% {opacity: 1; width: 30px}
60% {transform: rotate(0deg); width: 30px}
100%{top: 0px; transform: rotate(45deg); opacity: 0; width: 30px}
`;

const midHamburgerLineAnimReverse = keyframes`
100% {top: 0px; width: 40px; transform: rotate(0deg); opacity: 1;} 
60% {opacity: 1; width: 30px}
40% {transform: rotate(0deg); width: 30px}
0%{top: 0px; transform: rotate(45deg); opacity: 0; width: 30px}
`;

const botHamburgerLineAnim = keyframes`
 0% { top: 10px; width:40px; transform: rotate(0deg); opacity: 1;}
 40% { top: 0px; width: 30px }
 60% { transform: rotate(0deg); width: 30px; opacity: 1; border-bottom: 1px solid ${primary}}
 100% {top: 0px; transform: rotate(-45deg); width: 30px; opacity: 0.75; border-bottom: 1px solid ${primary} }
 `;

const botHamburgerLineAnimReverse = keyframes`
 100% { top: 10px; width:40px; transform: rotate(0deg); }
 60% { top: 0px; width: 30px }
 40% { transform: rotate(0deg); width: 30px; opacity: 1; border-bottom: 1px solid ${primary}}
 0% {top: 0px; transform: rotate(-45deg); width: 30px; opacity: 0.75; border-bottom: 1px solid ${primary} }
 `;

export const TopHamburgerLine = styled.div`
opacity: ${props => (props.menuOpen ? "0.75" : "1")};
width: ${props => (props.menuOpen ? "30px" : "40px")};
  top: ${props => (props.menuOpen ? "0px" : "-10px")};
  ${hamburgerLine}
  animation: ${props =>
    props.menuOpen
      ? topHamburgerLineAnim
      : topHamburgerLineAnimReverse} ${hamburgerAnimationTime} 1;
    transform: rotate(${props => (props.menuOpen ? "45deg" : "0deg")});
`;
export const MidHamburgerLine = styled.div`
opacity: ${props => (props.menuOpen ? "0" : "1")};
width: ${props => (props.menuOpen ? "30px" : "40px")};
  ${hamburgerLine}
  animation: ${props =>
    props.menuOpen
      ? midHamburgerLineAnim
      : midHamburgerLineAnimReverse} ${hamburgerAnimationTime} 1;`;

export const BotHamburgerLine = styled.div`
opacity: ${props => (props.menuOpen ? "0.75" : "1")};
width: ${props => (props.menuOpen ? "30px" : "40px")};
top: ${props => (props.menuOpen ? "0px" : "10px")};
  ${hamburgerLine}
  animation: ${props =>
    props.menuOpen
      ? botHamburgerLineAnim
      : botHamburgerLineAnimReverse} ${hamburgerAnimationTime} 1;
    transform: rotate(${props => (props.menuOpen ? "-45deg" : "0deg")});
    `;
