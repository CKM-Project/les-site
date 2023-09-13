import React from "react";
import { NavBar } from "../NavBar/NavBar";
import { Footer } from "../Footer/Footer";
// import Wordcloud from "../Images/WordCloud.png";
// import BUAIL from "../Images/BUAIL.PNG";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Styles/Styles.css";

// import { Container, Card, Button } from "react-bootstrap";

export function Services() {
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
      <div id="container"></div>

      <Footer />
    </>
  );
}
