import { useState } from "react";
import { Container, Offcanvas, Button, Nav, NavLink } from "react-bootstrap";
import { ContactForm } from "./ContactForm";
import "../Styles/Styles.css";

function OffCanvas() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Nav.Link className="text-white" onClick={handleShow}>
        CONTACT US
      </Nav.Link>
      <Offcanvas
        show={show}
        onHide={handleClose}
        style={{ backgroundColor: "whitesmoke" }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Contact Us</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Container className="d-flex align-items-center flex-column">
            <p className="mt-2 mb-5 m-auto">(706) 945-9874 | test@gmail.com</p>
            <ContactForm />
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default OffCanvas;
