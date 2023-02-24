import React from "react";
import { Row } from "react-bootstrap";
import tagImage from "../../../../assets/tag.png";
import colors from "../../../../config/colors";
export default function Section6() {
  return (
    <Row
      style={{
        justifyContent: "center",
      }}
    >
      <Row
        style={{
          backgroundImage: `url(${tagImage})`,

          borderRadius: "5px",
          boxShadow: "1px 2px 9px #00000050",
          padding: "20px",
        }}
      >
        <span
          style={{
            fontSize: "16px",
            textAlign: "center",
            color: colors.white,
          }}
        >
          Some of our happy customers
        </span>

        <span
          style={{
            fontSize: "18px",
            textAlign: "center",
            color: colors.white,
            fontWeight: "bold",
          }}
        >
          Local to you
        </span>

        <ul
          style={{
            color: colors.white,
            listStyle: "none",
            display: "flex",
            fontSize: "15px",
            justifyContent: "space-evenly",
            marginTop: "50px",
          }}
        >
          {[
            require("../../../../assets/l1.png"),
            require("../../../../assets/l2.png"),
            require("../../../../assets/l4.png"),
            // require("../../../../assets/l3.png"),
          ].map((item, index) => (
            <div key={index} style={{}}>
              <img
                style={
                  index == 0
                    ? {
                        height: "6vw",
                        width: "14vw",
                      }
                    : index === 1
                    ? {
                        height: "6vw",
                        width: "6vw",
                      }
                    : index === 2
                    ? { height: "6vw", width: "12vw" }
                    : { height: "6vw", width: "18vw" }
                }
                src={item}
              />
            </div>
          ))}
        </ul>
      </Row>
    </Row>
  );
}
