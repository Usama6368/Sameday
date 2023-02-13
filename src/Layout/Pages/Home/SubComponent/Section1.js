import React from "react";
import { Col, Row } from "react-bootstrap";
import colors from "../../../../config/colors";

export default function Section1({
  backgroundColor = colors.white,
  marginTop = "-50px",
}) {
  const sm = 6;
  const md = 3;
  const lg = 3;
  const xl = 3;
  return (
    <Row
      style={{
        justifyContent: "center",
      }}
    >
      <Row
        style={{
          justifyContent: "space-between",

          backgroundColor: backgroundColor,
          width: "90%",
          marginTop: marginTop,
          borderRadius: "5px",
          boxShadow: "1px 2px 9px #00000050",
          padding: "20px",
        }}
      >
        {[
          {
            name: "Guaranteed Same Day Delivery",
            img: require("../../../../assets/van.png"),
          },
          {
            name: "Guaranteed 60 minute pick up",
            img: require("../../../../assets/delivery-time.png"),
          },
          {
            name: "Nationwide Coverage",
            img: require("../../../../assets/citizenship.png"),
          },
          {
            name: "Customer service",
            img: require("../../../../assets/support.png"),
          },
        ].map((item, index) => (
          <Col
            key={index}
            sm={sm}
            lg={lg}
            md={md}
            xl={xl}
            style={{
              color: colors.white,
              textAlign: "center",
            }}
          >
            <img
              style={{
                height: "65px",
                width: "65px",
              }}
              src={item.img}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: "15px",
                justifyContent: "center",
                fontWeight: "600",
              }}
            >
              <p
                style={{
                  color: "black",

                  fontSize: "0.8rem",
                  width: "70%",
                  textAlign: "center",
                }}
              >
                {item.name}
              </p>
            </div>
          </Col>
        ))}
      </Row>
    </Row>
  );
}
