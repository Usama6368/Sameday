import React, { useEffect, useRef, useState } from "react";
import { Button, Table } from "react-bootstrap";
import Section6 from "../Home/SubComponent/Section6";
import colors from "../../../config/colors";
import LandingPage from "../Home/SubComponent/LandingPage";
import { useNavigate, useParams } from "react-router-dom";
import Section4 from "../Home/SubComponent/Section4";
import Testomonials from "../Home/SubComponent/Testomonials";
import parse from "html-react-parser";
import { serviceArray } from "../../../config/data";
import CAnimationView from "../../../CustomComponent/CAnimationView";
import info from "../../../config/info.json";
function Services() {
  const { id } = useParams();

  const navigation = useNavigate();

  const ref = useRef(null);

  return (
    <CAnimationView>
      <LandingPage
        onLocationPress={() =>
          ref.current.scrollIntoView({ behavior: "smooth" })
        }
        id={id}
      />

      {/* <Testomonials /> */}

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
            textTransform: "capitalize",
          }}
        >
          {id.replace(/-/g, "  ")}
        </span>
        <br />
        <br />

        {serviceArray[id].map((item, index) => (
          <React.Fragment key={index}>
            {item}
            <br />
          </React.Fragment>
        ))}
        <span
          style={{
            color: "black",
            fontSize: "16px",
          }}
        >
          If you would like an immediate quote or more information on our
          scheduled courier services, you can call us on{" "}
          <b
            style={{
              color: colors.blue,
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            {info.landline}
          </b>{" "}
          or you can email us at{" "}
          <b
            style={{
              fontWeight: "bold",
              color: colors.blue,
              textDecoration: "underline",
              fontSize: "17px",
            }}
          >
            {info.email}
          </b>
          . Alternatively you can complete the quote form.
        </span>

        <br />
        <Button
          onClick={() => {
            navigation("/quote");
            window.scrollTo(0, 0);
          }}
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
          padding: "3vw",
        }}
      >
        <Table responsive striped hover>
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
              <th colSpan={2}> Pallets *</th>
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
        <div ref={ref}>
          <Section4 />
        </div>
        <br />
        <br />
        <Section6 />
        <br />
        <br />
      </div>
    </CAnimationView>
  );
}

export default Services;
