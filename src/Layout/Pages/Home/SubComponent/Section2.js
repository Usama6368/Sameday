import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import colors from "../../../../config/colors";
export default function Section2() {
  return (
    <>
      <Row
        style={{
          justifyContent: "center",
        }}
      >
        <Row
          style={{
            borderRadius: "5px",

            color: "black",
            width: "95%",
          }}
        >
          <span
            style={{
              fontSize: "15px",
              textAlign: "center",
              lineHeight: "20px",
              fontWeight: "bold",
            }}
          >
            How can we help you
          </span>

          <span
            style={{
              fontSize: "30px",
              textAlign: "center",
              color: colors.blue,
              fontWeight: "bold",
            }}
          >
            Our Services
          </span>

          {[
            {
              name: "Same Day Courier",
              detail:
                "Focused on getting your urgent packages to their destination on the same day - guaranteed.",
              link: "1",
            },
            {
              name: "Urgent Courier Service",
              detail:
                "Focused on getting your urgent packages to their destination in the shortest possible time.",
              link: "2",
            },
            {
              name: "Business Contract Work",
              detail:
                "Collect Same Day Couriers provides fully flexible same day courier services 24/7/365.",
              link: "3",
            },
            {
              name: "Scheduled Couriers",
              detail:
                "From planned deliveries, to scheduled routes or a last-minute request, we’ve got you covered.",
              link: "4",
            },
            {
              name: "Pallet Courier Service",
              detail:
                "Dedicated pallet courier transporting palletised goods-big or small. UK pallet delivery service.",
              link: "5",
            },
            {
              name: "Legal Documents Courier",
              detail:
                "Need a letter or a document delivering on an urgent or time critical basis",
              link: "6",
            },
          ].map((item, index) => (
            <Col key={index} sm={12} md={6} lg={4}>
              <div
                style={{
                  padding: "30px",
                  margin: "20px",
                  boxShadow: `3px 5px 5px rgba(0, 0, 0, 0.25), inset 0px -4px 0px #2F3690`,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "10px",
                }}
              >
                <img
                  style={{
                    height: "100px",
                    width: "100px",
                  }}
                  src={require("../../../../assets/fast-time 1.png")}
                />

                <br />
                <span
                  style={{
                    fontSize: "18px",
                    textAlign: "center",

                    fontWeight: "bold",
                  }}
                >
                  {item.name}
                </span>
                <br />
                <span
                  style={{
                    fontSize: "14px",
                    textAlign: "center",
                  }}
                >
                  {item.detail}
                </span>
                <br />

                <span
                  style={{
                    fontSize: "16px",
                    textAlign: "center",
                    color: "#2F3690",
                    fontWeight: "bold",
                  }}
                >
                  Learn More
                </span>
              </div>
            </Col>
          ))}
        </Row>
      </Row>
      <br />
      <Row
        style={{
          justifyContent: "center",
        }}
      >
        <Button
          style={{ width: "15vw", background: "#2F3690", height: "43px" }}
          color="#2F3690"
        >
          More Service
        </Button>
      </Row>
      <br />
    </>
  );
}
