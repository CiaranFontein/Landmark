import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {
  StyledHeader,
  HeaderTextLogo,
  HomeLink,
  StyledHamburger,
  TopHamburgerLine,
  MidHamburgerLine,
  BotHamburgerLine,
  StyledMobileMenu,
  Background,
  Underline,
  MenuItems,
  ListItem,
  ContactInfo,
  Address,
  Email,
  Phone,
  Sponsors,
  SponsorImage,
  Register,
  VertLine,
  StyledLanguageButtonHolder
} from "./style";
import theme from "../../styles";
import heroText from "../../images/landmark.svg";
import asiaStandard from "../../images/asiaStandard.png";
import magnum from "../../images/magnum.png";
import "./styles.css";
const {
  colours: { primary, secondary },
  layout: { flexCenter, flexBetween }
} = theme;

const StyledLanguageButton = styled.button`
  color: ${primary};
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 2.29px;
  ${props => (props.selected ? "opacity: 1" : "opacity: 0.5")};
  @media (min-width: 768px) {
    border: none;
    text-decoration: none;
    display: flex;
    background: none;
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
        <StyledHamburger
          className={menuOpen ? "header" : "header closed"}
          onClick={this.toggleMenu}
          menuOpen={menuOpen}
        >
          <TopHamburgerLine />
          <MidHamburgerLine />
          <BotHamburgerLine />
        </StyledHamburger>
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
              <ContactInfo>
                <Address>1400 Robson St. Vancouver, BC</Address>
                <Email>info@landmarkonrobson.com</Email>
                <Phone>604-566-2288</Phone>
              </ContactInfo>
              <Sponsors>
                <SponsorImage src={asiaStandard} />
                <SponsorImage src={magnum} />
              </Sponsors>
            </StyledMobileMenu>
          </Background>
        ) : (
          <></>
        )}
        <StyledLanguageButtonHolder>
          <StyledLanguageButton selected={true}>En</StyledLanguageButton>
          <StyledLanguageButton selected={false}>繁體</StyledLanguageButton>
          <StyledLanguageButton selected={false}>简体}</StyledLanguageButton>
        </StyledLanguageButtonHolder>
        <Register>Register</Register>
        <VertLine />
      </StyledHeader>
    );
  }
}

StyledLanguageButtonHolder.propTypes = {
  selected: PropTypes.bool
};

export default Header;
