import React from "react";
import { NavBar } from "../NavBar/NavBar";
import { Footer } from "../Footer/Footer";
import CommImage from "../Images/CommImage.jpg";
import ResImage from "../Images/ResImage.jpg";
import ServiceMap from "../Images/ServiceMap.png";
import { Container, Card, Button, Image } from "react-bootstrap";
import "../Styles/Styles.css";

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
          <h1 className="mt-3 fw-bold black-text">Serving The CSRA</h1>
          <h3 className="mb-3 fw-bold black-text">
            Commercial & Residential Electrical Services
          </h3>
          <Image src={ServiceMap} rounded />
        </Container>
        <Container className="d-flex align-items-center flex-column mt-5">
          <Card className="w-50 m-auto mt-3 mb-2">
            <Card.Header
              className="black-text fw-bold"
              style={{
                backgroundColor: "#e42e31",
              }}
            >
              Residential
            </Card.Header>
            <Card.Body>
              <Card.Img
                variant="top"
                src={ResImage}
                style={{ height: "500px", objectFit: "cover" }}
              />
              <Card.Title className="mt-2">
                Residential Electrical Services
              </Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Card.Text>
              <Button variant="dark" href="/contact" className="fw-bold">
                CONTACT US
              </Button>
            </Card.Body>
          </Card>

          <Card className="w-50 m-auto mt-3 mb-2">
            <Card.Header
              className="black-text fw-bold"
              style={{
                backgroundColor: "#f5ed29",
              }}
            >
              Commercial
            </Card.Header>
            <Card.Body>
              <Card.Img
                variant="top"
                src={CommImage}
                style={{ height: "500px", objectFit: "cover" }}
              />
              <Card.Title className="mt-2">
                Commercial Electrical Services
              </Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Card.Text>
              <Button variant="dark" href="/contact" className="fw-bold">
                CONTACT US
              </Button>
            </Card.Body>
          </Card>
        </Container>
      </div>

      <Footer />
    </>
  );
}
