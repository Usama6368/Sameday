import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { icons } from "react-icons";
import { BsInstagram, BsTelephone, BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { TfiWorld } from "react-icons/tfi";
import colors from "../../../config/colors";

import GoogleMapReact from "google-map-react";
import myImage from "../../../assets/bg1.png";
import CBackgorundImage from "../../../CustomComponent.js/CBackgorundImage";
function ContactUs() {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
  // const AnyReactComponent = ({ text }) => <div>{text}</div>;
  const arr = [
    {
      icon: <BsTelephone color="#231F20" size="25px" />,
      details: "+1-2345-2345",
      name: "Phone",
    },
    {
      icon: <HiOutlineMail fontWeight={500} color="#231F20" size="25px" />,
      details: "Contact@goodlayers.com",
      name: "Email",
    },
    {
      icon: <TfiWorld color="#231F20" size="25px" />,
      details: "View On Google Map",
      name: "Location",
    },
  ];
  return (
    <>
      <CBackgorundImage heading={"Contact Us"} detail={"Get In Touch"} />
      <Row>
        {arr.map((item, index) => (
          <Col
            style={{
              padding: "40px 60px 40px 60px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",

              textAlign: "center",
            }}
            key={index}
            sm={6}
            lg={4}
            md={4}
          >
            {item.icon}
            <span style={{ marginTop: "25px", fontWeight: 550 }}>
              {item.name}
            </span>
            <span style={{ fontSize: 10, marginTop: "5px", fontWeight: 300 }}>
              {item.details}
            </span>
          </Col>
        ))}
      </Row>

      <Row
        style={{
          background: "#F2F2F2",

          textAlign: "center",
          padding: "35px 0px 35px 0",
          alignItems: "center",
        }}
      >
        <span style={{ color: "#2F3690", fontSize: "24px", fontWeight: 600 }}>
          Leave us your info{" "}
        </span>
        <span
          style={{ marginBottom: "25px", fontWeight: 550, fontSize: "12px" }}
        >
          and we will get back to you.
        </span>
        <span
          style={{
            flexDirection: "column",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Form.Control
            style={{
              background: "#FFFFFF",
              width: "45vw",
              marginBottom: "15px",
              height: "8vh",
            }}
            placeholder="Name*"
            type="text"
          />
          <Form.Control
            style={{
              background: "#FFFFFF",
              height: "8vh",
              width: "45vw",
              marginBottom: "15px",
            }}
            placeholder="Email*"
            type="text"
          />
          <Form.Control
            as="textarea"
            rows={3}
            style={{
              background: "#FFFFFF",
              width: "45vw",
              marginBottom: "25px",
            }}
            placeholder="Message*"
            type="text"
          />
          <Button
            style={{ width: "45vw", background: "#2F3690", height: "43px" }}
            color="#2F3690"
          >
            Send
          </Button>
        </span>
      </Row>
      <Row style={{ height: "70vh", width: "100%" }}>
        <GoogleMapReact
          defaultCenter={{
            lat: 10.99835602,
            lng: 77.01502627,
          }}
          defaultZoom="11"
        ></GoogleMapReact>
      </Row>
      <Row>
        <ul
          style={{
            display: "flex",
            flexDirection: "row",
            listStyle: "none",
            padding: "40px 0px 30px 0px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <li
            style={{
              marginRight: "50px",
            }}
          >
            <FaFacebookF size={"20px"} color="black" />
          </li>
          <li
            style={{
              marginRight: "50px",
            }}
          >
            <BsInstagram size={"20px"} color="black" />
          </li>
          <li
            style={{
              marginRight: "50px",
            }}
          >
            <BsTwitter size={"20px"} color="black" />
          </li>
          <li>
            <FaLinkedinIn size={"20px"} color="black" />
          </li>
        </ul>
      </Row>
    </>
  );
}

export default ContactUs;
