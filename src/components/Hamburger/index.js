import React, { Component } from "react";
import {
  StyledHamburger,
  TopHamburgerLine,
  MidHamburgerLine,
  BotHamburgerLine
} from "./style";
import MobileMenu from "../MobileMenu";

class Hamburger extends Component {
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
      <>
        <StyledHamburger onClick={this.toggleMenu}>
          <TopHamburgerLine />
          <MidHamburgerLine />
          <BotHamburgerLine />
        </StyledHamburger>
        {menuOpen ? <MobileMenu /> : <div></div>}
      </>
    );
  }
}

export default Hamburger;
