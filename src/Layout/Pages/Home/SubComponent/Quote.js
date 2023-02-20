import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import colors from "../../../../config/colors";
import Form from "react-bootstrap/Form";
import { Formik } from "formik";
import * as yup from "yup";
import "./Quotes.css";
import { formatString } from "../../../../functions/javascript";
import { useAlert } from "react-alert";
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
function Quote({ id, backgroundColor = "#00000040" }) {
  console.log(id);
  const alert = useAlert();
  const [loader, setLoader] = useState(false);
  const [time, setTime] = useState(false);

  var timeList = [];
  for (var i = 0; i < 24; i++) {
    var period = i < 12 ? "AM" : "PM";
    var hour = i % 12 || 12;
    for (var j = 0; j < 2; j++) {
      var minute = j * 30;
      var times =
        hour + ":" + (minute < 10 ? "0" + minute : minute) + " " + period;
      timeList.push(times);
    }
  }

  const cars = [
    {
      id: 1,
      name: "Car",
      image: require("../../../../assets/car/car.png"),
    },
    {
      id: 2,
      name: "Small Van",
      image: require("../../../../assets/car/small_van.png"),
    },
    {
      id: 3,
      name: "Short Wheel Base",
      image: require("../../../../assets/car/short_wheel_base.png"),
    },
    {
      id: 4,
      name: "Long Wheel Base",
      image: require("../../../../assets/car/long_wheel_base.png"),
    },
    {
      id: 5,
      name: "XL Wheel Base",
      image: require("../../../../assets/car/xl_wheel_base.png"),
    },
    {
      id: 6,
      name: "Luton - Tail Lift",
      image: require("../../../../assets/car/luton.png"),
    },
    {
      id: 7,
      name: "7.5T Lorry",
      image: require("../../../../assets/car/75t.png"),
    },
    {
      id: 8,
      name: "Not Sure",
      image: require("../../../../assets/car/not_sure.png"),
    },
  ];

  const errorText = (error, touched) =>
    error && (
      <small
        style={{
          textAlign: "left",
          color: "red",
        }}
      >
        {error}
      </small>
    );
  const regex =
    /^([A-Za-z][A-Ha-hJ-Yj-y]?[0-9][A-Za-z0-9]? ?[0-9][A-Za-z]{2}|[Gg][Ii][Rr] ?0[Aa]{2})$/;
  const validationSchema = yup.object({
    car: yup.string().required().label("Car"),
    pickUp: yup
      .string()
      .matches(regex, "Invalid PickUp code")
      .required()
      .label("Pick Up"),
    dropOff: yup
      .string()
      .matches(regex, "Invalid DropOff code")
      .required()
      .label("Drop Off"),

    collecting: yup.string().required().label("Collecting"),
    time: yup.string().required().label("Time"),

    name: yup.string().min(3).required().label("Name"),
    email: yup.string().email().required().label("Email"),
    phone: yup.string().required().label("Phone"),
  });
  return (
    <Formik
      initialValues={{
        tab: 1,
        car: "Car",
        name: "",
        email: "",
        phone: "",
        pickUp: "",
        dropOff: "",
        collecting: "",
        time: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        setLoader(true);

        console.log(values);

        var myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        var formdata = new FormData();
        formdata.append(
          "type",
          id === undefined ? "General" : formatString(id)
        );
        formdata.append("van_size", values.car);
        formdata.append("pickup_post_code", values.pickUp);
        formdata.append("dropoff_post_code", values.dropOff);
        formdata.append("time_colllecting", values.time);
        formdata.append("day_collection", values.collecting);
        formdata.append("name", values.name);
        formdata.append("email", values.email);
        formdata.append("phone", values.phone);
        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: formdata,
          redirect: "follow",
        };

        fetch(
          "https://admin.samedayexpresscouriers.co.uk/api/quote",
          requestOptions
        )
          .then((response) => response.json())
          .then((result) => {
            console.log(result);
            if (result.success) {
              alert.success("Record Added Successfully !");
              resetForm();
            } else {
              alert(result.message);
            }
          })
          .catch((error) => {
            console.log("error", error);
            alert.error("Something went wrong !");
          })
          .finally(() => {
            setLoader(false);
          });
      }}
    >
      {({
        values,
        errors,
        touched,
        isValid,
        handleBlur,
        handleChange,
        handleSubmit,
        setFieldValue,
      }) => (
        <div
          style={{
            backgroundColor: backgroundColor,
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
                  key={index}
                  style={{
                    height: "50px",
                    width: "50px",
                    borderRadius: "50px",
                    backgroundColor:
                      values.tab === item ? colors.blue : "#C2C2C2",
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

          {values.tab === 1 ? (
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
                    className="dcar"
                    onClick={() => setFieldValue("car", item.name)}
                    key={item.id}
                    style={{
                      backgroundColor:
                        values.car === item.name ? colors.blue : "transparent",
                      display: "flex",
                      flexDirection: "column",

                      justifyContent: "center",
                      alignItems: "center",
                      border: "1px",
                      borderStyle: "solid",
                      borderColor: "#ffffff50",
                      marginTop: "10px",
                      padding: "10px",

                      borderRadius: "7px",
                      cursor: "pointer",
                    }}
                  >
                    <img
                      style={{
                        width: "70px",
                      }}
                      src={item.image}
                    />

                    <span
                      style={{
                        textAlign: "center",
                        color: colors.white,
                        fontSize: "10px",
                        marginTop: "5px",
                      }}
                    >
                      {item.name}
                    </span>
                  </div>
                ))}

                {errorText(errors.car)}
              </Row>

              <Row
                style={{
                  marginTop: "20px",
                }}
              >
                <Col sm={12} lg={6} md={6} xl={6}>
                  <Form.Group className="mb-3">
                    <Form.Label style={labelStyle}>
                      Pick Up Post Code
                    </Form.Label>
                    <Form.Control
                      className="form-control"
                      style={inputStyle}
                      type="text"
                      name="pickUp"
                      value={values.pickUp}
                      onChange={handleChange}
                      onBlur={handleBlur("pickUp")}
                    />
                    {touched.pickUp && errorText(errors.pickUp)}
                  </Form.Group>
                </Col>

                <Col sm={12} lg={6} md={6} xl={6}>
                  <Form.Group>
                    <Form.Label style={labelStyle}>
                      Drop Off Post Code
                    </Form.Label>

                    <Form.Control
                      className="form-control"
                      onBlur={handleBlur("dropOff")}
                      style={inputStyle}
                      type="text"
                      name="dropOff"
                      value={values.dropOff}
                      onChange={handleChange}
                    />

                    {touched.dropOff && errorText(errors.dropOff)}
                  </Form.Group>
                </Col>
              </Row>
              <Button
                disabled={
                  errors.pickUp ||
                  !values.pickUp ||
                  errors.dropOff ||
                  !values.dropOff
                    ? true
                    : false
                }
                onClick={() => {
                  setFieldValue("tab", 2);
                }}
                style={buttonStyle}
              >
                Continue
              </Button>
            </>
          ) : values.tab === 2 ? (
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
                  <Form.Select
                    className="form-control"
                    onBlur={handleBlur("collecting")}
                    style={inputStyle}
                    name="collecting"
                    value={values.collecting}
                    onChange={handleChange}
                  >
                    <option>Please Select</option>
                    {[
                      { id: 0, name: "Today" },
                      { id: 1, name: "Tommorow" },
                      { id: 2, name: "Scheduled later" },
                      { id: 3, name: "Urgent ASAP" },
                    ].map((item, index) => (
                      <option key={index} value={item.id}>
                        {item.name}
                      </option>
                    ))}
                  </Form.Select>

                  {touched.collecting && errorText(errors.collecting)}
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label style={labelStyle}>
                    What time do you need this collecting?
                  </Form.Label>
                  <Form.Control
                    className="form-control"
                    onBlur={handleBlur("time")}
                    onFocus={() => {
                      setTime(true);
                    }}
                    style={inputStyle}
                    type="text"
                    name="time"
                    value={values.time}
                    onChange={handleChange}
                  />
                  {time && values.time.length === 0 && (
                    <div
                      style={{
                        height: "120px",
                        overflow: "scroll",
                        backgroundColor: "white",
                        textAlign: "center",
                        cursor: "pointer",
                        color: "black",
                      }}
                    >
                      {timeList.map((item, index) => (
                        <p
                          className="py-1 m-0"
                          onClick={() => {
                            setFieldValue("time", item);
                            setTime(false);
                          }}
                          key={index}
                          value={item}
                        >
                          {item}
                        </p>
                      ))}
                    </div>
                  )}

                  {touched.time && errorText(errors.time)}
                </Form.Group>
              </Row>
              <Button
                disabled={!values.collecting || !values.time ? true : false}
                onClick={() => {
                  setFieldValue("tab", 3);
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
                  <Form.Control
                    className="form-control"
                    onBlur={handleBlur("name")}
                    style={inputStyle}
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                  />
                  {touched.name && errorText(errors.name)}
                </Form.Group>
                {/* <small className="error">{errors.name && errors.name}</small> */}
                <Col sm={12} lg={6} md={6} xl={6}>
                  <Form.Group className="mb-3">
                    <Form.Label style={labelStyle}>Your Email</Form.Label>
                    <Form.Control
                      className="form-control"
                      onBlur={handleBlur("email")}
                      style={inputStyle}
                      type="email"
                      name="email"
                      values={values.email}
                      onChange={handleChange}
                    />
                    {touched.email && errorText(errors.email)}
                  </Form.Group>
                </Col>

                <Col sm={12} lg={6} md={6} xl={6}>
                  <Form.Group>
                    <Form.Label style={labelStyle}>Phone Number</Form.Label>
                    <Form.Control
                      className="form-control"
                      onBlur={handleBlur("phone")}
                      style={inputStyle}
                      type="text"
                      name="phone"
                      values={values.phone}
                      onChange={handleChange}
                    />
                    {touched.phone && errorText(errors.phone)}
                  </Form.Group>
                </Col>
              </Row>
              <Button
                disabled={loader}
                onClick={() => {
                  handleSubmit();
                }}
                style={buttonStyle}
              >
                {loader ? "Loading..." : "Submit"}
              </Button>
            </>
          )}
        </div>
      )}
    </Formik>
  );
}

export default Quote;
