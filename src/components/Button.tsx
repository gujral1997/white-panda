import React, { FC } from "react";
import { COLORS } from "../utils/constants";
import useWindowDimensions from "../hooks/UseWindowDimension";
import { scalableFontDescription } from "../service/global";
import { CSSProperties } from "react";

interface ButtonProps {
  value: string;
  width?: number;
}

const CustomButton: FC<ButtonProps> = ({ value }) => {
  const { height, width } = useWindowDimensions();
  const button: CSSProperties = {
    background: "transparent",
    display: "inline-block",
    border: `1px solid ${COLORS.SEA_GREEN}`,
    borderRadius: 2,
    margin: "24px 0",
    padding: "6px 20px",
    color: COLORS.SEA_GREEN,
    textAlign: "center",
    fontSize: scalableFontDescription(width) * 0.1,
    cursor: "pointer"
  };
  return <div style={button}>{value}</div>;
};

export default CustomButton;
