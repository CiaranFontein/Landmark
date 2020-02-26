import React from "react";
import styled from "styled-components";
import heroBanner from "../images/heroBannerSmall.jpg";
import "./App.css";
import Header from "../components/Header";

const HeroBanner = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${heroBanner});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 20%;
`;

const Menu = styled.div``;

const PageContent = styled.div`
  width: 100%;
`;
const BannerTitle = styled.h1`
  font-weight: 400;
  letter-spacing: 3px;
  position: absolute;
  top: 49vh;
  left: 20px;
  font-size: 0.85rem;
  color: white;
`;

const BannerSubTitle = styled.div`
  position: absolute;
  top: 52vh;
  left: 20px;
  font-weight: 100;
  font-size: 3rem;
  color: white;
  text-transform: uppercase;
  font-family: Arial;
`;

function App() {
  return (
    <div id="App">
      <Header />
      <PageContent>
        <HeroBanner>
          <BannerTitle>Transforming Vancouver's</BannerTitle>
          <BannerSubTitle>Skyline</BannerSubTitle>
        </HeroBanner>
      </PageContent>
    </div>
  );
}

export default App;
