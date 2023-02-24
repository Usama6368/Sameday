import React, { useRef } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { BsNutFill } from "react-icons/bs";
import colors from "../../../config/colors";
import CAnimationView from "../../../CustomComponent/CAnimationView";
import LandingPage from "./SubComponent/LandingPage";

import Section1 from "./SubComponent/Section1";
import Section2 from "./SubComponent/Section2";
import Section3 from "./SubComponent/Section3";
import Section4 from "./SubComponent/Section4";
import Section6 from "./SubComponent/Section6";
import Section8 from "./SubComponent/Section8";
import Testomonials from "./SubComponent/Testomonials";
export default function Home() {
  const ref = useRef(null);
  return (
    <CAnimationView>
      <LandingPage
        onLocationPress={() =>
          ref.current.scrollIntoView({ behavior: "smooth" })
        }
      />

      <Section1 />
      <br />
      <Section2 />
      <br />

      <Section3 />
      <br />
      <Row
        ref={ref}
        style={{
          justifyContent: "center",
        }}
      >
        <Row
          style={{
            width: "95%",
          }}
        >
          <Section4 ref={ref} />
        </Row>
      </Row>

      {/* <br />
      <Testomonials /> */}
      <br />
      <Section6 />
      <br />
    </CAnimationView>
  );
}
