import React from "react";
import { NavBar } from "../NavBar/NavBar";
import { Footer } from "../Footer/Footer";
import HeroImage from "../Images/Lightbulb.jpg";
import { HomeCard } from "./HomeCard";
import { HomeService } from "./HomeService";
import ServiceMap from "../Images/ServiceMap.png";

import "../Styles/Styles.css";
import { Container, Image } from "react-bootstrap";

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
          src={HeroImage}
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
            <Image className="mt-5" src={ServiceMap} thumbnail />
          </Container>

          <HomeService />
  
          <HomeCard />


        </Container>
      </div>
      <Footer />
    </>
  );
}