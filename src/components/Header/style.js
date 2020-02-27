import styled, { keyframes } from "styled-components";
import heroBanner from "../../images/heroBannerSmall.jpg";
import theme from "../../styles";
const {
  colours: { secondary, primary },
  layout: { flexBetween }
} = theme;

export const StyledHeader = styled.div`
  width: 100%;
  position: fixed;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 90px;
  transition: 0.5s ease-in;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.7),
    rgba(0, 0, 0, 0.5) 61%,
    transparent
  );
  padding: 0px 20px;
  @media (min-width: 768px) {
    height: 120px;
    padding: 0px 50px;
  }
`;

export const HeaderTextLogo = styled.img`
  max-width: 100%;
  height: auto;
  background-size: contain;
`;

export const HomeLink = styled.a`
  z-index: 4;
  width: 160px;
  @media (min-width: 768px) {
    width: 200px;
  }
`;

//Hamburger
const linesHolderAnim = keyframes`
0% {right: 66px}
40% {right: 61px}
100% {right: 61px}
`;

const bigResLinesHolderAnim = keyframes`
0% {right: 110px}
40% {right: 105px}
100% {right: 105px}
`;

export const StyledHamburger = styled.div`
  position: absolute;
  display: inline-block;
  z-index: 4;
  top: 90px;
  height: 54px;
  width: ${props => (props.menuOpen ? "40px" : "20px")};
  animation: ${linesHolderAnim} 0.5s;
  animation-direction: alternate;
  @media (min-width: 768px) {
    top: 105px;
    animation: ${bigResLinesHolderAnim} 0.5s;
  }
`;

const hamburgerLine = `
position: absolute;
height: 1px;
width: 40px;
border-bottom: 1px solid ${primary};
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
  animation: ${topHamburgerLineAnim} 0.5s;
  animation-direction: alternate;
  &:hover {
  }
`;
export const MidHamburgerLine = styled.div`
  ${hamburgerLine}
  top: -50px;
  animation: ${midHamburgerLineAnim} 0.5s;
  animation-direction: alternate;
`;
export const BotHamburgerLine = styled.div`
  ${hamburgerLine}
  top: -40px;
  animation: ${botHamburgerLineAnim} 0.5s;
  animation-direction: alternate;
`;

//Menu
export const StyledMobileMenu = styled.div`
  position: fixed;
  left: 0px;
  top: 0px;
  height: 100vh;
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
  z-index: 4;
`;

export const Background = styled.div`
  position: absolute;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 20%;
  z-index: 3;
  height: 100vh;
  width: 100%;
  top: 0px;
  left: 0px;
  background-image: url(${heroBanner});
`;

export const MenuItems = styled.ul`
  display: list-item;
  list-style: none;
  padding-left: 20px;
  padding-top: 70px;
`;

export const ListItem = styled.li`
  color: ${primary};
  margin-bottom: 10px;
  font-size: 1.5rem;
  letter-spacing: 2.5px;
  text-transform: none;
`;

export const ContactInfo = styled.div`
  padding-left: 20px;
  color: ${secondary};
`;

export const Address = styled.div`
  font-size: 0.7rem;
  letter-spacing: 3px;
  font-weight: 400;
  margin-bottom: 5px;
`;

export const Underline = styled.div`
  position: absolute;
  top: 110px;
  left: 20px;
  height: 1px;
  width: 66px;
  opacity: 0.7;
  border-bottom: 1px solid ${primary};
`;

export const Email = styled.div`
  font-size: 0.7rem;
  letter-spacing: 2px;
  color: ${secondary};
  margin-bottom: 5px;
`;

export const Phone = styled.div`
  font-size: 0.7rem;
  letter-spacing: 1px;
  color: ${secondary};
  margin-bottom: 5px;
`;

export const Sponsors = styled.div`
  padding: 12px 20px;
  bottom: 0px;
  height: 80px;
  width: 70vw;
  ${flexBetween}
`;

export const SponsorImage = styled.img`
  height: 40px;
  width: 80px;
  object-fit: contain;
`;

//Language Buttons
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
