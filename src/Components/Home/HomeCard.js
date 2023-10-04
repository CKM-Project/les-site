import React from "react";
import {
  faBolt,
  faLightbulb,
  faChargingStation,
  faPlug,
  faScrewdriverWrench,
  faCloudBolt,
  faSun,
  faFan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardGroup } from "react-bootstrap";
import "../Styles/Styles.css";

export function HomeCard() {
  const homeCardGroup = [
    {
      cardTitle: "Electrical Services",
      cardImage: faBolt,
      cardText:
        "Electrical fuse changing, panel repair, replacement or upgrading; fixture installation; power restoration; parts assembly; and wiring repair and installation ",
    },
    {
      cardTitle: "Electrical Outlets & Switches",
      cardImage: faPlug,
      cardText:
        "Electrical outlet & switch installation, repair, and relocation services",
    },

    {
      cardTitle: "General Services",
      cardImage: faScrewdriverWrench,
      cardText:
        "General construction and repairs, installation, and remodeling",
    },

    {
      cardTitle: "Electric Car Chargers",
      cardImage: faChargingStation,
      cardText:
        "Electric car charger installation",
    },
    {
      cardTitle: "Ground Wires",
      cardImage: faCloudBolt,
      cardText:
        "Ground wire installation and repair",
    },
    {
      cardTitle: "Light Fixtures",
      cardImage: faLightbulb,
      cardText:
        "Light fixture repiar and installation",
    },
    {
      cardTitle: "Outdoor Lighting",
      cardImage: faSun,
      cardText:
        "Outdoor lighting services",
    },
    {
      cardTitle: "Fans",
      cardImage: faFan,
      cardText:
        "Fan installation & repair",
    },


  ];

  return (
    <>
      <div className="d-flex p-5">

        <CardGroup className="d-flex justify-content-evenly w-100 row-cols-md-4">

          {homeCardGroup.map((item) => (
            <div className="d-flex justify-content-center col align-self-start">
              <Card
                style={{ width: "20rem", backgroundColor: "#d1d2d4" }}
                className="border-2 border-white m-2 card-box"
              >
                <FontAwesomeIcon
                  size="2x"
                  icon={item.cardImage}
                  className="mt-2"
                  style={{ color: "#e42e31" }}
                />
                <Card.Body>
                  <Card.Title class="fs-5 text-center fw-bold black-text">
                    {item.cardTitle}
                  </Card.Title>
                  <Card.Text className="black-text">{item.cardText}</Card.Text>

                </Card.Body>
              </Card>
            </div>
          ))}
        </CardGroup>
      </div>
    </>
  );
}
