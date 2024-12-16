// Blogs.js
import React from "react";
import "../App.css";

import Header from "../components/header/Header";

import Footer from "../components/footer/Footer";
import ScrollUp from "../components/scrollUp/ScrollUp";
import BolgsCom from "../components/blogs/BolgsCom";

function Blogs() {
  return (
    <>
      <Header />
      <main className="main">
        <BolgsCom />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}

export default Blogs;
