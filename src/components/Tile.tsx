import React from "react";
import { Col, Row } from "antd";
import { TEXT, COLORS } from "../utils/constants";
import CustomButton from "./Button";
import { FC } from "react";
import { CSSProperties } from "react";

interface TileProps {
  heading: string;
  price: number;
  selected?: boolean;
}

const Tile: FC<TileProps> = ({ price, selected, heading }) => {
  const styles: { [style: string]: CSSProperties } = {
    tile: {
      background: "white",
      borderRadius: 4,
      boxShadow: selected
        ? "10px 10px 10px 10px rgba(200,200,200,0.1)"
        : "0.5px 1px 0.5px 1px rgba(200,200,200,0.1)",
      width: "95%",
      height: "100%",
      zIndex: 1,
      margin: "20px auto",
      padding: "28px"
    },
    circle: {
      height: 60,
      width: 60,
      borderRadius: 30,
      background: COLORS.SEA_GREEN
    },
    price: { fontWeight: 200, fontSize: 16, color: COLORS.DARK_GRAY },
    container: { textAlign: "left", paddingLeft: 16 },
    description: {
      textAlign: "left",
      paddingTop: 16,
      width: "80%",
      color: COLORS.GRAY
    }
  };

  return (
    <Col xl={8} md={12} sm={24}>
      <div style={styles.tile}>
        <Row>
          <Col span={6}>
            {selected ? (
              <div style={styles.circle} />
            ) : (
              <img
                style={{ margin: 10 }}
                height={60}
                width={60}
                src={require("../assets/image.png")}
              />
            )}
          </Col>
          <Col span={18} style={styles.container}>
            <Row
              style={{
                fontSize: 20,
                color: selected ? COLORS.SEA_GREEN : COLORS.DARK_GRAY
              }}
            >
              {heading}
            </Row>
            <Row style={styles.price}>{`from ₹${price}`}</Row>
          </Col>
        </Row>
        <Row style={styles.description}>
          {TEXT.TILE_DESCRIPTION}
          <br />
          <CustomButton value="Order" />
        </Row>
      </div>
    </Col>
  );
};

export default Tile;
