import React from "react";
import { StyledHeader, HeaderTextLogo, HomeLink } from "./style";
import Hamburger from "../Hamburger";
import LanguageButtonHolder from "../LanguageButtonHolder";

const Header = () => {
  return (
    <StyledHeader>
      <HomeLink>
        <HeaderTextLogo />
      </HomeLink>
      <Hamburger />
      <LanguageButtonHolder />
    </StyledHeader>
  );
};

export default Header;
