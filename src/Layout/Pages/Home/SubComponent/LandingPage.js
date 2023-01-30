import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import myImage from "../../../../assets/bg1.png";
import colors from "../../../../config/colors";
import Quote from "./Quote";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./Landing.css";
function LandingPage() {
  const sm = 12;
  const lg = 6;
  const md = 6;

  const [menu, setMenu] = useState(false);

  const links = [
    "Same Day Courier",
    "Urgent Courier Service",
    "Scheduled Couriers",
    "Same Day Business Couriers",
    "Last Mile Delivery",
  ];

  const link1 = [
    "Pallet Courier Service",
    "Refrigerated Courier Service",
    "Legal & Documents Courier",
    "Medical Courier Service",
    "Engineering Parts Courier",
    "Hazardous Goods Couriers",
    "High Value & Fragile Goods",
    "Hiab & Moffett Mounty Couriers",
  ];
  return (
    <div
      style={{
        backgroundImage: `url(${myImage})`,
      }}
    >
      <Row
        className="main"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <Col style={{ margin: "20px 0px 20px 0px" }} sm={12} lg={12} md={12}>
          <Row
            className="myheader"
            style={{
              alignItems: "center",
            }}
          >
            <Col xs={12} sm={12} lg={4} md={12} xl={4}>
              <img
                style={{ height: "65px", width: "152px" }}
                src={require("../../../../assets/logo.png")}
              />
            </Col>
            <br />

            <Col style={{}} xs={12} sm={12} lg={8} md={12} xl={8}>
              <ul
                style={{
                  color: colors.white,
                  listStyle: "none",
                  display: "flex",
                  fontSize: "15px",
                  justifyContent: "space-between",
                }}
              >
                {[
                  {
                    name: "Some Day Couriers",
                    link: "some-day-courier",
                  },
                  {
                    name: "Services",
                    link: "services",
                  },
                  {
                    name: "Locations",
                    link: "locations",
                  },
                  {
                    name: "Trade Accounts",
                    link: "trade-accounts",
                  },
                  {
                    name: "About",
                    link: "aboutus",
                  },
                  {
                    name: "Contact",
                    link: "contactus",
                  },
                  {
                    name: "Search",
                    link: "search",
                  },
                ].map((item, index) =>
                  item.name === "Search" ? (
                    <BsSearch />
                  ) : item.name !== "Services" ? (
                    <li
                      style={{
                        cursor: "pointer",
                      }}
                    >
                      <Link to={item.link}>{item.name}</Link>
                    </li>
                  ) : (
                    <>
                      <li
                        style={{
                          cursor: "pointer",
                        }}
                        onMouseEnter={() => {
                          setMenu(true);
                        }}
                        onMouseLeave={() => {
                          setMenu(false);
                        }}
                      >
                        {item.name}

                        {menu && (
                          <div
                            onMouseEnter={() => {
                              setMenu(true);
                            }}
                            onMouseLeave={() => {
                              setMenu(false);
                            }}
                            style={{
                              position: "absolute",
                              backgroundColor: colors.blue,

                              top: "118px",
                              marginLeft: "10px",
                            }}
                          >
                            <Row
                              style={{
                                backgroundColor: colors.blue,

                                padding: "20px",
                              }}
                            >
                              <Col
                                style={{
                                  display: "flex",

                                  flexDirection: "column",
                                }}
                                sm={6}
                                md={6}
                                lg={6}
                                xl={6}
                                xs={6}
                              >
                                <p
                                  style={{
                                    fontSize: "20px",
                                    fontWeight: "700",
                                    color: colors.white,
                                    borderWidth: "0px 0px 1px 0px",

                                    borderStyle: "solid",
                                    marginBottom: "20px",
                                    borderColor: "#FFFFFF27",
                                  }}
                                >
                                  Services
                                </p>
                                {links.map((item, index) => (
                                  <p
                                    key={index}
                                    style={{
                                      fontSize: "14px",

                                      color: colors.white,
                                      borderWidth: "0px 0px 1px 0px",
                                      paddingBottom: "3px",
                                      borderColor: "#FFFFFF27",
                                      borderStyle: "solid",
                                    }}
                                  >
                                    {item}
                                  </p>
                                ))}
                              </Col>
                              <Col
                                style={{}}
                                sm={6}
                                md={6}
                                lg={6}
                                xl={6}
                                xs={6}
                              >
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
                                      fontSize: "14px",

                                      color: colors.white,
                                      borderWidth: "0px 0px 1px 0px",
                                      paddingBottom: "3px",
                                      borderColor: "#FFFFFF27",
                                      borderStyle: "solid",
                                    }}
                                  >
                                    {item}
                                  </p>
                                ))}
                              </Col>
                            </Row>
                          </div>
                        )}
                      </li>
                    </>
                  )
                )}
              </ul>
            </Col>
          </Row>
        </Col>
        <Col className="same" style={{}} sm={sm} md={md} lg={lg}>
          <p className="sameday">Same Day & Urgent Courier Services!</p>
          <span
            style={{
              color: colors.white,
              textAlign: "justify",
            }}
          >
            {`Collect Same Day Couriers is your best choice for same day courier
          services and provides excellent local & nationwide courier services at
          affordable prices. We are the UK’s most reliable urgent & same day
          courier service provider.`}
          </span>
          <br />
          <br />

          <span
            style={{
              color: colors.white,
              textAlign: "justify",
            }}
          >
            {`Collect Same Day Couriers is your best choice for same day courier
          services and provides excellent local & nationwide courier services at
          affordable prices. We are the UK’s most reliable urgent & same day
          courier service provider.`}
          </span>

          <br />
          <br />

          <span
            style={{
              color: colors.white,
              textAlign: "justify",
              textTransform: "uppercase",
            }}
          >
            {`call us now`}
          </span>

          <br />

          <span
            style={{
              color: colors.white,
              fontSize: "40px",
              fontWeight: "bold",
            }}
          >
            0800 102 6025
          </span>
        </Col>
        <Col sm={sm} md={md} lg={lg}>
          <Quote />
        </Col>
      </Row>
      <br />
      <br />
    </div>
  );
}

export default LandingPage;
