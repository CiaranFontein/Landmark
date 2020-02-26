import styled from "styled-components";

export const StyledHeader = styled.div`
  width: 100%;
  position: fixed;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 90px;
  transition: 0.5s ease-in;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.7),
    rgba(0, 0, 0, 0.7) 1%,
    rgba(0, 0, 0, 0.5) 61%,
    transparent
  );
  padding: 0px 20px;
`;

export const HeaderTextLogo = styled.img`
  max-width: 100%;
  height: auto;
  background-size: contain;
`;

export const HomeLink = styled.a`
  width: 160px;
`;
