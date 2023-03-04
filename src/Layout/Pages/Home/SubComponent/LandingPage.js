import React from "react";
import { Col, Row } from "react-bootstrap";
import myImage from "../../../../assets/bg1.png";
import colors from "../../../../config/colors";
import Quote from "./Quote";

import "./Landing.css";
import CNavbar from "../../../../CustomComponent/CNavbar";
import info from "../../../../config/info.json";
import {
  locationHeaderArray,
  serviceHeaderArray,
} from "../../../../config/data";
import { useLocation } from "react-router-dom";
function LandingPage({ id, onLocationPress }) {
  const sm = 12;
  const lg = 6;
  const md = 6;

  const { pathname } = useLocation();

  return (
    <div
      style={{
        backgroundImage: `url(${myImage})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        style={{
          backgroundColor: "#00000065",
        }}
      >
        <Row className="main">
          <CNavbar onLocationPress={onLocationPress} />
          <Col className="same" style={{}} sm={sm} md={md} lg={lg}>
            <p className="sameday">
              {id
                ? `${id.replace(/-/g, "  ")}!`
                : "Same Day & Urgent Courier Services!"}
            </p>

            {pathname.includes("location")
              ? locationHeaderArray(id)
              : serviceHeaderArray(id ? id : "same-day-courier").map(
                  (item, index) => (
                    <React.Fragment key={index}>
                      <span
                        style={{
                          color: colors.white,
                          textAlign: "justify",
                          textTransform: "capitalize",
                        }}
                      >
                        {item}
                      </span>
                      <br />
                      <br />
                    </React.Fragment>
                  )
                )}

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
              {info.landline}
            </span>
          </Col>
          <Col sm={sm} md={md} lg={lg}>
            <Quote id={id} />
          </Col>
        </Row>
        <br />
        <br />
      </div>
    </div>
  );
}

export default LandingPage;
