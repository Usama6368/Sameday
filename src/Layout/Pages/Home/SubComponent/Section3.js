import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { BsCheckCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import img1 from "../../../../assets/Rectangle17.png";
import colors from "../../../../config/colors";
export default function Section3() {
  const sm = 12;
  const md = 6;
  const lg = 6;
  const xl = 6;

  const navigation = useNavigate();

  return (
    <Row
      style={{
        justifyContent: "center",
      }}
    >
      <Row
        style={{
          width: "90%",
        }}
      >
        <Col
          style={{
            backgroundImage: `url(${img1})`,
          }}
          sm={sm}
          lg={lg}
          md={md}
          xl={xl}
        ></Col>
        <Col
          style={{
            backgroundColor: colors.blue,

            padding: "30px",
          }}
          sm={sm}
          lg={lg}
          md={md}
          xl={xl}
        >
          <span style={{ color: "#FFFFFF", fontWeight: 550, fontSize: "20px" }}>
            You can trust us
          </span>
          <br />
          <span style={{ color: "#FFFFFF", fontWeight: 600, fontSize: "30px" }}>
            Safe. Secure. Reliable.
          </span>
          <br />
          <p style={{ color: "#FFFFFF", marginTop: "30px" }}>
            Collect Same Day Courier services are available to both personal and
            business users and can accommodate both high volume users and
            emergency shipments – anything from an envelope to handling a large
            complex logistical consignments.
          </p>

          <BsCheckCircleFill color="#1272BE" size={"17px"} />

          <span style={{ marginLeft: "10px", color: colors.white }}>
            15,000 vehicles across the country.
          </span>
          <br />

          <BsCheckCircleFill color="#1272BE" size={"17px"} />

          <span style={{ marginLeft: "10px", color: colors.white }}>
            All consignments fully insured.
          </span>
          <br />

          <BsCheckCircleFill color="#1272BE" size={"17px"} />

          <span style={{ marginLeft: "10px", color: colors.white }}>
            Personal service from our friendly team.
          </span>
          <br />

          <BsCheckCircleFill color="#1272BE" size={"17px"} />

          <span style={{ marginLeft: "10px", color: colors.white }}>
            Same day wait and return service available.
          </span>
          <br />

          <BsCheckCircleFill color="#1272BE" size={"17px"} />

          <span
            style={{
              marginLeft: "10px",
              color: colors.white,
              fontWeight: 700,
            }}
          >
            Collection within 60 mins & delivered the same day.
          </span>
          <br />

          <br />
          <Button
            onClick={() => {
              navigation("/quote");
              window.scrollTo(0, 0);
            }}
          >
            Get a Free Quote
          </Button>
          <br />
        </Col>
      </Row>
    </Row>
  );
}
