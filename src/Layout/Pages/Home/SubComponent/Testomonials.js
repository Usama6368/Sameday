import React from "react";
import Carousel from "react-bootstrap/Carousel";
import colors from "../../../../config/colors";
import myImage from "../../../../assets/test.png";
import { Col, Row } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Testomonials.css";
import quote from "../../../../assets/QUOTE.png";
export default function Testomonials() {
  const state = {
    responsive: {
      0: {
        items: 1,
      },
      450: {
        items: 1,
      },
      750: {
        items: 2,
      },
      1000: {
        items: 2,
      },
    },
  };
  return (
    <div
      style={{
        backgroundImage: `url(${myImage})`,

        padding: "20px",
      }}
    >
      <div
        style={{
          textAlign: "center",
        }}
      >
        <span style={{ color: colors.white, fontSize: "17px" }}>
          WHAT THEY SAY
        </span>
        <br />

        <span
          style={{
            color: colors.white,
            fontWeight: 600,
            fontSize: "30px",
            textTransform: "uppercase",
          }}
        >
          CLIENT'S Testomonials
        </span>
        <br />

        <div className="details">
          <span style={{ color: colors.white }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim
          </span>
        </div>
      </div>

      <br />

      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          padding: "0px 50px 0px 50px",
        }}
      >
        <OwlCarousel
          responsive={state.responsive}
          autoplay
          className="owl-theme"
          loop
          margin={10}
          nav
        >
          {[0, 1, 2, 3, 4].map((item, index) => (
            <Col
              sm={12}
              md={12}
              lg={12}
              style={{
                backgroundImage: `url(${quote})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: colors.white,

                borderRadius: "5px",
                padding: "5vw",
              }}
              key={index}
            >
              <Col
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                }}
                sm={2}
                lg={2}
                md={2}
                xl={2}
                xs={2}
              >
                <span
                  style={{
                    color: "#1272BE",
                  }}
                  className="comma"
                >
                  “
                </span>
              </Col>
              <Col sm={10} lg={10} md={10} xl={10} xs={10}>
                <div
                  className="comment"
                  style={{
                    padding: "30px 0px 0xp 10px",
                  }}
                >
                  If I could give 100 stars I would. Visa documents collected
                  withim 15 minutes in central london and delivered to
                  chichester in less than 2 hours. Amazing & friendly service...
                  <span
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    Read more
                  </span>
                </div>
                <br />
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                  }}
                >
                  <div>
                    <img
                      style={{
                        height: "50px",
                        width: "50px",
                        borderRadius: "25px",
                        marginRight: "10px",
                      }}
                      src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
                    />
                  </div>
                  <div>
                    <span
                      className="name"
                      style={{
                        fontWeight: "bold",
                      }}
                    >
                      Usama
                    </span>
                    <br />
                    <span className="designation">
                      CEO Of Public Bakery CO.
                    </span>
                  </div>
                </div>
              </Col>
            </Col>
          ))}
        </OwlCarousel>
      </div>
    </div>
  );
}
