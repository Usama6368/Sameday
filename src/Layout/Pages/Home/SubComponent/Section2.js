import React from "react";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import colors from "../../../../config/colors";
export default function Section2() {
  const navigation = useNavigate();
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
              link: "same-day-courier",
            },
            {
              name: "Urgent Courier Service",
              detail:
                "Focused on getting your urgent packages to their destination in the shortest possible time.",
              link: "urgent-courier-service",
            },
            {
              name: "Business Contract Work",
              detail:
                "Collect Same Day Couriers provides fully flexible same day courier services 24/7/365.",
              link: "same-day-business-couriers",
            },
            {
              name: "Scheduled Couriers",
              detail:
                "From planned deliveries, to scheduled routes or a last-minute request, we’ve got you covered.",
              link: "scheduled-couriers",
            },
            {
              name: "Pallet Courier Service",
              detail:
                "Dedicated pallet courier transporting palletised goods-big or small. UK pallet delivery service.",
              link: "pallet-courier-service",
            },
            {
              name: "Legal Documents Courier",
              detail: `Need a letter or a document delivering on an urgent or time critical basis.                  \n\n`,
              link: "legal-&-documents-courier",
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
                  alt={item.name}
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
                  onClick={() => {
                    navigation(`/services/${item.link}`);
                    window.scrollTo(0, 0);
                  }}
                  style={{
                    fontSize: "16px",
                    textAlign: "center",
                    color: "#2F3690",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  Learn More
                </span>
              </div>
            </Col>
          ))}
        </Row>
      </Row>
      {/* <br />
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
      </Row> */}
      <br />
    </>
  );
}
