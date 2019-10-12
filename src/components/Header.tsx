import React, { CSSProperties } from "react";
import useWindowDimensions from "../hooks/UseWindowDimension";
import "../css/global.css";
import CLASSES from "../css/global.css.json";
import { FaRegBell } from "react-icons/fa";
import { Badge, Avatar } from "antd";
import { scalableFont, scalableAntDComponent } from "../service/global";
import { COLORS } from "../utils/constants";

const Header = () => {
  const { height, width } = useWindowDimensions();
  const styles: { [style: string]: CSSProperties } = {
    container: {
      height: height * 0.07,
      minHeight: "50px",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      position: "fixed",
      zIndex: 1
    },
    subContainer: {
      width: "90%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    },
    heading: { fontSize: scalableFont(width) },
    rightView: { marginRight: 32, verticalAlign: "middle" },
    bell: { fontSize: scalableFont(width), marginTop: 10 },
    badge: { background: COLORS.RED, marginTop: 10 },
    avatar: {
      backgroundColor: COLORS.PARROT_GREEN,
      verticalAlign: "middle"
    }
  };
  return (
    <div className={CLASSES.shadow} style={styles.container}>
      <div style={styles.subContainer}>
        <div style={styles.heading}>
          white<b>panda</b>
        </div>
        <div>
          <span style={styles.rightView}>
            <Badge overflowCount={700} count={699} style={styles.badge}>
              <FaRegBell style={styles.bell} />
            </Badge>
          </span>
          <Avatar style={styles.avatar} size={scalableAntDComponent(width)}>
            AB
          </Avatar>
        </div>
      </div>
    </div>
  );
};

export default Header;
