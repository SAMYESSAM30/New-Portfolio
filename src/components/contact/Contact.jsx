import React from "react";
import ContectForm from "./ContectForm";
import "./contact.css";
import { useTranslation } from "react-i18next";

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">{t("contactTitle")}</h2>
      <span className="section__subtitle">{t("contactSubtitle")}</span>

      <div className="contact__container grid">
        <div className="contact__content">
          <h3 className="contact__title">{t("contactContentTitle")}</h3>

          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>
              <h3 className="contact__card-title">{t("contactEmailTitle")}</h3>
              <span className="contact__card-data">
                {t("contactEmailData")}
              </span>

              <a
                href="mailto:samyessam2000@gmail.com"
                className="contact__button"
              >
                {t("contactEmailButton")}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
            <div className="contact__card">
              <i className="bx bxl-whatsapp contact__card-icon"></i>
              <h3 className="contact__card-title">
                {t("contactWhatsappTitle")}
              </h3>
              <span className="contact__card-data">
                {t("contactWhatsappData")}
              </span>

              <a
                href="https://api.whatsapp.com/send?phone=201141627898&text=Hello, more information!"
                className="contact__button"
                target="_blank"
                rel="noreferrer"
              >
                {t("contactWhatsappButton")}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
            <div className="contact__card">
              <i className="bx bxl-instagram contact__card-icon"></i>
              <h3 className="contact__card-title">
                {t("contactInstagramTitle")}
              </h3>
              <span className="contact__card-data">
                {t("contactInstagramData")}
              </span>

              <a
                href="https://www.instagram.com/santa__30__/"
                target="_blank"
                className="contact__button"
                rel="noreferrer"
              >
                {t("contactInstagramButton")}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="contact__content">
          <h3 className="contact__title">{t("contactProjectTitle")}</h3>
          <ContectForm />
        </div>
      </div>
    </section>
  );
};
