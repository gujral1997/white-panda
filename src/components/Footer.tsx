import React from "react";
import useWindowDimensions from '../hooks/UseWindowDimension';
import { Row } from 'antd';
import { FaTwitter, FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa"
import { CSSProperties } from 'react';
import { COLORS, FOOTER } from '../utils/constants';
import { scalableFontDescription } from '../service/global';

const Footer = () => {
  const { height, width } = useWindowDimensions()

  const styles: { [style: string]: CSSProperties } = {
    icon: {
      color: COLORS.LIGHT_GRAY,
      fontSize: scalableFontDescription(width) * 0.25,
      margin: 20
    }
  }

  return <Row style={{
    width: width * 0.5,
    margin: "28px auto",
  }}>
    <FaTwitter style={{ ...styles.icon }} />
    <FaLinkedinIn style={{ ...styles.icon }} />
    <FaInstagram style={{ ...styles.icon }} />
    <FaFacebookF style={{ ...styles.icon }} />
    <Row style={{ fontSize: scalableFontDescription(width) * 0.125, color: COLORS.GRAY, fontWeight: 400 }}>
      {FOOTER.COPYRIGHT}<br />
      {FOOTER.RIGHTS}<br /><br />
      <u>Privacy Policy</u>{" | "}<u>Terms of service</u>{" | "}<u>Service of Agreement</u>{" | "}<u>Contact us</u>
    </Row>
  </Row>;
};

export default Footer;
