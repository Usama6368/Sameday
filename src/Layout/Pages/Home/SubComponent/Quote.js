import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import colors from "../../../../config/colors";
import Form from "react-bootstrap/Form";

const inputStyle = {
  backgroundColor: "#626262",
  borderStyle: "none",
  height: "35px",
  borderRadius: "3px",
  color: colors.white,
};
const labelStyle = {
  color: colors.white,
  fontSize: "15px",
  fontWeight: "bold",
};

const buttonStyle = {
  backgroundColor: colors.blue,
  width: "30%",
  height: "35px",
  marginTop: "15px",

  borderRadius: 0,
};
function Quote() {
  const [tab, setTab] = useState(1);
  const [selectedCar, setSelectedCar] = useState();
  const cars = [
    {
      id: 1,
      name: "Car",
      image: require("../../../../assets/car.png"),
    },
    {
      id: 2,
      name: "Small Van",
      image: require("../../../../assets/small_van.png"),
    },
    {
      id: 3,
      name: "Short Wheel Base",
      image: require("../../../../assets/short.png"),
    },
    {
      id: 4,
      name: "Long Wheel Base",
      image: require("../../../../assets/long.png"),
    },
    {
      id: 5,
      name: "XL Wheel Base",
      image: require("../../../../assets/xl.png"),
    },
    {
      id: 6,
      name: "Luton - Tail Lift",
      image: require("../../../../assets/luton.png"),
    },
    {
      id: 7,
      name: "7.5T Lorry",
      image: require("../../../../assets/lorry.png"),
    },
    {
      id: 8,
      name: "Not Sure",
      image: require("../../../../assets/not_sure.png"),
    },
  ];
  return (
    <div
      style={{
        backgroundColor: "#00000040",
        padding: "25px",
        borderRadius: "7px",
      }}
    >
      <p
        style={{
          fontWeight: "bold",
          fontSize: "20px",
          color: colors.white,

          textAlign: "center",
        }}
      >
        Get a quote
      </p>

      <div
        style={{
          marginTop: "50px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            borderBottomWidth: "0.2px",
            borderStyle: "solid",
            color: "#C2C2C2",
            width: "140px",
          }}
        />
        <Row
          style={{
            justifyContent: "center",
            marginTop: "-25px",
          }}
        >
          {[1, 2, 3].map((item, index) => (
            <span
              onClick={() => setTab(item)}
              key={index}
              style={{
                height: "50px",
                width: "50px",
                borderRadius: "50px",
                backgroundColor: tab === item ? colors.blue : "#C2C2C2",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: colors.white,
                marginRight: "25px",
              }}
            >
              {item}
            </span>
          ))}
        </Row>
      </div>

      {tab === 1 ? (
        <>
          <p
            style={{
              fontWeight: "bold",
              fontSize: "16px",
              color: colors.white,
              marginTop: "30px",
            }}
          >
            Choose Van Size
          </p>
          <Row
            style={{
              justifyContent: "space-between",
            }}
          >
            {cars.map((item) => (
              <div
                onClick={() => setSelectedCar(item.name)}
                key={item.id}
                style={{
                  backgroundColor:
                    selectedCar === item.name ? colors.blue : "transparent",
                  display: "flex",
                  flexDirection: "column",
                  width: "24%",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "1px",
                  borderStyle: "solid",
                  borderColor: "#ffffff50",
                  marginTop: "10px",
                  padding: "10px",
                  height: "90px",
                  borderRadius: "7px",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    height: "60%",
                  }}
                >
                  <img src={item.image} />
                </div>
                <div
                  style={{
                    height: "40%",
                  }}
                >
                  <span
                    style={{
                      textAlign: "center",
                      color: colors.white,
                      fontSize: "0.8vw",
                    }}
                  >
                    {item.name}
                  </span>
                </div>
              </div>
            ))}
          </Row>

          <Row
            style={{
              marginTop: "20px",
            }}
          >
            <Col sm={12} lg={6} md={6} xl={6}>
              <Form.Group className="mb-3">
                <Form.Label style={labelStyle}>Pick Up Post Code</Form.Label>
                <Form.Control style={inputStyle} type="text" />
              </Form.Group>
            </Col>

            <Col sm={12} lg={6} md={6} xl={6}>
              <Form.Group>
                <Form.Label style={labelStyle}>Drop Off Post Code</Form.Label>
                <Form.Control style={inputStyle} type="text" />
              </Form.Group>
            </Col>
          </Row>
          <Button
            onClick={() => {
              setTab(2);
            }}
            style={buttonStyle}
          >
            Continue
          </Button>
        </>
      ) : tab === 2 ? (
        <>
          <Row
            style={{
              marginTop: "20px",
            }}
          >
            <Form.Group className="mb-3">
              <Form.Label style={labelStyle}>
                When do you need this collecting?
              </Form.Label>
              <Form.Select style={inputStyle}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={labelStyle}>
                What time do you need this collecting?
              </Form.Label>
              <Form.Control style={inputStyle} type="text" />
            </Form.Group>
          </Row>
          <Button
            onClick={() => {
              setTab(3);
            }}
            style={buttonStyle}
          >
            Continue
          </Button>
        </>
      ) : (
        <>
          <Row
            style={{
              marginTop: "20px",
            }}
          >
            <Form.Group className="mb-3">
              <Form.Label style={labelStyle}>User Name</Form.Label>
              <Form.Control style={inputStyle} type="text" />
            </Form.Group>
            <Col sm={12} lg={6} md={6} xl={6}>
              <Form.Group className="mb-3">
                <Form.Label style={labelStyle}>Your Email</Form.Label>
                <Form.Control style={inputStyle} type="email" />
              </Form.Group>
            </Col>

            <Col sm={12} lg={6} md={6} xl={6}>
              <Form.Group>
                <Form.Label style={labelStyle}>Phone Number</Form.Label>
                <Form.Control style={inputStyle} type="text" />
              </Form.Group>
            </Col>
          </Row>
          <Button
            onClick={() => {
              window.alert("Submit");
              setSelectedCar("");
              setTab(1);
            }}
            style={buttonStyle}
          >
            Submit
          </Button>
        </>
      )}
    </div>
  );
}

export default Quote;
