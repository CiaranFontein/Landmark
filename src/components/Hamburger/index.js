import React from "react";
import {
  StyledHamburger,
  TopHamburgerLine,
  MidHamburgerLine,
  BotHamburgerLine
} from "./style";

const Hamburger = () => {
  return (
    <StyledHamburger>
      <TopHamburgerLine />
      <MidHamburgerLine />
      <BotHamburgerLine />
    </StyledHamburger>
  );
};

export default Hamburger;
