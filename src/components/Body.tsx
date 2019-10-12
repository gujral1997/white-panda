import React from "react";
import useWindowDimensions from "../hooks/UseWindowDimension";
import { scalableFontText, scalableFontDescription } from "../service/global";
import { COLORS, TEXT, tileData } from "../utils/constants";
import { Row } from "antd";
import Tile from "./Tile";
import CustomButton from "./Button";
import Footer from "./Footer";
import { CSSProperties } from "react";

const Body = () => {
  const { height, width } = useWindowDimensions();
  const styles: { [style: string]: CSSProperties } = {
    container: {
      height: height * 0.93,
      width: "90%",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      marginTop: width * 0.07 > 100 ? width * 0.07 : 100
    },
    headingContainer: {
      textAlign: "left",
      width: width > 1000 ? "90%" : "100%"
    },
    heading: {
      fontSize: scalableFontText(width),
      padding: "2.5% 0"
    },
    descriptionContainer: {
      background: COLORS.MILD_SEA_GREEN,
      width: "100%",
      textAlign: "left",
      padding: "2.5% 1%",
      borderRadius: 2
    },
    titleHeading: {
      fontSize: scalableFontDescription(width) * 0.12,
      color: COLORS.SEA_GREEN,
      marginBottom: "1%"
    },
    titleDescription: {
      fontSize: scalableFontDescription(width) * 0.1,
      color: COLORS.GRAY,
      width: width > 1000 ? "70%" : "100%"
    }
  };
  return (
    <div style={styles.container}>
      <div style={styles.headingContainer}>
        <h1 style={styles.heading}>Content Store</h1>
        <div style={styles.descriptionContainer}>
          <div style={styles.titleHeading}>{TEXT.TITLE_HEADING}</div>
          <div style={styles.titleDescription}>
            {TEXT.TITLE_DESCRIPTION}
            <u>{TEXT.TITLE_DESCRIPTION_UNDERLINE}</u>
          </div>
          <CustomButton value="Order via Excel Sheet" />
        </div>
      </div>
      <Row style={{ width: width > 1000 ? "90%" : "100%" }}>
        {tileData.map((elem, index) => (
          <Tile
            key={index}
            price={elem.price}
            heading={elem.heading}
            selected={index === 1}
          />
        ))}
      </Row>
      <Footer />
    </div>
  );
};

export default Body;
