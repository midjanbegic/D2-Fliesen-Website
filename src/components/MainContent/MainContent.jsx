import React from "react";
import { Home } from "../../pages/Home/Home.jsx";
import { About } from "../../pages/About/About.jsx";
import { Services } from "../../pages/Services/Services";
import { Gallery } from "../../pages/Gallery/Gallery";
import { Contact } from "../Contact/Contact.jsx";

export const MainContent = () => {
  return (
    <div>
      <Home />
      <About />
      <Services />
      <Gallery />
      <Contact />
    </div>
  );
};
