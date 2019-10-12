import React from "react";
import useWindowDimensions from "../hooks/UseWindowDimension";
import "../css/global.css";
import CLASSES from "../css/global.css.json";

const Header = () => {
  const { height } = useWindowDimensions();
  return (
    <div
      className={CLASSES.shadow}
      style={{
        height: height * 0.07
      }}
    >
      Header
    </div>
  );
};

export default Header;
