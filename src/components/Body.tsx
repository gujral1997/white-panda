import React from "react";
import useWindowDimensions from "../hooks/UseWindowDimension";

const Body = () => {
  const { height } = useWindowDimensions();
  return <div style={{ height: height * 0.93 }}>Body</div>;
};

export default Body;
