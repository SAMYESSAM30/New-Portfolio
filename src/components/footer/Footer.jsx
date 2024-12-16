import React from "react";
import "./footer.css";
import { useTranslation } from "react-i18next"; // Import the useTranslation hook

const Footer = () => {
  const { t } = useTranslation(); // Initialize the translation function

  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Samy</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              {t("about")}
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              {t("projects")}
            </a>
          </li>
          <li>
            <a href="#skills" className="footer__link">
              {t("skills")}
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/samy-essam-bb2411236/"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="uil uil-linkedin-alt"></i> {t("linkedin")}
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100008369070405&mibextid=LQQJ4d"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="uil uil-facebook-f"></i> {t("facebook")}
          </a>
          <a
            href="https://github.com/SAMYESSAM30"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="uil uil-github-alt"></i> {t("github")}
          </a>
        </div>

        <span className="footer__copy">{t("footer_copy")}</span>
      </div>
    </footer>
  );
};

export default Footer;
