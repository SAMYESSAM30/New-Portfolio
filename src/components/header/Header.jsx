import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";
import "./Header.css";

const Header = () => {
  const { t, i18n } = useTranslation();
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const headerRef = useRef(null);

  // Handle scroll with proper cleanup
  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        if (window.scrollY >= 80) {
          headerRef.current.classList.add("scroll-header");
        } else {
          headerRef.current.classList.remove("scroll-header");
        }
      }
    };

    // Throttle scroll event for better performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", throttledScroll);
    };
  }, []);

  const [Toggle, ShowMenu] = useState(false);
  const [activeNav, setActiveNav] = useState(
    location.pathname === "/blogs" ? "/blogs" : "#home"
  );

  // Handle navigation for hash links
  const handleNavClick = (e, hash) => {
    e.preventDefault();
    setActiveNav(hash);
    ShowMenu(false);
    
    // If not on home page, navigate to home first then scroll to section
    if (location.pathname !== "/") {
      navigate("/");
      // Wait for navigation to complete, then scroll to section
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      // Already on home page, just scroll to section
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="header" ref={headerRef}>
      <nav className="nav container">
        <Link
          to="/"
          className="nav__logo"
          onClick={() => setActiveNav("#home")}
        >
          Samy
        </Link>
        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                onClick={(e) => handleNavClick(e, "#home")}
                className={
                  activeNav === "#home" ? "nav__link active-link" : "nav__link"
                }
                aria-label={t("nav.home")}
              >
                <i className="uil uil-estate nav__icon" aria-hidden="true"></i> {t("nav.home")}
              </a>
            </li>
          </ul>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#about"
                onClick={(e) => handleNavClick(e, "#about")}
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
                onClick={(e) => handleNavClick(e, "#skills")}
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
                onClick={(e) => handleNavClick(e, "#services")}
                className={
                  activeNav === "#services"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-briefcase-alt nav__icon"></i>
                {t("nav.services")}
              </a>
            </li>
          </ul>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#portfolio"
                onClick={(e) => handleNavClick(e, "#portfolio")}
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
              <Link
                to="/blogs"
                onClick={() => {
                  setActiveNav("/blogs");
                  ShowMenu(false);
                }}
                className={
                  activeNav === "/blogs" || location.pathname === "/blogs"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-file-alt nav__icon"></i>
                {t("nav.blogs")}
              </Link>
            </li>
          </ul>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
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
          <button
            className="uil uil-times nav__close"
            onClick={() => ShowMenu(!Toggle)}
            aria-label="Close menu"
            type="button"
          ></button>
        </div>
        <button
          className="nav__toggle"
          onClick={() => ShowMenu(!Toggle)}
          aria-label={Toggle ? "Close menu" : "Open menu"}
          aria-expanded={Toggle}
          type="button"
        >
          <i className="uil uil-apps"></i>
        </button>
        <div className="nav__controls">
          <button
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label={
              isDark ? "Switch to light theme" : "Switch to dark theme"
            }
          >
            <i className={isDark ? "uil uil-sun" : "uil uil-moon"}></i>
          </button>
          <div className="nav__language">
            {i18n.language !== "en" && (
              <button
                onClick={() => i18n.changeLanguage("en")}
                className="language-btn"
                aria-label="Switch to English"
                type="button"
              >
                EN
              </button>
            )}
            {i18n.language !== "ar" && (
              <button
                onClick={() => i18n.changeLanguage("ar")}
                className="language-btn"
                aria-label="Switch to Arabic"
                type="button"
              >
                AR
              </button>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
