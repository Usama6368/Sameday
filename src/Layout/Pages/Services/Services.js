import React from "react";
import { Button, Col, Form, Row, Table } from "react-bootstrap";
import Section6 from "../Home/SubComponent/Section6";
import img1 from "../../../assets/Rectangle17.png";
import img2 from "../../../assets/Rectangle20.png";
import colors from "../../../config/colors";
import { BsCheck, BsCheckCircleFill, BsCheckLg } from "react-icons/bs";
function Services() {
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
    <>
      <div
        style={{
          padding: "50px 50px 50px 50px",
          backgroundColor: "#F2F2F2",
        }}
      >
        <span
          style={{
            color: "black",
            fontSize: "15px",
            fontWeight: 550,
          }}
        >
          Same Day Couriers
        </span>
        <br />
        <span
          style={{
            color: colors.blue,
            fontSize: "30px",
            fontWeight: 700,
          }}
        >
          Scheduled Courier Services
        </span>
        <br />
        <br />

        <span style={heading}>
          Our dedicated, round the clock Collect Same Day Couriers service is
          available, throughout mainland UK, every day of the year, with over
          15,000 vehicles in our fleet from bikes to trucks providing you with a
          complete logistics solution.
        </span>
        <br />
        <div
          style={{
            color: "black",
            fontSize: "15px",
            fontWeight: 600,
            margin: "20px 0px 0px 0px",
          }}
        >
          Whatever, wherever, whenever. We deliver across the country UK 24/7.
        </div>
        <br />
        <span style={heading}>
          No matter what your consignment, no matter where it needs to go, no
          matter whether you’re a multinational corporation or an small
          business, we’ll collect your time and condition-critical goods within
          one hour and deliver it to any UK destination the same day –
          guaranteed. Your package will be carried by a dedicated vehicle
          courier with only your goods on board, and all consignments are fully
          insured for your peace of mind.
        </span>
        <br />
        <div
          style={{
            color: "black",
            fontSize: "15px",
            fontWeight: 600,
            margin: "20px 0px 0px 0px",
          }}
        >
          Same Day Scheduled Courier Services
        </div>
        <br />
        <span style={heading}>
          Whatever specialist delivery services you need, we can help with that
          too. We can offer confidential document collection and delivery, a
          same day wait and return courier service, same-day heavy goods
          delivery and aviation same-day deliveries. If you have a critically
          urgent parcel delivery, whether its components, servers or other
          hardware, we can handle it – just as we can everything from
          engineering tools and equipment to emergency deliveries of medical
          equipment, supplies or general goods – wherever it needs to go. We
          offer a personalised scheduled courier service that is reliable 24
          hours per day, 7 days per week. Our network of vehicles are all over
          the UK so we’re guaranteed to have the perfect courier to transport
          your package.
        </span>
        <br />
        <ul style={{ margin: "20px 0px 20px 0px" }}>
          <li> Courier collection within 60 mins from anywhere</li>
          <li> Instant quotes</li>
          <li> Delivery and collection to and from anywhere in the UK</li>
          <li> 24/7 customer service</li>
          <li> 15,000 vehicles nationwide</li>
          <li> All consignments fully insured </li>
          <li> Same day wait and return service available</li>
          <li>
            {" "}
            Personal service with real people that will help make sure you get
            exactly what you need today.
          </li>
        </ul>
        <br />
        <span style={heading}>
          If you would like an immediate quote or more information on our
          scheduled courier services, you can call us on 0800 102 6025 or you
          can email us at info@collectsameday.co.uk. Alternatively you can
          complete the quote form.
        </span>

        <br />
        <Button
          style={{
            backgroundColor: "#1272BE",
            borderRadius: "3px",
            marginTop: "30px",
            fontWeight: 700,
          }}
        >
          Get a Free Quote
        </Button>
        <br />
        <br />
      </div>

      <div
        style={{
          padding: "50px 50px 50px 50px",
        }}
      >
        <Table striped hover>
          <thead>
            <tr
              style={{
                textAlign: "center",
                fontSize: "12px",
              }}
            >
              <th></th>
              <th>Load</th>
              <th>Length</th>
              <th>Width</th>
              <th>Height</th>
              <th style={{}}> Pallets *</th>
            </tr>

            <tr
              style={{
                textAlign: "center",
                fontSize: "12px",
              }}
            >
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th>Standard</th>
              <th>Euro</th>
            </tr>
          </thead>
          <tbody>
            {[0, 1, 2, 3, 4, 5, 6].map((item, index) => (
              <tr
                key={index}
                style={{
                  fontSize: "12px",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                <td>
                  <span> Small Van 1.6m</span>
                  <br />
                  <span
                    style={{
                      fontWeight: "300",
                    }}
                  >
                    Length also available Refrigerated transport option also
                    available (UK only)
                  </span>
                </td>
                <td>400kg</td>
                <td>1.4m</td>
                <td>1.2m</td>
                <td>1.1m</td>
                <td>1</td>
                <td>1</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <br />
        <br />
        <Row
          style={{
            textAlign: "center",
          }}
        >
          <span style={{ color: "black", fontWeight: 550, fontSize: "17px" }}>
            Local to you{" "}
          </span>
          <br />
          <span
            style={{ color: colors.blue, fontWeight: 600, fontSize: "30px" }}
          >
            Our Locations
          </span>
          <br />
          <span style={{ textAlign: "center", margin: "20px 0px 20px 0px" }}>
            Collect Same Day Couriers are a local & nationwide courier service.
            Whether you want your parcel delivering from London to Manchester,
            or Glasgow to Southampton – We can deliver, the same day!
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
                height: "500px",
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
              <Button>Get a Free Quote</Button>
            </Col>
            <Col
              style={{
                backgroundImage: `url(${img2})`,
                height: "500px",
              }}
              sm={sm}
              lg={lg}
              md={md}
              xl={xl}
            ></Col>
            <Col
              style={{
                height: "500px",
                backgroundImage: `url(${img1})`,
              }}
              sm={sm}
              lg={lg}
              md={md}
              xl={xl}
            ></Col>
            <Col
              style={{
                height: "500px",
                backgroundColor: colors.blue,

                padding: "30px",
              }}
              sm={sm}
              lg={lg}
              md={md}
              xl={xl}
            >
              <span
                style={{ color: "#FFFFFF", fontWeight: 550, fontSize: "20px" }}
              >
                You can trust us
              </span>
              <br />
              <span
                style={{ color: "#FFFFFF", fontWeight: 600, fontSize: "30px" }}
              >
                Safe. Secure. Reliable.
              </span>
              <br />
              <p style={{ color: "#FFFFFF", marginTop: "30px" }}>
                Collect Same Day Courier services are available to both personal
                and business users and can accommodate both high volume users
                and emergency shipments – anything from an envelope to handling
                a large complex logistical consignments.
              </p>

              <BsCheckCircleFill color="#1272BE" size={"17px"} />

              <span style={{ marginLeft: "10px", color: colors.white }}>
                15,000 vehicles across the country.
              </span>
              <br />

              <BsCheckCircleFill color="#1272BE" size={"17px"} />

              <span style={{ marginLeft: "10px", color: colors.white }}>
                All consignments fully insured.
              </span>
              <br />

              <BsCheckCircleFill color="#1272BE" size={"17px"} />

              <span style={{ marginLeft: "10px", color: colors.white }}>
                Personal service from our friendly team.
              </span>
              <br />

              <BsCheckCircleFill color="#1272BE" size={"17px"} />

              <span style={{ marginLeft: "10px", color: colors.white }}>
                Same day wait and return service available.
              </span>
              <br />

              <BsCheckCircleFill color="#1272BE" size={"17px"} />

              <span
                style={{
                  marginLeft: "10px",
                  color: colors.white,
                  fontWeight: 700,
                }}
              >
                Collection within 60 mins & delivered the same day.
              </span>
              <br />

              <br />
              <Button
                style={{
                  width: "15vw",
                  margin: "10px 0px 20px 0px",
                  fontWeight: 700,
                }}
              >
                Get a Free Quote
              </Button>
              <br />
            </Col>
          </Row>
        </Row>
        <br />
        <br />
        <Section6 />
        <br />
        <br />
      </div>
    </>
  );
}

export default Services;
