import React from "react";
import styled from "styled-components";
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
  height: 100%;
`;

function App() {
  return (
    <div id="App">
      <Header />
      <PageContent>
        <HeroBanner />
        <LandmarkLife />
        <ThisIsLandmark />
        <RefinedResidences />
      </PageContent>
    </div>
  );
}

export default App;
