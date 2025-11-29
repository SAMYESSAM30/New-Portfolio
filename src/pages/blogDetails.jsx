import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Header from "../components/header/Header";
import BlogDetails from "../components/blogs/BlogDetails";
import Footer from "../components/footer/Footer";
import ScrollUp from "../components/scrollUp/ScrollUp";
import "../App.css";

function BlogDetailsPage() {
  return (
    <>
      <Header />
      <main className="main">
        <BlogDetails />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}

export default BlogDetailsPage;

