import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { Form, Button, InputGroup } from "react-bootstrap";
import "../Styles/Styles.css";

export function ContactForm() {
  const [formErrors, setFormErrors] = useState({});
  const [user_name, setUser_name] = useState("");
  const [user_email, setUser_email] = useState("");
  const [user_phone, setUser_phone] = useState("");
  const [message, setMessage] = useState("");
  const [isMessageSent, setMessageSent] = useState(false); // Track success status

  useEffect(() => {
    emailjs.init("OFERgPtPZrXndL-iq");

    const validateForm = () => {
        const errors = {};
      
        if (!user_name.trim()) {
          errors.user_name = "Name is required";
        }
      
        if (!user_email.trim()) {
          errors.user_email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(user_email)) {
          errors.user_email = "Invalid email address";
        }
      
        if (!user_phone.trim()) {
          errors.user_phone = "Phone number is required";
        }
      
        if (!message.trim()) {
          errors.message = "Message is required";
        }
      
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
      };

    const handleSubmit = async (event) => {
      event.preventDefault();
      const contactForm = event.target;

      const isValid = validateForm();

      if (isValid) {
        // Generate a random five-digit number for the contact_number variable
        contactForm.contact_number.value = (Math.random() * 100000) | 0;

        try {
          const response = await emailjs.sendForm(
            "service_pb0eohg",
            "template_qq9bab7",
            contactForm
          );

          console.log("SUCCESS!", response);
          setMessageSent(true); // Set success status
          // Clear the form fields
          setUser_name("");
          setUser_email("");
          setUser_phone("");
          setMessage("");
        } catch (error) {
          console.error("FAILED...", error);
          alert("Message not sent!");
        }
      } else {
        // Handle form validation errors, but prevent form submission
        alert("Please correct the form errors before submitting.");
      }
    };

    const form = document.getElementById("contact-form");
    form.addEventListener("submit", handleSubmit);

    return () => {
      form.removeEventListener("submit", handleSubmit);
    };
  }, [user_name, user_email, user_phone, message]);

  return (
    <>
      <Form
        className="d-flex align-items-center flex-column w-50"
        id="contact-form"
      >
        <input type="hidden" name="contact_number" />
        <InputGroup>
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
            value={user_name}
            onChange={(e) => setUser_name(e.target.value)}
            placeholder="Enter Name"
            aria-label="Contact Name"
            aria-describedby="contact-name"
          />
        </InputGroup>
        {formErrors.user_name && (
          <div className="error-message">{formErrors.user_name}</div>
        )}

        <InputGroup className="mt-3">
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
            value={user_email}
            onChange={(e) => setUser_email(e.target.value)}
            placeholder="Enter Email"
            aria-label="Contact Email"
            aria-describedby="contact-email"
          />
        </InputGroup>
        {formErrors.user_email && (
          <div className="error-message">{formErrors.user_email}</div>
        )}

        <InputGroup className="mt-3">
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
            value={user_phone}
            onChange={(e) => setUser_phone(e.target.value)}
            placeholder="Enter Phone"
            aria-label="Contact Phone"
            aria-describedby="contact-phone"
          />
        </InputGroup>
        {formErrors.user_phone && (
          <div className="error-message">{formErrors.user_phone}</div>
        )}

        <InputGroup className="mt-3">
          <InputGroup.Text
            style={{ backgroundColor: "#e42e31" }}
            className="text-white fw-bold"
          >
            Message
          </InputGroup.Text>
          <Form.Control
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your message here..."
            as="textarea"
            aria-label="With textarea"
          />
        </InputGroup>
        {formErrors.message && (
          <div className="error-message">{formErrors.message}</div>
        )}

        <Button type="submit" className="fw-bold w-25 mt-3" variant="dark">
          SEND
        </Button>
        {isMessageSent && (
          <div className="success-message mt-1">Message Sent!</div>
        )}
      </Form>
    </>
  );
}
