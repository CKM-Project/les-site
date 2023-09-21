import React from "react";
// import TagManager from "react-gtm-module";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home/Home.js";
import { About } from "./Components/About/About.js";
import { Contact } from "./Components/Contact/Contact.js";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // const tagManagerArgs = {
  //   gtmId: "XXX",
  // };

  // TagManager.initialize(tagManagerArgs);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
