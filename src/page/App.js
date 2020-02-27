import React from "react";
import styled from "styled-components";
import "./App.css";
import {
  Header,
  HeroBanner,
  LandmarkLife,
  Render,
  ThisIsLandmark,
  RefinedResidences
} from "../components";

const PageContent = styled.div`
  width: 100%;
  background-color: #1c1c26;
`;

function App() {
  return (
    <div id="App">
      <Header />
      <PageContent>
        <HeroBanner />
        <LandmarkLife />
        <Render />
        <ThisIsLandmark />
        <RefinedResidences />
      </PageContent>
    </div>
  );
}

export default App;
