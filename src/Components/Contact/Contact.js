import React, { useEffect } from "react";
import { NavBar } from "../NavBar/NavBar";
import { Footer } from "../Footer/Footer";
import { ContactForm } from "./ContactForm";
import { Container } from "react-bootstrap";

import "../Styles/Styles.css";

export function Contact() {
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
          <h1 className="mt-3 mb-3 fw-bold">Contact Us</h1>
          <p className="mt-2 mb-5 m-auto">(706) 945-9874 | test@gmail.com</p>
          <ContactForm />
        </Container>
      </div>

      <Footer />
    </>
  );
}
