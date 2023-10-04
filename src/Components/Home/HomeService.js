import React from "react";
import ResImage from "../Images/ResImage.jpg";
import CommImage from "../Images/CommImage.jpg";
import { Container, Card, Button } from "react-bootstrap";
import "../Styles/Styles.css";

export function HomeService() {
    const homeServices = [
        {
          header: "Residential",
            title: "Residential Electrical Services",
          image: ResImage,
          style: { backgroundColor: "#f5ed29" },
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        },
        {
          header: "Commercial",
            title: "Commercial Electrical Services",
          image: CommImage,
          style: { backgroundColor: "#e42e31" },
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        },
    ]

  return (
    <>
        <Container className="d-flex align-items-center mt-5">
        {homeServices.map((item) => (
              <Card
                className="w-50 m-2 border-0 card-box"
                style={{ backgroundColor: "#0d1c2f" }}
              >
                <Card.Header
                  className="black-text fw-bold"
                  style={
                    item.style
                  }
                >
                  {item.header}
                </Card.Header>
                <Card.Body>
                  <Card.Img
                    variant="top"
                    src={item.image}
                    style={{ height: "10rem", objectFit: "cover" }}
                  />
                  <Card.Title className="mt-2 text-white">
                    {item.title}
                  </Card.Title>
                  <Card.Text className="text-white">
                    {item.text}
                  </Card.Text>
                  <Button variant="light" href="/contact" className="fw-bold">
                        CONTACT US
                    </Button>
                </Card.Body>

              </Card>

            
            ))}

        </Container>

    </>
  );
}
