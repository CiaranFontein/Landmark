import React from "react";
import styled from "styled-components";
import { Parallax } from "react-scroll-parallax";
import theme from "../../styles";
import "./styles.css";

const {
  colours: { primary, secondary },
  layout: { flexCenter }
} = theme;

const StyledLandmarkLife = styled.div`
  height: 450px;
  width: 100%;
  ${flexCenter}
  flex-direction: column;
`;

const HeaderText = styled.h3`
  letter-spacing: 3px;
  font-size: 0.9rem;
  font-weight: 400;
  color: ${secondary};
  padding-bottom: 60px;
`;

const Life = styled.div`
  font-weight: 200;
  font-size: 6rem;
  letter-spacing: 10px;
  color: ${primary};
`;

const LandmarkLife = () => {
  return (
    <StyledLandmarkLife>
      <HeaderText>A Landmark</HeaderText>
      <Life className="centeredChildren">
        <Parallax className="ultraLight" y={[20, 0]} x={[-60, -60]}>
          L
        </Parallax>
        <Parallax className="ultraLight" y={[140, 0]} x={[-20, -20]}>
          i
        </Parallax>
        <Parallax className="life" y={[100, 0]} x={[20, 20]}>
          f
        </Parallax>
        <Parallax className="life" y={[50, 0]} x={[60, 60]}>
          e
        </Parallax>
      </Life>
    </StyledLandmarkLife>
  );
};

export default LandmarkLife;
