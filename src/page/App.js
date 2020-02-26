import React from "react";
import styled from "styled-components";
import "./App.css";
import Header from "../components/Header";
import HeroBanner from "../components/HeroBanner";

const Menu = styled.div``;

const PageContent = styled.div`
  width: 100%;
`;

function App() {
  return (
    <div id="App">
      <Header />
      <PageContent>
        <HeroBanner />
      </PageContent>
    </div>
  );
}

export default App;
