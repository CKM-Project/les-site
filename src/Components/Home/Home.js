import React, { useState } from "react";
import { NavBar } from "../NavBar/NavBar";
import { Footer } from "../Footer/Footer";
import Jumbotron from "../Images/Jumbotron.jpg";
import Home1 from "../Images/Home1.jpg";
import Home2 from "../Images/Home2.jpg";
import Home3 from "../Images/Home3.jpg";
import ResImage from "../Images/ResImage.jpg";
import CommImage from "../Images/CommImage.jpg";

import ServiceMap from "../Images/ServiceMap.png";

import "../Styles/Styles.css";
import { Container, Image, Card, Button } from "react-bootstrap";

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
        <img
          src={Jumbotron}
          className="overlay"
          alt="Background with cable support"
        />

        <Container className="d-flex align-items-center flex-column">
          <Container
            className="d-flex align-items-center flex-column"
            style={{ zIndex: 1 }}
          >
            <h1 className="mt-3 fw-bold black-text">Serving The CSRA</h1>
            <h3 className="mb-3 fw-bold black-text mb-5">
              Commercial & Residential Electrical Services
            </h3>
            <Image src={ServiceMap} thumbnail />
          </Container>
          <Container className="d-flex align-items-center flex-column mt-5">
            <Container className="d-flex justify-content-start mt-5">
              <Card
                className="w-50 mt-3 mb-2"
                style={{ backgroundColor: "#0d1c2f" }}
              >
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
                    style={{ height: "10rem", objectFit: "cover" }}
                  />
                  <Card.Title className="mt-2 text-white">
                    Residential Electrical Services
                  </Card.Title>
                  <Card.Text className="text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Card.Text>
                  <Button variant="dark" href="/contact" className="fw-bold">
                    CONTACT US
                  </Button>
                </Card.Body>
              </Card>
            </Container>
            <Container className="d-flex justify-content-end mt-5">
              <Card
                className="w-50 mt-3 mb-2"
                style={{ backgroundColor: "#0d1c2f" }}
              >
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
                    style={{ height: "10rem", objectFit: "cover" }}
                  />
                  <Card.Title className="mt-2 text-white">
                    Commercial Electrical Services
                  </Card.Title>
                  <Card.Text className="text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Card.Text>
                  <Button variant="dark" href="/contact" className="fw-bold">
                    CONTACT US
                  </Button>
                </Card.Body>
              </Card>
            </Container>

            {/* <Container className="d-flex justify-content-start mt-5">
            <Card style={{ width: "20rem" }}>
              <Card.Img variant="top" src={Home1} />
              <Card.Body>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Container>
          <Container className="d-flex justify-content-end mt-5">
            <Card style={{ width: "20rem" }}>
              <Card.Img variant="top" src={Home2} />
              <Card.Body>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card> */}
          </Container>
        </Container>
      </div>
      <Footer />
    </>
  );
}
