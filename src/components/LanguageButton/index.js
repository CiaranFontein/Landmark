import React from "react";
import { StyledLanguageButton } from "./style";
import PropTypes from "prop-types";

const LanguageButton = ({ language, selected }) => {
  return (
    <StyledLanguageButton selected={selected}>{language}</StyledLanguageButton>
  );
};

LanguageButton.propTypes = {
  language: PropTypes.string
};

export default LanguageButton;
