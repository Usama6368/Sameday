import React from "react";
import { Accordion, Button, Col, Row } from "react-bootstrap";
import colors from "../../../config/colors";
import CBackgorundImage from "../../../CustomComponent/CBackgorundImage";

function AboutUs() {
  const heading = {
    color: "black",
    fontSize: "16px",
  };

  const accord = [
    {
      title: "Do you really guarantee delivery the same day?",
      description:
        "In most cases, yes. It depends on where your package is going. We can deliver consignments to Europe, America and across the world if you like, but if it’s going to most destinations in the UK we’ll normally be able to guarantee same day delivery. There are certain exceptions of course, such as delivering to Northern Ireland, the Isle of Man and the more remote parts of Scotland for example, as they might be ferry or weather dependent.",
    },
    {
      title: "What if something goes wrong?",
      description:
        "In most cases, yes. It depends on where your package is going. We can deliver consignments to Europe, America and across the world if you like, but if it’s going to most destinations in the UK we’ll normally be able to guarantee same day delivery. There are certain exceptions of course, such as delivering to Northern Ireland, the Isle of Man and the more remote parts of Scotland for example, as they might be ferry or weather dependent.",
    },
    {
      title: "How will I know my package has been delivered?",
      description:
        "In most cases, yes. It depends on where your package is going. We can deliver consignments to Europe, America and across the world if you like, but if it’s going to most destinations in the UK we’ll normally be able to guarantee same day delivery. There are certain exceptions of course, such as delivering to Northern Ireland, the Isle of Man and the more remote parts of Scotland for example, as they might be ferry or weather dependent.",
    },
    {
      title: "Will mine be the only delivery you make?",
      description:
        "In most cases, yes. It depends on where your package is going. We can deliver consignments to Europe, America and across the world if you like, but if it’s going to most destinations in the UK we’ll normally be able to guarantee same day delivery. There are certain exceptions of course, such as delivering to Northern Ireland, the Isle of Man and the more remote parts of Scotland for example, as they might be ferry or weather dependent.",
    },
    {
      title: "What vehicle will you use?",
      description:
        "In most cases, yes. It depends on where your package is going. We can deliver consignments to Europe, America and across the world if you like, but if it’s going to most destinations in the UK we’ll normally be able to guarantee same day delivery. There are certain exceptions of course, such as delivering to Northern Ireland, the Isle of Man and the more remote parts of Scotland for example, as they might be ferry or weather dependent.",
    },
    {
      title: "How do I know which van to choose?",
      description:
        "In most cases, yes. It depends on where your package is going. We can deliver consignments to Europe, America and across the world if you like, but if it’s going to most destinations in the UK we’ll normally be able to guarantee same day delivery. There are certain exceptions of course, such as delivering to Northern Ireland, the Isle of Man and the more remote parts of Scotland for example, as they might be ferry or weather dependent.",
    },
    {
      title: "Are you able to deliver any consignment?",
      description:
        "In most cases, yes. It depends on where your package is going. We can deliver consignments to Europe, America and across the world if you like, but if it’s going to most destinations in the UK we’ll normally be able to guarantee same day delivery. There are certain exceptions of course, such as delivering to Northern Ireland, the Isle of Man and the more remote parts of Scotland for example, as they might be ferry or weather dependent.",
    },
    {
      title: "Do I need to package my items for my same day delivery?",
      description:
        "In most cases, yes. It depends on where your package is going. We can deliver consignments to Europe, America and across the world if you like, but if it’s going to most destinations in the UK we’ll normally be able to guarantee same day delivery. There are certain exceptions of course, such as delivering to Northern Ireland, the Isle of Man and the more remote parts of Scotland for example, as they might be ferry or weather dependent.",
    },
    {
      title: "Can I open an account with you?",
      description:
        "In most cases, yes. It depends on where your package is going. We can deliver consignments to Europe, America and across the world if you like, but if it’s going to most destinations in the UK we’ll normally be able to guarantee same day delivery. There are certain exceptions of course, such as delivering to Northern Ireland, the Isle of Man and the more remote parts of Scotland for example, as they might be ferry or weather dependent.",
    },
    {
      title: "Are there any ‘hidden extras’?",
      description:
        "In most cases, yes. It depends on where your package is going. We can deliver consignments to Europe, America and across the world if you like, but if it’s going to most destinations in the UK we’ll normally be able to guarantee same day delivery. There are certain exceptions of course, such as delivering to Northern Ireland, the Isle of Man and the more remote parts of Scotland for example, as they might be ferry or weather dependent.",
    },
  ];
  return (
    <>
      <CBackgorundImage heading={"About Us"} detail={"Out Little Story"} />

      <div
        style={{
          padding: "30px 70px 30px 70px",
          backgroundColor: "#F2F2F2",
        }}
      >
        <span
          style={{
            color: colors.blue,
            fontSize: "35px",
            fontWeight: 700,
          }}
        >
          About Collect Same Day Couriers
        </span>
        <br />
        <br />

        <span style={heading}>
          So who exactly are Collect Same-Day Couriers? We’re a family-run
          business with over 20 years of experience in the logistics industry
          specialising in urgent deliveries – giving us the expertise you need
          to deliver your package, wherever it needs to go nationwide.
        </span>
        <br />
        <br />
        <span style={heading}>
          We’re committed to collecting anything from anywhere in the UK within
          60 minutes of your request. And we can only do this by having access
          to a massive fleet of over 15,000 vehicles across the country, from
          Scotland to Wales, and from the North West to the North East.
        </span>
        <br />
        <br />
        <span style={heading}>
          But that’s not the only commitment you can expect from us.
        </span>
        <br />
        <br />
        <span style={heading}>
          As experts in our field, we know how valuable service is. So we’re
          totally committed to offering every one of our customers the highest
          standards of support, with an attitude that’s always personal,
          friendly and of course, highly professional. That’s why so many of our
          customers return time after time; we’re widely recognised as
          delivering on our promises – a same day courier service you can rely
          on to get the job done and never let you down.
        </span>

        <br />
        <br />
        <span style={heading}>
          We pride ourselves not only on our standards of service and enviable
          reputation, but also on the values we have as a business – values our
          team always adhere to, and which mean you can have total peace of mind
          when you trust your delivery to Collect Same Day.
        </span>
        <br />
        <br />
        <Button
          style={{
            backgroundColor: "#1272BE",
            borderRadius: "3px",
          }}
        >
          Get a Free Quote
        </Button>
        <br />
        <br />
        <br />
      </div>
      <Row
        style={{
          backgroundColor: colors.white,
          padding: "30px 70px 30px 70px",
        }}
      >
        <Col sm={12} md={4} lg={4} xl={4}>
          <span
            style={{
              color: "black",
              fontSize: "16px",
              fontWeight: 700,
            }}
          >
            FAQ
          </span>
          <br />
          <span
            style={{
              color: colors.blue,
              fontSize: "16px",
              fontWeight: 700,
            }}
          >
            Support
          </span>
          <br />
          <br />
          <span style={heading}>
            When you trust a courier to deliver your package, you’ll want to
            find out as much as you can about them. So here are a few of the
            most commonly-asked questions; if what you want to know what is not
            covered here, don’t worry – just contact us, and we’ll happily tell
            you about any aspect of our service.
          </span>
        </Col>
        <Col sm={12} md={8} lg={8} xl={8}>
          <Accordion defaultActiveKey="0">
            {accord.map((item, index) => (
              <Accordion.Item
                style={{
                  borderWidth: 0,
                }}
                key={index}
                eventKey={index}
              >
                <Accordion.Header
                  style={{
                    fontWeight: "700",
                  }}
                >
                  {item.title}
                </Accordion.Header>
                <Accordion.Body>{item.description}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Col>
      </Row>
    </>
  );
}

export default AboutUs;
