import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { AiOutlineMenu } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { Link, useNavigate, useLocation } from "react-router-dom";
import colors from "../config/colors";
import { link1, links, pages } from "../config/data";
import "./CNavbar.css";
export default function CNavbar({
  desktopStyle,
  onLocationPress,
  marginTop = "20px",
}) {
  const [nav, setNav] = useState(0);
  const [menu, setMenu] = useState(false);

  const { pathname } = useLocation();

  // str.replace(/-+/g, " ").toUpperCase();

  return (
    <>
      {(nav === 1 || nav === 2) && (
        <div
          style={{
            height: "700px",
            backgroundColor: colors.blue,
            position: "absolute",
            width: "100%",
            top: "0",
            padding: "20px",
            left: 0,
          }}
        >
          <div
            style={{
              justifyContent: "flex-end",
              display: "flex",
            }}
          >
            <RxCross1
              style={{ alignSelf: "flex-end" }}
              onClick={() => {
                if (nav === 2) {
                  setNav(1);
                } else {
                  setNav(0);
                }
              }}
              color={"white"}
            />
          </div>
          {nav === 1 ? (
            <div style={{}}>
              <ul
                style={{
                  color: colors.white,
                  listStyle: "none",
                  margin: 0,
                  padding: 0,

                  fontSize: "20px",
                  textAlign: "left",
                }}
              >
                {pages.map((item, index) =>
                  item.name === "Locations" ? (
                    <Link to="" key={index}>
                      <li
                        onClick={() => {
                          onLocationPress();
                          setNav(0);
                        }}
                        style={{
                          cursor: "pointer",
                          padding: "10px 0px 10px 0px",
                        }}
                      >
                        {item.name}
                      </li>
                    </Link>
                  ) : item.name === "Services" ? (
                    <Link to="" key={index}>
                      <li
                        onClick={() => {
                          setNav(2);
                        }}
                        style={{
                          padding: "10px 0px 10px 0px",
                        }}
                      >
                        {item.name}
                      </li>
                    </Link>
                  ) : (
                    <Link to={item.link} key={index}>
                      <li
                        onClick={() => {
                          setNav(0);
                        }}
                        style={{
                          padding: "10px 0px 10px 0px",
                        }}
                      >
                        {item.name}
                      </li>
                    </Link>
                  )
                )}
              </ul>
            </div>
          ) : (
            <Row
              style={{
                backgroundColor: colors.blue,
              }}
            >
              <Col
                style={{
                  display: "flex",

                  flexDirection: "column",
                }}
                sm={12}
                md={12}
                lg={12}
              >
                <p
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    color: colors.white,
                    borderWidth: "0px 0px 1px 0px",
                    textAlign: "left",
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
                      textAlign: "left",
                      cursor: "pointer",
                      color: colors.white,
                      borderWidth: "0px 0px 1px 0px",
                      paddingBottom: "3px",
                      borderColor: "#FFFFFF27",
                      borderStyle: "solid",
                    }}
                  >
                    <Link
                      style={{
                        color: "#ffffff",
                      }}
                      to={`/services/${item
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                    >
                      {item}
                    </Link>
                  </p>
                ))}
              </Col>
              <Col sm={12} md={12} lg={12}>
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
                      cursor: "pointer",
                      fontSize: "14px",
                      textAlign: "left",
                      color: colors.white,
                      borderWidth: "0px 0px 1px 0px",
                      paddingBottom: "3px",
                      borderColor: "#FFFFFF27",
                      borderStyle: "solid",
                    }}
                  >
                    <Link
                      style={{
                        color: "#ffffff",
                      }}
                      to={`/services/${item
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                    >
                      {item}
                    </Link>
                  </p>
                ))}
              </Col>
            </Row>
          )}
        </div>
      )}

      <Col style={desktopStyle} sm={12} lg={12} md={12}>
        <Row
          className="myheader"
          style={{
            alignItems: "center",
            marginTop: marginTop,
            marginBottom: "20px",
            marginLeft: "0px",
          }}
        >
          <Col xs={12} sm={12} lg={4} md={12} xl={4}>
            <img
              style={{ height: "65px", width: "152px" }}
              src={require("../assets/logo.png")}
            />
          </Col>
          <br />

          <Col xs={12} sm={12} lg={8} md={12} xl={8}>
            <ul
              style={{
                color: colors.white,
                listStyle: "none",
                display: "flex",
                fontSize: "15px",
              }}
            >
              {pages.map((item, index) => (
                <div
                  style={{
                    marginRight: "40px",
                  }}
                  key={index}
                >
                  {item.name === "Locations" ? (
                    <Link to="" key={index}>
                      <li
                        onClick={onLocationPress}
                        style={{
                          cursor: "pointer",
                        }}
                      >
                        {item.name}
                      </li>
                    </Link>
                  ) : item.name !== "Services" ? (
                    <li
                      style={{
                        cursor: "pointer",
                      }}
                    >
                      <Link to={item.link}>{item.name}</Link>
                    </li>
                  ) : (
                    <Link key={index} to="">
                      <li
                        style={{
                          cursor: "pointer",
                        }}
                        onMouseEnter={() => {
                          setMenu(true);
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

                              top: "8rem",
                              marginLeft: "0px",
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
                                    <Link
                                      style={{
                                        color: "#ffffff",
                                      }}
                                      to={`/services/${item
                                        .toLowerCase()
                                        .replace(/\s+/g, "-")}`}
                                    >
                                      {item}
                                    </Link>
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
                                    <Link
                                      style={{
                                        color: "#ffffff",
                                      }}
                                      to={`/services/${item
                                        .toLowerCase()
                                        .replace(/\s+/g, "-")}`}
                                    >
                                      {item}
                                    </Link>
                                  </p>
                                ))}
                              </Col>
                            </Row>
                          </div>
                        )}
                      </li>
                    </Link>
                  )}
                </div>
              ))}
            </ul>
          </Col>
        </Row>
      </Col>
      <Row
        className="myheaders"
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "10px",
          marginLeft: "0px",
        }}
      >
        <Col>
          <img
            style={{ height: "65px", width: "152px" }}
            src={require("../assets/logo.png")}
          />
        </Col>

        <Col
          style={{
            textAlign: "right",
          }}
        >
          <AiOutlineMenu
            onClick={() => {
              setNav(1);
            }}
            size={"30px"}
            color={colors.white}
          />
        </Col>
      </Row>
    </>
  );
}
