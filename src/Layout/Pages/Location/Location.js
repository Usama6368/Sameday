import React, { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import colors from "../../../config/colors";
import { locationSectionHeader } from "../../../config/data";
import CAnimationView from "../../../CustomComponent/CAnimationView";
import CLocationTag from "../../../CustomComponent/CLocationTag";
import LandingPage from "../Home/SubComponent/LandingPage";
import Section4 from "../Home/SubComponent/Section4";
import Section6 from "../Home/SubComponent/Section6";
import "./Location.css";
import info from "../../../config/info.json";
import { Button } from "react-bootstrap";

export default function Location() {
  const { id } = useParams();

  const navigation = useNavigate();

  const ref = useRef(null);
  return (
    <CAnimationView>
      <CLocationTag id={id} />
      <LandingPage
        onLocationPress={() =>
          ref.current.scrollIntoView({ behavior: "smooth" })
        }
        id={id}
      />
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
        {locationSectionHeader(id)}
        <br />
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
        <div ref={ref}>
          <Section4 id={id} />
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
