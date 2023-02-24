import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import img2 from "../../../../assets/Rectangle20.png";
import img3 from "../../../../assets/Rectangle22.png";
import colors from "../../../../config/colors";
import { useNavigate } from "react-router-dom";
import info from "../../../../config/info.json";
import CCitySearch from "../../../../CustomComponent/CCitySearch";
export default function Section4({ id }) {
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

  function chunkArray(array, size) {
    let result = [];
    for (let i = 0; i < array.length; i += size) {
      let chunk = array.slice(i, i + size);
      result.push(chunk);
    }
    return result;
  }

  let popularCityArray = chunkArray(info.popular, 5);
  let regionArray = chunkArray(info.regions, 3);
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
        <div className="d-flex justify-content-center">
          <Row
            style={{
              width: "55vw",
            }}
          >
            <span style={{ textAlign: "center", margin: "20px 0px 20px 0px" }}>
              Collect Same Day Couriers are a local & nationwide courier
              service. Whether you want your parcel delivering from London to
              Manchester, or Glasgow to Southampton – We can deliver, the same
              day!
            </span>
          </Row>
        </div>
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

            <CCitySearch />

            <span style={{ color: colors.blue, fontWeight: 400 }}>
              Most popular
            </span>
            <br />

            <Row
              style={{
                fontSize: "15px",
                paddingLeft: "0px",
              }}
            >
              {popularCityArray.map((chunk, index) => (
                <Col key={index} className="p-0">
                  <ul style={ulStyle}>
                    {chunk.map((item, index) => (
                      <li
                        style={{
                          cursor: "pointer",
                          fontWeight:
                            id?.replace(/-/g, " ").toLowerCase() ===
                            item.name.toLowerCase()
                              ? "bold"
                              : "normal",
                        }}
                        onClick={() => {
                          navigation(
                            `/location/${item.name
                              .replace(/\s+/g, "-")
                              .toLowerCase()}`
                          );
                          window.scrollTo(0, 0);
                        }}
                        key={index}
                      >
                        {item.name}
                      </li>
                    ))}
                  </ul>
                </Col>
              ))}
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

            <Row
              style={{
                fontSize: "15px",
                paddingLeft: "0px",
              }}
            >
              {regionArray.map((chunk, index) => (
                <Col key={index} className="p-0 " sm={12} lg={4} md={4} xl={4}>
                  <ul style={ulStyle}>
                    {chunk.map((item, index) => (
                      <li
                        style={{
                          cursor: "pointer",
                          fontWeight:
                            id?.replace(/-/g, " ").toLowerCase() ===
                            item.toLowerCase()
                              ? "bold"
                              : "normal",
                        }}
                        onClick={() => {
                          navigation(
                            `/location/${item
                              .replace(/\s+/g, "-")
                              .toLowerCase()}`
                          );
                          window.scrollTo(0, 0);
                        }}
                        key={index}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </Col>
              ))}
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
            <span style={{ fontWeight: 550, fontSize: "35px" }}>
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

            <span style={{ fontWeight: 550, fontSize: "25px" }}>
              Call us now
            </span>
            <br />
            <span style={{ fontWeight: 550, fontSize: "35px" }}>
              {info.landline}
            </span>
          </Col>
        </Row>
      </Row>
    </React.Fragment>
  );
}
