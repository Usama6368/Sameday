import React from "react";
import { Col, Row } from "react-bootstrap";

import colors from "../../config/colors";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import info from "../../config/info.json";
function Header() {
  const navigation = useNavigate();
  const fontSize = "1.2vw";

  return (
    <Row
      className="topheader"
      style={{
        backgroundColor: colors.blue,
        color: colors.white,

        // padding: "10px 0px 10px 0px",
      }}
    >
      <div
        style={{
          width: "87%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <ul
          style={{
            color: colors.white,
            listStyle: "none",
            display: "flex",
            alignItems: "center",
            fontSize: fontSize,
            marginBottom: "0px",
          }}
        >
          {[
            {
              name: "Office Hours: 24 / 7 Days A Week",
            },
            {
              name: info.email,
            },
            {
              name: info.landline,
            },
          ].map((item, index) => (
            <li
              style={{
                cursor: "pointer",
                marginRight: "15px",
              }}
            >
              {item.name}
            </li>
          ))}
          <li
            style={{
              marginLeft: "22vw",
            }}
          >
            <ul
              style={{
                display: "flex",
                flexDirection: "row",
                listStyle: "none",
                alignItems: "center",
                marginBottom: "0px",

                padding: 0,
                margin: 0,
              }}
            >
              <li
                style={{
                  marginRight: "10px",
                }}
              >
                <FaFacebookF size={fontSize} color={colors.white} />
              </li>
              <li
                style={{
                  marginRight: "10px",
                }}
              >
                <BsInstagram size={fontSize} color={colors.white} />
              </li>
              <li
                style={{
                  marginRight: "10px",
                }}
              >
                <BsTwitter size={fontSize} color={colors.white} />
              </li>
              <li>
                <FaLinkedinIn size={fontSize} color={colors.white} />
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div
        onClick={() => {
          navigation("/quote");
          window.scrollTo(0, 0);
        }}
        style={{
          width: "13%",
          backgroundColor: "#1A1F60",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: fontSize,
          height: "75px",
          fontWeight: "bold",
          textAlign: "center",

          cursor: "pointer",
        }}
      >
        Get A free Quote
      </div>
    </Row>
  );
}

export default Header;
