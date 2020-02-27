import React from "react";
import { StyledLanguageButtonHolder } from "./style";
import LanguageButton from "../LanguageButton";

const LanguageButtonHolder = () => {
  return (
    <StyledLanguageButtonHolder>
      <LanguageButton selected={true} language="En" />
      <LanguageButton selected={false} language="繁體" />
      <LanguageButton selected={false} language="简体" />
    </StyledLanguageButtonHolder>
  );
};

export default LanguageButtonHolder;
