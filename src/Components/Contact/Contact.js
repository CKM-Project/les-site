import React, { useEffect } from "react";
import emailjs from "@emailjs/browser";
import { NavBar } from "../NavBar/NavBar";
import { Footer } from "../Footer/Footer";
import { Container, Form, Button, InputGroup } from "react-bootstrap";
import "../Styles/Styles.css";

export function Contact() {
  useEffect(() => {
    emailjs.init("OFERgPtPZrXndL-iq");

    const handleSubmit = async (event) => {
      event.preventDefault();
      const contactForm = event.target;

      // Generate a random five-digit number for the contact_number variable
      contactForm.contact_number.value = (Math.random() * 100000) | 0;

      try {
        const response = await emailjs.sendForm(
          "service_pb0eohg",
          "template_qq9bab7",
          contactForm
        );

        console.log("SUCCESS!", response);
        alert("Message Sent!");
        // Clear the form fields
        contactForm.user_name.value = "";
        contactForm.user_email.value = "";
        contactForm.user_phone.value = "";
        contactForm.message.value = "";
      } catch (error) {
        console.error("FAILED...", error);
        alert("Message not sent!");
      }
    };

    const form = document.getElementById("contact-form");
    form.addEventListener("submit", handleSubmit);

    return () => {
      form.removeEventListener("submit", handleSubmit);
    };
  }, []);

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
          <p className="mt-2 mb-5 m-auto">555-555-5555 | test@gmail.com</p>

          <Form
            className="d-flex align-items-center flex-column w-50"
            id="contact-form"
          >
            <input type="hidden" name="contact_number" />
            <InputGroup className="mb-3">
              <InputGroup.Text
                id="basic-addon1"
                style={{ backgroundColor: "#e42e31" }}
                className="text-white fw-bold"
              >
                Name
              </InputGroup.Text>
              <Form.Control
                type="text"
                name="user_name"
                placeholder="Enter Name"
                aria-label="Contact Name"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text
                id="basic-addon2"
                style={{ backgroundColor: "#e42e31" }}
                className="text-white fw-bold"
              >
                Email
              </InputGroup.Text>
              <Form.Control
                type="email"
                name="user_email"
                placeholder="Enter Email"
                aria-label="Contact Email"
                aria-describedby="basic-addon2"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text
                id="basic-addon3"
                style={{ backgroundColor: "#e42e31" }}
                className="text-white fw-bold"
              >
                Phone Number
              </InputGroup.Text>
              <Form.Control
                type="phone"
                name="user_phone"
                placeholder="Enter Phone"
                aria-label="Contact Phone"
                aria-describedby="basic-addon3"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text
                style={{ backgroundColor: "#e42e31" }}
                className="text-white fw-bold"
              >
                Message
              </InputGroup.Text>
              <Form.Control
                name="message"
                placeholder="Enter your message here..."
                as="textarea"
                aria-label="With textarea"
              />
            </InputGroup>

            <Button type="submit" className="fw-bold w-25 mt-2" variant="dark">
              SEND
            </Button>
          </Form>
        </Container>
      </div>

      <Footer />
    </>
  );
}
