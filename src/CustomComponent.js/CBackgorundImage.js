import React from "react";
import { Row } from "react-bootstrap";
import myImage from "../assets/bg1.png";
import colors from "../config/colors";
export default function CBackgorundImage({ heading, detail }) {
  return (
    <div
      style={{
        backgroundImage: `url(${myImage})`,
        height: "720px",
      }}
    >
      <Row
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          height: "720px",
        }}
      >
        <div
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            paddingTop: "150px",
          }}
        >
          <span
            style={{
              color: colors.white,
              fontSize: "35px",
              fontWeight: 700,
            }}
          >
            {heading}
          </span>
          <span
            style={{
              marginBottom: "25px",
              fontWeight: 400,
              fontSize: "16px",
              color: colors.white,
            }}
          >
            {detail}
          </span>
        </div>
      </Row>
    </div>
  );
}
