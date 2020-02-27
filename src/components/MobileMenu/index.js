import React from "react";
import {
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
import asiaStandard from "../../images/asiaStandard.png";
import magnum from "../../images/magnum.png";

const MobileMenu = () => {
  return (
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
  );
};

export default MobileMenu;
