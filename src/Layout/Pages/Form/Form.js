import React, { useEffect } from "react";
import Quote from "../../Pages/Home/SubComponent/Quote";
import img from "../../../assets/bg1.png";
import Section1 from "../Home/SubComponent/Section1";
import colors from "../../../config/colors";
import CNavbar from "../../../CustomComponent/CNavbar";
import CAnimationView from "../../../CustomComponent/CAnimationView";
export default function Form() {
  return (
    <CAnimationView>
      <div
        style={{
          backgroundImage: `url(${img})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          style={{
            backgroundColor: "#00000065",
            padding: "20px 80px 0px 80px",
          }}
        >
          <CNavbar marginTop="0px" />
          <div
            style={{
              justifyContent: "center",
              display: "flex",
            }}
          >
            <div>
              <h2
                style={{
                  textAlign: "center",
                  color: colors.white,
                  fontSize: "40px",
                  fontWeight: "bold",
                  margin: "30px 0px 30px 0px",
                }}
              >
                Free and no Obligation
              </h2>
              <div
                style={{
                  borderRadius: "5px",
                }}
              >
                <Quote backgroundColor="#00000080" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <Section1 marginTop="0px" />
      <br />
    </CAnimationView>
  );
}
