import React from "react";
import { StyledLanguageButton } from "./style";
import PropTypes from "prop-types";

const LanguageButton = ({ language }) => {
  return <StyledLanguageButton>{language}</StyledLanguageButton>;
};

LanguageButton.propTypes = {
  language: PropTypes.string
};

export default LanguageButton;
