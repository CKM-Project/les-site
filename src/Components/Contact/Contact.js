import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { NavBar } from "../NavBar/NavBar";
import { Footer } from "../Footer/Footer";
// import Wordcloud from "../Images/WordCloud.png";
// import BUAIL from "../Images/BUAIL.PNG";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Styles/Styles.css";
import { Container, Form, Button, InputGroup } from "react-bootstrap";

export function Contact() {
  // const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault(); // prevents the page from reloading when you hit “Send”

  //   emailjs
  //     .sendForm(
  //       "YOUR_SERVICE_ID",
  //       "YOUR_TEMPLATE_ID",
  //       form.current,
  //       "YOUR_PUBLIC_KEY"
  //     )
  //     .then(
  //       (result) => {
  //         // show the user a success message
  //       },
  //       (error) => {
  //         // show the user an error
  //       }
  //     );
  // };

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
          <Form className="w-50">
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
              <Form.Control
                name="name"
                placeholder="Enter Name"
                aria-label="Contact Name"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon2">Email</InputGroup.Text>
              <Form.Control
                placeholder="Enter Email"
                aria-label="Contact Email"
                aria-describedby="basic-addon2"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text>Message</InputGroup.Text>
              <Form.Control
                placeholder="Enter your message here..."
                as="textarea"
                aria-label="With textarea"
              />
            </InputGroup>

            <Button
              type="submit"
              className="fw-bold mt-2"
              style={{
                backgroundColor: "#BD3430",
                borderColor: "#BD3430",
                color: "#2c2926",
              }}
              href="mailto:daniel.minahan9@gmail.com"
            >
              SUBMIT
            </Button>
          </Form>

          {/* <form ref={form} onSubmit={sendEmail}>
     <label>Name</label>
     <input type="text" name="user_name" />
     <label>Email</label>
     <input type="email" name="user_email" />
     <label>Message</label>
     <textarea name="message" />
     <input type="submit" value="Send" />
   </form> */}
        </Container>
      </div>

      <Footer />
    </>
  );
}
