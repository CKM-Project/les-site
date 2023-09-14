import React from "react";
import { NavBar } from "../NavBar/NavBar";
import { Footer } from "../Footer/Footer";
import CommImage1 from "../Images/CommImage1.jpg";
import CommImage2 from "../Images/CommImage2.png";
import "../Styles/Styles.css";

import { Container, Card, Button } from "react-bootstrap";

export function Services() {
  return (
    <>
      {/* <MetaTags>
        <title>Home</title>
        <meta
          name="Home"
          content="This Website is designed to show Dan Minahan's Resume and Portfolio. Enjoy!"
        />
        <meta property="og:title" content="Home" />
        <meta property="og:image" content="../Images/Headshot.png" />
      </MetaTags> */}

      <NavBar />
      <div id="container">
        <Container className="d-flex align-items-center flex-column">
          <h1 className="mt-3 fw-bold black-text">COMPANY</h1>
          <h3 className="mb-3 fw-bold black-text">Tagline</h3>
        </Container>
        <Container className="d-flex align-items-center flex-column mt-5">
          <Card className="w-50 m-auto mt-3 mb-2">
            <Card.Header
              className="black-text"
              style={{
                backgroundColor: "#BD3430",
                fontWeight: "bold",
              }}
            >
              Commercial
            </Card.Header>
            <Card.Body>
              <Card.Img
                variant="top"
                src={CommImage2}
                style={{ height: "500px", objectFit: "cover" }}
              />
              <Card.Title className="mt-2">Event Name</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Card.Text>
              <Button
                className="fw-bold"
                style={{
                  backgroundColor: "#2C2926",
                  borderColor: "#2C2926",
                }}
              >
                REGISTER
              </Button>
            </Card.Body>
          </Card>

          <Card className="w-50 m-auto mt-3 mb-2">
            <Card.Header
              className="black-text"
              style={{
                backgroundColor: "#BD3430",
                fontWeight: "bold",
              }}
            >
              Commercial
            </Card.Header>
            <Card.Body>
              <Card.Img
                variant="top"
                src={CommImage2}
                style={{ height: "500px", objectFit: "cover" }}
              />
              <Card.Title className="mt-2">Event Name</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Card.Text>
              <Button
                className="fw-bold"
                style={{
                  backgroundColor: "#2C2926",
                  borderColor: "#2C2926",
                }}
              >
                REGISTER
              </Button>
            </Card.Body>
          </Card>
        </Container>
      </div>

      <Footer />
    </>
  );
}
