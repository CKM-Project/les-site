import React from "react";
import { Container } from "react-bootstrap";
import "../Styles/Styles.css";

export function Footer() {
  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center"
      id="footer-container"
    >
      <Container>
        <hr />
      </Container>
      <p className="m-1">
        <strong>©2023 Limitless Electical Solutions</strong>
      </p>
      <br />
      <p>ADD CONTACT INFO</p>
    </div>
  );
}
