import React from "react";
import { StyledLanguageButtonHolder, Register, VertLine } from "./style";
import { LanguageButton } from "../../components";

const LanguageButtonHolder = () => {
  return (
    <>
      <StyledLanguageButtonHolder>
        <LanguageButton selected={true} language="En" />
        <LanguageButton selected={false} language="繁體" />
        <LanguageButton selected={false} language="简体" />
      </StyledLanguageButtonHolder>
      <Register>Register</Register>
      <VertLine />
    </>
  );
};

export default LanguageButtonHolder;
