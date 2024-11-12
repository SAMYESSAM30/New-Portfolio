import React from "react";

import About from "../components/about/About";
import Header from "../components/header/Header";
import Home from "../components/home/Home";

import { Contact } from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import ScrollUp from "../components/scrollUp/ScrollUp";
import Services from "../components/services/Services";
import Skills from "../components/skills/Skills";
import { Qualifcation } from "../components/qualifcation/Qualifcation";
import Work from "../components/work/Work";
// import Testimonials from "../components/testimonials/Testimonials";
import "../App.css";

const home = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualifcation />
        <Work />
        {/* <Testimonials /> */}
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
};

export default home;
