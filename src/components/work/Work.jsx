import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import "./work.css";
import Works from "./Works";
const Work = () => {
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
    <section ref={sectionRef} className="work section" id="portfolio">
      <h2 className="section__title">{t("portfolio.title")}</h2>
      <span className="section__subtitle">{t("portfolio.subtitle")}</span>
      <Works />
    </section>
  );
};

export default Work;
