import React, { useState, useEffect } from "react";
import "./Header.css";
import { useTranslation } from "react-i18next";
import "../../i18n"; // تأكد من استيراد ملف i18n.js

const Header = () => {
  const [Toggle, ShowMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header");
      if (window.scrollY >= 80) header.classList.add("scroll-header");
      else header.classList.remove("scroll-header");
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="header">
      <nav className="nav container">
        <a href="/" className="nav__logo">
          {t("samy")}
        </a>
        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={
                  activeNav === "#home" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-estate nav__icon"></i> {t("home")}
              </a>
            </li>
          </ul>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                className={
                  activeNav === "#about" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-user nav__icon"></i> {t("about")}
              </a>
            </li>
          </ul>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#skills"
                onClick={() => setActiveNav("#skills")}
                className={
                  activeNav === "#skills"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-file-alt nav__icon"></i> {t("skills")}
              </a>
            </li>
          </ul>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#services"
                onClick={() => setActiveNav("#services")}
                className={
                  activeNav === "#services"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-briefcase-alt nav__icon"></i>{" "}
                {t("services")}
              </a>
            </li>
          </ul>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#portfolio"
                onClick={() => setActiveNav("#portfolio")}
                className={
                  activeNav === "#portfolio"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-scenery nav__icon"></i> {t("portfolio")}
              </a>
            </li>
          </ul>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#contact"
                onClick={() => setActiveNav("#contact")}
                className={
                  activeNav === "#contact"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-message nav__icon"></i> {t("contact")}
              </a>
            </li>
          </ul>
          <ul className="nav__list grid">
            <div className="lang">
              {" "}
              <li className="nav__item">
                <a
                  href="#home"
                  onClick={() => changeLanguage("en")}
                  className="nav__link"
                >
                  <i className="uil uil-language nav__icon"></i> {t("english")}
                </a>
              </li>
              <li className="nav__item">|</li>
              <li className="nav__item">
                <a
                  href="#home"
                  onClick={() => changeLanguage("ar")}
                  className="nav__link"
                >
                  <i className="uil uil-language nav__icon"></i> {t("arabic")}
                </a>
              </li>
            </div>
          </ul>
          <i
            className="uil uil-times nav__close"
            onClick={() => ShowMenu(!Toggle)}
          ></i>
        </div>
        <div className="nav__toggle" onClick={() => ShowMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
