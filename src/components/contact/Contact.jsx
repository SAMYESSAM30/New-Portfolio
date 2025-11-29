import React from "react";
import { useTranslation } from "react-i18next";
import ContectForm from "./ContectForm";
import "./contact.css";

export const Contact = () => {
  const { t } = useTranslation();
  return (
    <section className="contact section" id="contact">
      <h2 h2 className="section__title">
        {" "}
        {t("contact.title")}
      </h2>
      <span className="section__subtitle">{t("contact.subtitle")}</span>

      <div className="contact__container grid">
        <div className="contact__content">
          <h3 className="contact__title">{t("contact.talkToMe")}</h3>

          <div className="contact__info">
            <div className="contact__card">
              <i className=" bx bx-mail-send contact__card-icon"></i>
              <h3 className="contact__card-title">{t("contact.email")}</h3>
              <sapn className="contact__card-data">samyessam2000@gmail.com</sapn>

              <a
                href="mailto:samyessam2000@gmail.com"
                className="contact__button"
              >
                {t("contact.writeMe")}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
            <div className="contact__card">
              <i className="bx bxl-whatsapp contact__card-icon"></i>
              <h3 className="contact__card-title">{t("contact.whatsapp")}</h3>
              <sapn className="contact__card-data">01141627898</sapn>

              <a
                href="https://api.whatsapp.com/send?phone=201141627898&text=Hello, more information!"
                className="contact__button"
                target="_blank"
                rel="noreferrer"
              >
                {t("contact.writeMe")}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
            <div className="contact__card">
              <i className="bx bxl-instagram contact__card-icon"></i>
              <h3 className="contact__card-title">{t("contact.instagram")}</h3>
              <sapn className="contact__card-data">Santa30</sapn>

              <a
                href="https://www.instagram.com/santa__30__/"
                target="_blank"
                className="contact__button"
                rel="noreferrer"
              >
                {t("contact.writeMe")}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="contact__content">
          <h3 className="contact__title">{t("contact.writeMeYourProject")}</h3>
          <ContectForm />
        </div>
      </div>
    </section>
  );
};
