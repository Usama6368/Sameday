import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import colors from "../../../../config/colors";
import info from "../../../../config/info.json";
export default function Section8() {
  const navigation = useNavigate();
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
          sm={12}
          lg={8}
          md={8}
          xl={8}
          xs={12}
          style={{
            justifyContent: "center",
            padding: "20px",
          }}
        >
          <span
            style={{
              fontSize: "16px",
            }}
          >
            Get a free Quote
          </span>
          <div
            style={{
              display: "flex",
              fontSize: "32px",
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
              {info.landline}
            </span>
          </div>
        </Col>
        <Col
          sm={12}
          lg={4}
          md={4}
          xl={4}
          xs={12}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: colors.white,
          }}
        >
          <Button
            onClick={() => {
              navigation("/quote");
              window.scrollTo(0, 0);
            }}
            style={{
              backgroundColor: " #1272BE",
              padding: "10px",
              borderRadius: "3px",
              fontWeight: "500",
              textAlign: "center",
              fontSize: "16px",
            }}
          >
            Get a free Quote
          </Button>
        </Col>
      </Row>
    </Row>
  );
}
