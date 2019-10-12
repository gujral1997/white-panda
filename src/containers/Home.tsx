import React from "react";
import { Row } from "antd";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
//@ts-ignore

const Home = () => {
  return (
    <Row>
      <Navbar />
      <Container />
    </Row>
  );
};

export default Home;
