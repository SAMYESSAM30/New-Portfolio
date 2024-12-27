import React from "react";
import "./services.css";
import { useState } from "react";
import { useTranslation } from "react-i18next";
const Services = () => {
  const { t } = useTranslation();
  const dataCustomWebDesign = [
    {
      icon: <i className="uil uil-check-circle services__modal-icon"></i>,
      describtion: t("tailored-designs-to-reflect-your-brand-identity"),
    },
    {
      icon: <i className="uil uil-check-circle services__modal-icon"></i>,
      describtion: t("responsive-layouts-for-seamless-user-experience"),
    },
    {
      icon: <i className="uil uil-check-circle services__modal-icon"></i>,
      describtion: t("integration-of-modern-ui-ux-principles"),
    },
    {
      icon: <i className="uil uil-check-circle services__modal-icon"></i>,
      describtion: t("cross-browser-and-cross-device-compatibility"),
    },
  ];
  const dataFrontendDevelopment = [
    {
      icon: <i className="uil uil-check-circle services__modal-icon"></i>,
      describtion: t("building-interactive-and-engaging-user-interfaces"),
    },
    {
      icon: <i className="uil uil-check-circle services__modal-icon"></i>,
      describtion: t("utilizing-html-css-and-javascript-frameworks"),
    },
    {
      icon: <i className="uil uil-check-circle services__modal-icon"></i>,
      describtion: t("ensuring-code-efficiency-and-optimization"),
    },
    {
      icon: <i className="uil uil-check-circle services__modal-icon"></i>,
      describtion: t("implementing-accessibility-standards-for-inclusivity"),
    },
  ];
  const dataFullStackSolutions = [
    {
      icon: <i className="uil uil-check-circle services__modal-icon"></i>,
      describtion: t(
        "developing-dynamic-websites-with-front-end-and-back-end-integration"
      ),
    },
    {
      icon: <i className="uil uil-check-circle services__modal-icon"></i>,
      describtion: t("creating-restful-apis-for-data-exchange"),
    },
    {
      icon: <i className="uil uil-check-circle services__modal-icon"></i>,
      describtion: t("database-design-and-management"),
    },
    {
      icon: <i className="uil uil-check-circle services__modal-icon"></i>,
      describtion: t("deployment-and-maintenance-support"),
    },
  ];
  const [toggleState, setToggleState] = useState(0);
  const toggleTop = (index) => {
    setToggleState(index);
  };
  return (
    <section className="services section" id="services">
      <h2 className="section__title">{t("services")}</h2>
      <span className="section__subtitle">{t("what-i-offer")}</span>
      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">
              {t("custom")}
              <br />
              {t("web-design")}{" "}
            </h3>
          </div>
          <span className="services__button" onClick={() => toggleTop(1)}>
            {t("view-more")}{" "}
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__model-content">
              <i
                onClick={() => toggleTop(0)}
                className="uil uil-times services__modal-close"
              ></i>
              <h3 className="services__modal-title">
                {t("custom-web-design")}
              </h3>
              <p className="services__modal-descirtion">
                {t(
                  "service-with-more-than-3-years-of-experience-providing-quality-work-to-clients-and-companies"
                )}{" "}
              </p>
              <ui className="services__modal-services grid">
                {dataCustomWebDesign.map((item, index) => {
                  return (
                    <li className="services__modal-service" key={index}>
                      {item.icon}
                      <p className="services__modal-info">{item.describtion}</p>
                    </li>
                  );
                })}
              </ui>
            </div>
          </div>
        </div>
        {/* ddddd */}
        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">
              {t("front-end")} <br /> {t("development")}
            </h3>
          </div>
          <span className="services__button" onClick={() => toggleTop(2)}>
            {t("view-more")}{" "}
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__model-content">
              <i
                onClick={() => toggleTop(0)}
                className="uil uil-times services__modal-close"
              ></i>
              <h3 className="services__modal-title">
                {t("front-end-development")}
              </h3>
              <p className="services__modal-descirtion">
                {t(
                  "service-with-more-than-3-years-of-experience-providing-quality-work-to-clients-and-companies-0"
                )}{" "}
              </p>
              <ui className="services__modal-services grid">
                {dataFrontendDevelopment.map((item, index) => {
                  return (
                    <li className="services__modal-service" key={index}>
                      {item.icon}
                      <p className="services__modal-info">{item.describtion}</p>
                    </li>
                  );
                })}
              </ui>
            </div>
          </div>
        </div>
        {/* dddd */}
        <div className="services__content">
          <div>
            <i className="uil uil-edit services__icon"></i>
            <h3 className="services__title">
              {t("full-stack")}
              <br /> {t("solutions")}
            </h3>
          </div>
          <span className="services__button" onClick={() => toggleTop(3)}>
            {t("view-more")}{" "}
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div
            className={
              toggleState === 3
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__model-content">
              <i
                onClick={() => toggleTop(0)}
                className="uil uil-times services__modal-close"
              ></i>
              <h3 className="services__modal-title">
                {t("full-stack-solutions")}
              </h3>
              <p className="services__modal-descirtion">
                {t(
                  "service-with-more-than-3-years-of-experience-providing-quality-work-to-clients-and-companies-1"
                )}{" "}
              </p>
              <ui className="services__modal-services grid">
                {dataFullStackSolutions.map((item, index) => {
                  return (
                    <li className="services__modal-service" key={index}>
                      {item.icon}
                      <p className="services__modal-info">{item.describtion}</p>
                    </li>
                  );
                })}
              </ui>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
