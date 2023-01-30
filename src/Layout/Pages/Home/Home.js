import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import colors from "../../../config/colors";
import LandingPage from "./SubComponent/LandingPage";

import Section1 from "./SubComponent/Section1";
import Section2 from "./SubComponent/Section2";
import Section6 from "./SubComponent/Section6";
import Section8 from "./SubComponent/Section8";
export default function Home() {
  return (
    <React.Fragment>
      <LandingPage />

      <Section1 />
      <br />
      <Section2 />

      <br />
      <Section6 />
      <br />
    </React.Fragment>
  );
}
