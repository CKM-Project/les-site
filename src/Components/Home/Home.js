import React, { useState } from "react";
import { NavBar } from "../NavBar/NavBar";
import { Footer } from "../Footer/Footer";
import IMAGE from "../Images/Jumbotron.png";

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
        <img
          src={IMAGE}
          alt="My Image"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "80%",
            zIndex: 0,
            objectFit: "cover",
          }}
        />
        <Container className="d-flex align-items-center flex-column">
          <h1 className="mt-3 fw-bold text-white" style={{ zIndex: 1 }}>
            COMPANY
          </h1>
          <h3 className="mb-3 fw-bold text-white" style={{ zIndex: 1 }}>
            Tagline
          </h3>
        </Container>
      </div>
      <Footer />
    </>
  );
}
