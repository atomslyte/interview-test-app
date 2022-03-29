import React from "react";
import Card from "./components/card";
import Hero from "./components/hero";
import Nav from "./components/nav";
import Row from "./components/row";
import Search from "./components/search";
import DataProvider from "./context/dataProvider.context";

const App = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <DataProvider>
        <Search />
        <Row>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Row>
        <Row>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Row>
      </DataProvider>
    </div>
  );
};

export default App;
