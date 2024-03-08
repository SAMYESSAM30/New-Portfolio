import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Smith</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#testimonials" className="footer__link">
              Testimonials
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/samy-essam-bb2411236/"
            className="footer__social-link"
            target="_blank"
          >
            <i class="uil uil-linkedin-alt"></i>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100008369070405&mibextid=LQQJ4d"
            className="footer__social-link"
            target="_blank"
          >
            <i class="uil uil-facebook-f"></i>
          </a>
          <a
            href="https://github.com/SAMYESSAM30"
            className="footer__social-link"
            target="_blank"
          >
            <i class="uil uil-github-alt"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; Crypticalcoder. All rigths reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
