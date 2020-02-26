import React from "react";
import { StyledLanguageButtonHolder } from "./style";
import LanguageButton from "../LanguageButton";

const LanguageButtonHolder = () => {
  return (
    <StyledLanguageButtonHolder>
      <LanguageButton language="En" />
      <LanguageButton language="繁體" />
      <LanguageButton language="简体" />
    </StyledLanguageButtonHolder>
  );
};

export default LanguageButtonHolder;
