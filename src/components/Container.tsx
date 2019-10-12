import React from "react";
import { Col } from "antd";
import useWindowDimensions from "../hooks/UseWindowDimension";
import Header from "./Header";
import Body from "./Body";
import { COLORS } from "../utils/constants";

const Container = () => {
  const { height } = useWindowDimensions();
  return (
    <Col
      xs={22}
      sm={22}
      md={23}
      xl={23}
      style={{
        float: "right",
        height,
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        background: COLORS.MILD_GRAY,
        zIndex: -1
      }}
    >
      <Header />
      <Body />
    </Col>
  );
};

export default Container;
