import React from "react";
import { Col, Row } from "react-bootstrap";
import myImage from "../../../../assets/bg1.png";
import colors from "../../../../config/colors";
import Quote from "./Quote";

import "./Landing.css";
import CNavbar from "../../../../CustomComponent/CNavbar";

function LandingPage({ id, onLocationPress }) {
  const sm = 12;
  const lg = 6;
  const md = 6;

  return (
    <div
      style={{
        backgroundImage: `url(${myImage})`,
      }}
    >
      <Row className="main">
        <CNavbar onLocationPress={onLocationPress} />
        <Col className="same" style={{}} sm={sm} md={md} lg={lg}>
          <p className="sameday">Same Day & Urgent Courier Services!</p>
          <span
            style={{
              color: colors.white,
              textAlign: "justify",
            }}
          >
            {`Collect Same Day Couriers is your best choice for same day courier
          services and provides excellent local & nationwide courier services at
          affordable prices. We are the UK’s most reliable urgent & same day
          courier service provider.`}
          </span>
          <br />
          <br />

          <span
            style={{
              color: colors.white,
              textAlign: "justify",
            }}
          >
            {`Collect Same Day Couriers is your best choice for same day courier
          services and provides excellent local & nationwide courier services at
          affordable prices. We are the UK’s most reliable urgent & same day
          courier service provider.`}
          </span>

          <br />
          <br />

          <span
            style={{
              color: colors.white,
              textAlign: "justify",
              textTransform: "uppercase",
            }}
          >
            {`call us now`}
          </span>

          <br />

          <span
            style={{
              color: colors.white,
              fontSize: "40px",
              fontWeight: "bold",
            }}
          >
            0800 102 6025
          </span>
        </Col>
        <Col sm={sm} md={md} lg={lg}>
          <Quote id={id} />
        </Col>
      </Row>
      <br />
      <br />
    </div>
  );
}

export default LandingPage;
