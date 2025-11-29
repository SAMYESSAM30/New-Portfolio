import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Header.css";
const Header = () => {
  const { t, i18n } = useTranslation();
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });
  const [Toggle, ShowMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Samy
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
                <i className="uil uil-estate nav__icon"></i> {t("nav.home")}
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
                <i className="uil uil-user nav__icon"></i> {t("nav.about")}
              </a>
            </li>
            {/*  */}
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
                <i className="uil uil-file-alt nav__icon"></i>
                {t("nav.skills")}
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
                <i className="uil uil-briefcase-alt nav__icon"></i>{t("nav.services")}
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
                <i className="uil uil-scenery nav__icon"></i>
                {t("nav.portfolio")}
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
                <i className="uil uil-message nav__icon"></i>
                {t("nav.contact")}
              </a>
            </li>
          </ul>
          <i
            className="uil uil-times nav__close"
            onClick={() => ShowMenu(!Toggle)}
          ></i>
        </div>
        <div className="nav__toggle" onClick={() => ShowMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
        <div className="nav__language">
          {i18n.language !== "en" && (
            <button
              onClick={() => i18n.changeLanguage("en")}
              className="language-btn"
            >
              EN
            </button>
          )}
          {i18n.language !== "ar" && (
            <button
              onClick={() => i18n.changeLanguage("ar")}
              className="language-btn"
            >
              AR
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
