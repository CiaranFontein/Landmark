import React, { Component } from "react";
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
  SponsorImage
} from "./style";
import LanguageButtonHolder from "../LanguageButtonHolder";
import heroText from "../../images/landmark.svg";
import asiaStandard from "../../images/asiaStandard.png";
import magnum from "../../images/magnum.png";

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
        <StyledHamburger onClick={this.toggleMenu}>
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
          <div></div>
        )}
        <LanguageButtonHolder />
      </StyledHeader>
    );
  }
}

export default Header;
