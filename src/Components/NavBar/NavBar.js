import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Logo from "../Images/Logo.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Styles/Styles.css";

export function NavBar() {
  const ColoredLine = () => (
    <div className="d-flex align-items-center">
      <div
        className="vr"
        style={{
          color: "#e42e31",
          height: "2rem",
        }}
      ></div>
    </div>
  );

  return (
    <Navbar id="navbar" className="sticky-top">
      <Container className="hstack gap-3">
        <Navbar.Brand href="/">
          <img alt="" src={Logo} id="logo"></img>
        </Navbar.Brand>
        <Nav className="ms-auto fs-6 fw-bold">
          <Nav.Link href="/" id="link">
            HOME
          </Nav.Link>
        </Nav>
        <ColoredLine />
        <Nav className="fs-6 fw-bold">
          <Nav.Link href="/about" id="link">
            ABOUT
          </Nav.Link>
        </Nav>
        <ColoredLine />
        <Nav className="fs-6 fw-bold">
          <Nav.Link href="/services" id="link">
            EVENTS
          </Nav.Link>
        </Nav>
        <ColoredLine />
        <Nav className="fs-6 fw-bold">
          <Nav.Link href="/contact" id="link">
            CONTACT US
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
