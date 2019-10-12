import React, { useState, CSSProperties } from "react";
import { Col } from "antd";
import useWindowDimensions from "../hooks/UseWindowDimension";
import { scalableFont } from "../service/global";
import "../css/global.css";
import CLASSES from "../css/global.css.json";
import { FaSistrix, FaStore } from "react-icons/fa";
import { FiGrid } from "react-icons/fi";
import { icons, COLORS } from "../utils/constants";

export type IconType = "grid" | "search" | "store";

interface NavbarState {
  selected: IconType;
}

const Navbar = () => {
  const { height, width } = useWindowDimensions();
  const [state, updateState] = useState<NavbarState>({ selected: "grid" });

  const setState = (newState: Partial<NavbarState>) =>
    updateState({ ...state, ...newState });

  const { selected } = state;

  const styles: { [key: string]: CSSProperties } = {
    container: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      alignItems: "center",
      marginTop: height * 0.1
    },
    iconContainer: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: 0.01 * height,
      paddingBottom: 0.01 * height
    },
    font: { fontSize: scalableFont(width), color: "red", cursor: "pointer" }
  };

  const renderIcon = (type: IconType) => {
    const style = {
      ...styles.font,
      color: type === selected ? COLORS.SEA_GREEN : COLORS.ICON_GRAY
    };
    switch (type) {
      case "grid":
        return <FiGrid style={style} />;
      case "search":
        return <FaSistrix style={style} />;
      case "store":
        return <FaStore style={style} />;
      default:
        return null;
    }
  };

  return (
    <Col
      xs={2}
      sm={2}
      md={1}
      xl={1}
      className={CLASSES.shadow}
      style={{ height }}
    >
      <div style={styles.container}>
        {icons.map(elem => (
          <div
            key={elem}
            onClick={() => setState({ selected: elem })}
            style={{
              ...styles.iconContainer,
              borderRight: `2px solid ${
                elem === selected ? COLORS.SEA_GREEN : "transparent"
              }`
            }}
          >
            {renderIcon(elem)}
          </div>
        ))}
      </div>
    </Col>
  );
};

export default Navbar;
