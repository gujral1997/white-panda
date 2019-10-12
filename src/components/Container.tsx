import React from "react";
import { Col } from "antd";
import useWindowDimensions from "../hooks/UseWindowDimension";
import Header from "./Header";
import Body from "./Body";

const Container = () => {
  const { height } = useWindowDimensions();
  return (
    <Col xs={22} sm={22} md={23} xl={23} style={{ height }}>
      <Header />
      <Body />
    </Col>
  );
};

export default Container;
