import React, { Component } from "react";
import heroBanner from "../../images/heroBannerSmall.jpg";
import PropTypes from "prop-types";
import styled from "styled-components";
import {
  StyledHamburger,
  TopHamburgerLine,
  MidHamburgerLine,
  BotHamburgerLine
} from "./hamburgerAnimation";
import theme from "../../styles";
import heroText from "../../images/landmark.svg";
import asiaStandard from "../../images/asiaStandard.png";
import magnum from "../../images/magnum.png";
import "./styles.css";
const {
  colours: { primary },
  layout: { flexCenter, flexBetween },
  text: { infoText }
} = theme;

//Nav Bar
const StyledLanguageButton = styled.button`
  color: ${primary};
  ${flexCenter}
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 2.5px;
  line-height: 20px;
  padding: 2px 0px;
  ${props => (props.selected ? "opacity: 1" : "opacity: 0.5")};
  @media (min-width: 768px) {
    border: none;
    text-decoration: none;
    background: none;
    padding: 10px;
  }
`;

const StyledLanguageButtonHolder = styled.div`
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

const VertLine = styled.div`
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

const StyledHeader = styled.div`
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

//Big Logo
const HeaderTextLogo = styled.img`
  max-width: 100%;
  height: auto;
  background-size: contain;
`;

const HomeLink = styled.a`
  z-index: 4;
  width: 160px;
  @media (min-width: 768px) {
    width: 200px;
  }
`;

const Register = styled.div`
  display: none;
  ${infoText}
  margin: 0px 20px;
  font-weight: 600;
  color: ${primary};
  @media (min-width: 768px) {
    display: block;
  }
`;

//Menu
const StyledMobileMenu = styled.div`
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

const Background = styled.div`
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

const MenuItems = styled.ul`
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

const ListItem = styled.div`
  color: ${primary};
  margin-bottom: 10px;
  font-size: 1.5rem;
  letter-spacing: 2.5px;
  text-transform: none;
`;

const Underline = styled.div`
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

const Container = styled.div`
  ${flexBetween}
  z-index: 4;
`;

const FooterContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 10px 20px;
  @media (min-width: 768px) {
    justify-content: space-between;
    flex-direction: row;
    align-self: flex-end;
    width: 100%;
    padding: 30px 50px;
  }
`;

const InfoType = styled.div`
  ${infoText}
  font-weight: ${props => props.fontWeight}
`;

const Sponsors = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  @media (min-width: 768px) {
    ${flexCenter}
  }
`;

const SponsorImage = styled.img`
  height: 40px;
  width: 80px;
  object-fit: contain;
  padding-right: 30px;
  @media (min-width: 768px) {
    height: 60px;
    width: 120px;
  }
`;

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { menuOpen: false };
  }

  toggleMenu = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
  };

  render() {
    const { menuOpen } = this.state;
    return (
      <StyledHeader>
        <HomeLink>
          <HeaderTextLogo src={heroText} />
        </HomeLink>
        <Container>
          <StyledLanguageButtonHolder>
            <StyledLanguageButton selected={true}>En</StyledLanguageButton>
            <StyledLanguageButton selected={false}>繁體</StyledLanguageButton>
            <StyledLanguageButton selected={false}>简体</StyledLanguageButton>
          </StyledLanguageButtonHolder>
          <Register>Register</Register>
          <VertLine />
          <StyledHamburger
            className="centeredChildren button"
            onClick={this.toggleMenu}
            menuOpen={menuOpen}
          >
            <div className="centeredChildren">
              <TopHamburgerLine menuOpen={menuOpen} />
              <MidHamburgerLine menuOpen={menuOpen} />
              <BotHamburgerLine menuOpen={menuOpen} />
            </div>
          </StyledHamburger>
        </Container>
        {menuOpen ? (
          <Background>
            <StyledMobileMenu>
              <Underline />
              <MenuItems>
                <ListItem>Home</ListItem>
                <ListItem>Only One Robson</ListItem>
                <ListItem>270° Views</ListItem>
                <ListItem>Refined Residences</ListItem>
                <ListItem>Club Robson, Lifestyle</ListItem>
                <ListItem>Concierge Service</ListItem>
                <ListItem>Award Winning Team</ListItem>
                <ListItem>Media</ListItem>
                <ListItem>Register</ListItem>
              </MenuItems>
              <FooterContainer>
                <div>
                  <InfoType fontWeight={400}>
                    1400 Robson St. Vancouver, BC
                  </InfoType>
                  <InfoType fontWeight={100}>
                    info@landmarkonrobson.com
                  </InfoType>
                  <InfoType fontWeight={200}>604-566-2288</InfoType>
                </div>
                <Sponsors>
                  <SponsorImage src={asiaStandard} />
                  <SponsorImage src={magnum} />
                </Sponsors>
              </FooterContainer>
            </StyledMobileMenu>
          </Background>
        ) : (
          <></>
        )}
      </StyledHeader>
    );
  }
}

StyledLanguageButtonHolder.propTypes = {
  selected: PropTypes.bool
};

InfoType.propTypes = {
  fontWeight: PropTypes.number
};

export default Header;
