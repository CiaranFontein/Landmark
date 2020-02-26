import React from "react";
import { StyledHeader, HeaderTextLogo, HomeLink } from "./style";
import Hamburger from "../Hamburger";
import LanguageButtonHolder from "../LanguageButtonHolder";
import heroText from "../../images/landmark.svg";

const Header = () => {
  return (
    <StyledHeader>
      <HomeLink>
        <HeaderTextLogo src={heroText} />
      </HomeLink>
      <Hamburger />
      <LanguageButtonHolder />
    </StyledHeader>
  );
};

export default Header;
