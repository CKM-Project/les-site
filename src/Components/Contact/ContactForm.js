import React, { useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Form, Button, InputGroup } from "react-bootstrap";
import "../Styles/Styles.css";

export function ContactForm() {
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

    </>
  );
}
