import React, { useEffect } from "react";
import emailjs from "@emailjs/browser";
import { NavBar } from "../NavBar/NavBar";
import { Footer } from "../Footer/Footer";
import { ContactForm } from "./ContactForm";
import { Container } from "react-bootstrap";

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
          <p className="mt-2 mb-5 m-auto">(706) 945-9874 | test@gmail.com</p>
          <ContactForm />
        </Container>
      </div>

      <Footer />
    </>
  );
}