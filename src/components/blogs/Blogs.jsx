import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import "./blogs.css";
import BlogList from "./BlogList";

const Blogs = () => {
  const { t } = useTranslation();
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="blogs section" id="blogs">
      <h2 className="section__title">{t("blogs.title")}</h2>
      <span className="section__subtitle">{t("blogs.subtitle")}</span>
      <BlogList />
    </section>
  );
};

export default Blogs;

