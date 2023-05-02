import React from "react";
import { Container } from './components/Container/Container'
import { Header } from "./components/Header/Header";
import { Table } from "./components/Table/Table";
import { Line } from "./components/Line/Line";
import { Slider } from "./components/Slider/Slider";
import './App.css'


const App = (): JSX.Element => {
  return (
    <Container>
      <Header/>
      <Line/>
      <Table/>
      <Slider/>
    </Container>
  );
};

export default App;
