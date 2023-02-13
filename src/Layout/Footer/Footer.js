import React from "react";
import { Col, Row } from "react-bootstrap";
import colors from "../../config/colors";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import Section8 from "../Pages/Home/SubComponent/Section8";
import { Link, useLocation } from "react-router-dom";

function Footer({ show }) {
  const sm = 12;
  const xs = 12;
  const md = 6;
  const lg = 3;
  const xl = 3;
  const { pathname } = useLocation();

  const links = [
    "Same Day Courier",
    "Urgent Courier Service",
    "Scheduled Couriers",
    "Same Day Business Couriers",
    "Last Mile Delivery",
  ];

  const link1 = [
    "Same Day Pallet Couriers",
    "Same Day IT Equipment Couriers",
    "Same Day Construction Couriers",
    "Same Day Document Couriers",
    "Same Day Medical Couriers",
  ];
  return (
    <>
      {pathname !== "/contactus" && <Section8 />}
      <Row
        style={{
          backgroundColor: colors.blue,

          padding: "5vw",
          marginTop: "10px",
        }}
      >
        <Col
          style={{
            display: "flex",

            flexDirection: "column",
          }}
          sm={sm}
          md={md}
          lg={lg}
          xl={xl}
          xs={xs}
        >
          <img
            style={{ height: "68.84px", width: "160px" }}
            src={require("../../assets/logo.png")}
          />
          <p
            style={{
              marginTop: "50px",
              fontSize: "15px",
              color: colors.white,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim
          </p>

          <ul
            style={{
              display: "flex",
              flexDirection: "row",
              listStyle: "none",
              marginTop: "30px",

              padding: 0,
            }}
          >
            <li
              style={{
                marginRight: "20px",
              }}
            >
              <FaFacebookF size={"20px"} color={colors.white} />
            </li>
            <li
              style={{
                marginRight: "20px",
              }}
            >
              <BsInstagram size={"20px"} color={colors.white} />
            </li>
            <li
              style={{
                marginRight: "20px",
              }}
            >
              <BsTwitter size={"20px"} color={colors.white} />
            </li>
            <li
              style={{
                marginRight: "20px",
              }}
            >
              <FaLinkedinIn size={"20px"} color={colors.white} />
            </li>
          </ul>
        </Col>
        <Col
          style={{
            display: "flex",

            flexDirection: "column",
          }}
          sm={sm}
          md={md}
          lg={lg}
          xl={xl}
          xs={xs}
        >
          <p
            style={{
              fontSize: "20px",
              fontWeight: "700",
              color: colors.white,
            }}
          >
            Contact Us
          </p>

          <p
            style={{
              fontSize: "16px",

              color: colors.white,
            }}
          >
            info@collectsameday.co.uk <br /> 0800 102 6025
          </p>
        </Col>
        <Col
          style={{
            display: "flex",

            flexDirection: "column",
          }}
          sm={sm}
          md={md}
          lg={lg}
          xl={xl}
          xs={xs}
        >
          <p
            style={{
              fontSize: "20px",
              fontWeight: "700",
              color: colors.white,
            }}
          >
            Useful Links
          </p>
          {links.map((item, index) => (
            <p
              key={index}
              style={{
                fontSize: "16px",

                color: colors.white,
                borderWidth: "0px 0px 1px 0px",
                paddingBottom: "10px",

                borderStyle: "solid",
              }}
            >
              <Link
                onClick={() => window.scrollTo(0, 0)}
                style={{
                  color: "#ffffff",
                }}
                to={`/services/${item.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {item}
              </Link>
            </p>
          ))}
        </Col>
        <Col style={{}} sm={sm} md={md} lg={lg} xl={xl} xs={xs}>
          <p
            style={{
              fontSize: "20px",
              fontWeight: "700",
              color: colors.white,
              paddingTop: "30px",
            }}
          />

          {link1.map((item, index) => (
            <p
              key={index}
              style={{
                fontSize: "16px",

                color: colors.white,
                borderWidth: "0px 0px 1px 0px",
                paddingBottom: "10px",

                borderStyle: "solid",
              }}
            >
              <Link
                onClick={() => window.scrollTo(0, 0)}
                style={{
                  color: "#ffffff",
                }}
                to={`/services/${item.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {item}
              </Link>
            </p>
          ))}
        </Col>
      </Row>
    </>
  );
}

export default Footer;
