// Blogs.js
import React from "react";
import "../App.css";

import Header from "../components/header/Header";

import { Contact } from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import ScrollUp from "../components/scrollUp/ScrollUp";

function Blogs() {
  return (
    <>
      <Header />
      <main className="main">
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}

export default Blogs;
