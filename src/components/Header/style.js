import styled, { keyframes } from "styled-components";
import heroBanner from "../../images/heroBannerSmall.jpg";
import theme from "../../styles";
const {
  colours: { secondary, primary },
  layout: { flexBetween, flexCenter }
} = theme;

const hamburgerAnimationTime = "0.5s";

export const StyledHeader = styled.div`
  width: 100%;
  position: fixed;
  z-index: 1;
  ${flexBetween}
  height: 90px;
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
// width: ${props => (props.menuOpen ? "40px" : "20px")};
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

//Menu
export const StyledMobileMenu = styled.div`
  position: fixed;
  left: 0px;
  top: 0px;
  height: 100vh;
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
  z-index: 4;
  @media (min-width: 768px) {
    padding-top: 150px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
  }
`;

export const Background = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 20%;
  z-index: 3;
  height: 100vh;
  width: 100%;
  background-image: url(${heroBanner});
`;

export const MenuItems = styled.ul`
  align-self: center;
  display: list-item;
  list-style: none;
  padding-left: 20px;
  padding-top: 90px;
  font-weight: 100;
  ${flexCenter}
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  align-self: flex-start;
  @media (min-width: 768px) {
    padding: 0px 50px;
  }
`;

export const ListItem = styled.li`
  color: ${primary};
  margin-bottom: 10px;
  font-size: 1.5rem;
  letter-spacing: 2.5px;
  text-transform: none;
`;

export const ContactInfo = styled.div`
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
  top: 120px;
  left: 20px;
  height: 1px;
  width: 66px;
  opacity: 0.7;
  border-bottom: 1px solid ${primary};
  @media (min-width: 768px) {
    left: 50px;
    top: 180px;
  }
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
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  @media (min-width: 768px) {
    ${flexCenter}
  }
`;

export const SponsorImage = styled.img`
  height: 40px;
  width: 80px;
  object-fit: contain;
  padding-right: 30px;
  @media (min-width: 768px) {
    height: 60px;
    width: 120px;
  }
`;

//Language Buttons
export const StyledLanguageButtonHolder = styled.div`
  ${flexBetween}
  flex-direction: column;
  z-index: 4;
  position: absolute;
  top: 80px;
  right: 32px;
  @media (min-width: 768px) {
    flex-direction: row;
    top: 0px;
    right: 0px;
    position: relative;
  }
`;

export const VertLine = styled.div`
  display: none;
  border-left: 2px solid ${primary};
  opacity: 0.3;
  height: 50px;
  width: 1px;
  margin: 0px 20px;
  @media (min-width: 768px) {
    display: block;
  }
`;

export const Register = styled.div`
  display: none;
  font-size: 0.8rem;
  font-weight: 600;
  margin: 0px 20px;
  color: ${primary};
  letter-spacing: 3px;
  @media (min-width: 768px) {
    display: block;
  }
`;
