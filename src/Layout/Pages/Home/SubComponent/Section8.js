import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import colors from "../../../../config/colors";

export default function Section8() {
  return (
    <Row
      style={{
        justifyContent: "center",
      }}
    >
      <Row
        style={{
          justifyContent: "space-between",

          backgroundColor: colors.white,
          width: "90%",
          marginBottom: "-25px",
          borderRadius: "5px",
          boxShadow: "1px 2px 9px #00000050",
          padding: "20px",
        }}
      >
        <Col
          style={{
            justifyContent: "center",
            padding: "20px",
          }}
        >
          <span
            style={{
              fontSize: "2vw",
            }}
          >
            Get a free Quote
          </span>
          <div
            style={{
              display: "flex",
              fontSize: "3vw",
              fontWeight: "bold",
            }}
          >
            <span>Call us now on</span>
            <span
              style={{
                color: colors.blue,
                marginLeft: "10px",
              }}
            >
              0800 102 6025
            </span>
          </div>
        </Col>
        <Col
          sm={4}
          lg={4}
          md={4}
          xl={4}
          xs={4}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: colors.white,
          }}
        >
          <Button
            onClick={() => window.alert("Get a free Quote")}
            style={{
              backgroundColor: " #1272BE",
              padding: "10px",
              borderRadius: "3px",
              fontWeight: "500",
              textAlign: "center",
              fontSize: "1.5vw",
            }}
          >
            Get a free Quote
          </Button>
        </Col>
      </Row>
    </Row>
  );
}
