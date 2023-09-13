import React from "react";
import { NavBar } from "../NavBar/NavBar";
import { Footer } from "../Footer/Footer";
import IMAGE from "../Images/Logo.png";
import "../Styles/Styles.css";
import { Container, Card, Button } from "react-bootstrap";

export function Home() {
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
          <img alt="Word Cloud" src={IMAGE} style={{ height: "35rem" }}></img>
          <Container className="d-flex align-items-center flex-column mt-5">
            <h2 className="text-center">Upcoming Events</h2>

            <Card className="w-50 m-auto mt-3">
              <Card.Header
                style={{
                  backgroundColor: "#BD3430",
                  color: "2C2926",
                  fontWeight: "bold",
                }}
              >
                Featured
              </Card.Header>
              <Card.Img variant="top" src={IMAGE} />
              <Card.Body>
                <Card.Title>Event Name</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
            <Button
              className="fw-bold mt-2"
              style={{
                backgroundColor: "#BD3430",
                borderColor: "#BD3430",
                color: "#2c2926",
              }}
            >
              MORE EVENTS
            </Button>
          </Container>
        </Container>
      </div>
      <Footer />
    </>
  );
}
