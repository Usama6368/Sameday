import React, { useRef } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import img1 from "../../../../assets/Rectangle17.png";
import img2 from "../../../../assets/Rectangle20.png";
import img3 from "../../../../assets/Rectangle22.png";
import colors from "../../../../config/colors";
import { BsCheck, BsCheckCircleFill, BsCheckLg } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
export default function Section4() {
  const navigation = useNavigate();

  const sm = 12;
  const md = 6;
  const lg = 6;
  const xl = 6;

  const ulStyle = {
    listStyle: "none",
    paddingLeft: "0rem",
    paddingRight: "0rem",
  };
  const heading = {
    color: "black",
    fontSize: "16px",
  };
  const inputStyle = {
    backgroundColor: "#DCDCDC",
    borderStyle: "none",
    height: "35px",
    borderRadius: "3px",
    color: colors.white,
    margin: "20px 0px 20px 0px",
  };
  return (
    <React.Fragment>
      <Row
        style={{
          textAlign: "center",
        }}
      >
        <span style={{ color: "black", fontWeight: 550, fontSize: "17px" }}>
          Local to you
        </span>
        <br />
        <span style={{ color: colors.blue, fontWeight: 600, fontSize: "30px" }}>
          Our Locations
        </span>
        <br />
        <span style={{ textAlign: "center", margin: "20px 0px 20px 0px" }}>
          Collect Same Day Couriers are a local & nationwide courier service.
          Whether you want your parcel delivering from London to Manchester, or
          Glasgow to Southampton – We can deliver, the same day!
        </span>
        <br />
      </Row>
      <Row
        style={{
          justifyContent: "center",
        }}
      >
        <Row style={{}}>
          <Col
            style={{
              backgroundColor: "#FFFFFF",
              boxShadow: "-2px 4px 25px -4px rgba(0, 0, 0, 0.15)",
              padding: "30px",
            }}
            sm={sm}
            lg={lg}
            md={md}
            xl={xl}
          >
            <span style={{ color: colors.blue, fontWeight: 400 }}>
              Find a location near you
            </span>
            <Form.Control style={inputStyle} type="text" />
            <span style={{ color: colors.blue, fontWeight: 400 }}>
              Most popular
            </span>
            <br />
            <br />
            <Row
              style={{
                fontSize: "15px",
                paddingLeft: "0px",
              }}
            >
              <Col>
                <ul style={ulStyle}>
                  <li> London</li>

                  <li>Edinburgh</li>

                  <li>Manchester</li>
                  <li>Birmingham</li>
                  <li> Glasgow</li>
                </ul>
              </Col>
              <Col>
                <ul style={ulStyle}>
                  <li>Liverpool</li>

                  <li>Bristol</li>

                  <li>Cambridge</li>
                  <li>Cardiff</li>
                  <li> Leeds</li>
                </ul>
              </Col>
              <Col>
                <ul style={ulStyle}>
                  <li> Bath</li>

                  <li>Nottinghaml</li>

                  <li>Southampton</li>
                  <li>Newcastle</li>
                  <li> Sheffield</li>
                </ul>
              </Col>
            </Row>
            <span
              style={{
                color: colors.blue,

                fontWeight: 400,
              }}
            >
              Regions
            </span>

            <br />
            <br />
            <Row>
              <Col>
                <ul style={ulStyle}>
                  <li> South West</li>

                  <li>South East</li>

                  <li>East Anglia</li>
                </ul>
              </Col>
              <Col>
                <ul style={ulStyle}>
                  <li> West Midlands</li>

                  <li>East Midlands</li>

                  <li> Yorkshire</li>
                </ul>
              </Col>
              <Col>
                <ul style={ulStyle}>
                  <li> North West</li>

                  <li> North East</li>
                </ul>
              </Col>
            </Row>
            <Button
              onClick={() => {
                navigation("/quote");
                window.scrollTo(0, 0);
              }}
            >
              Get a Free Quote
            </Button>
          </Col>
          <Col
            style={{
              backgroundImage: `url(${img2})`,
            }}
            sm={sm}
            lg={lg}
            md={md}
            xl={xl}
          ></Col>
          <Col
            style={{
              backgroundImage: `url(${img3})`,
            }}
            sm={sm}
            lg={lg}
            md={md}
            xl={xl}
          ></Col>
          <Col
            style={{
              backgroundColor: "#FFFFFF",
              boxShadow: "-2px 4px 25px -4px rgba(0, 0, 0, 0.15)",
              padding: "30px",
            }}
            sm={sm}
            lg={lg}
            md={md}
            xl={xl}
          >
            <span
              style={{ fontWeight: 550, fontSize: "35px", fontWeight: "bold" }}
            >
              Collect Same Day Couriers
            </span>
            <br />
            <br />
            <span style={{ fontSize: "16px" }}>
              Delivering local & nationwide throughout UK & Mainland - time
              critical document or parcel on the same day is what we do. Collect
              Same Day Couriers specialises in meeting urgent deadlines, keeping
              critical systems running, or meeting your customers increasing
              expectations every day of the year.
            </span>
            <br />
            <br />
            <span style={{ fontSize: "16px" }}>
              Your consignments need to be delivered by a partner you can trust
              – as it’s your reputation that’s on the line. Collect Same Day
              Couriers is the UK’s most reliable urgent & same day courier
              service provider.
            </span>
            <br />

            <Button
              style={{
                margin: "20px 0px 20px 0px",
              }}
              onClick={() => {
                navigation("/quote");
                window.scrollTo(0, 0);
              }}
            >
              Get a Free Quote
            </Button>
            <br />

            <span
              style={{ fontWeight: 550, fontSize: "25px", fontWeight: "bold" }}
            >
              Call us now
            </span>
            <br />
            <span
              style={{ fontWeight: 550, fontSize: "35px", fontWeight: "bold" }}
            >
              0800 102 6025
            </span>
          </Col>
        </Row>
      </Row>
    </React.Fragment>
  );
}
