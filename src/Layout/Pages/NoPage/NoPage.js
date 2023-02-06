import React from "react";
import { Button, Card } from "react-bootstrap";
import { BiError } from "react-icons/bi";
import { Link } from "react-router-dom";
import colors from "../../../config/colors";

function NoPage() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          margin: "50px 0px 50px 0px",
          height: "50vh",
          boxShadow: "1px 2px 9px #00000050",
          width: "80%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <BiError fontSize={"100px"} color={"red"} />
        <h1
          style={{
            margin: "15px 0 15px 0px",
          }}
        >
          PAGE NOT FOUND !
        </h1>
        <Link to="/">
          <Button
            style={{
              backgroundColor: colors.blue,
            }}
          >
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default NoPage;
