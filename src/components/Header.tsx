import React from "react";
import useWindowDimensions from "../hooks/UseWindowDimension";
import "../css/global.css";
import CLASSES from "../css/global.css.json";
import { FaRegBell } from "react-icons/fa";
import { Badge, Avatar } from "antd";
import { scalableFont, scalableAntDComponent } from "../service/global";
import { COLORS } from "../utils/constants";

const Header = () => {
  const { height, width } = useWindowDimensions();
  return (
    <div
      className={CLASSES.shadow}
      style={{
        height: height * 0.07,
        minHeight: "50px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        position: "fixed",
        zIndex: 1
      }}
    >
      <div
        style={{
          width: "90%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <div style={{ fontSize: scalableFont(width) }}>
          white<b>panda</b>
        </div>
        <div>
          <span style={{ marginRight: 32, verticalAlign: "middle" }}>
            <Badge
              overflowCount={700}
              count={699}
              style={{ background: COLORS.RED, marginTop: 10 }}
            >
              <FaRegBell
                style={{ fontSize: scalableFont(width), marginTop: 10 }}
              />
            </Badge>
          </span>
          <Avatar
            style={{
              backgroundColor: COLORS.PARROT_GREEN,
              verticalAlign: "middle"
            }}
            size={scalableAntDComponent(width)}
          >
            AB
          </Avatar>
        </div>
      </div>
    </div>
  );
};

export default Header;
