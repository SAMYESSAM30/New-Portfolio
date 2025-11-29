import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import "./services.css";
import { useState } from "react";
const Services = () => {
  const { t } = useTranslation();
  const [toggleState, setToggleState] = useState(0);
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

  const toggleTop = (index) => {
    setToggleState(index);
  };
  
  const dataCustomWebDesign = [
    {
      icon: <i className="uil uil-check-circle services__modal-icon"></i>,
      describtion: t("services.customWebDesign.items.item1"),
    },
    {
      icon: <i className="uil uil-check-circle services__modal-icon"></i>,
      describtion: t("services.customWebDesign.items.item2"),
    },
    {
      icon: <i className="uil uil-check-circle services__modal-icon"></i>,
      describtion: t("services.customWebDesign.items.item3"),
    },
    {
      icon: <i className="uil uil-check-circle services__modal-icon"></i>,
      describtion: t("services.customWebDesign.items.item4"),
    },
  ];
  const dataFrontendDevelopment = [
    {
      icon: <i className="uil uil-check-circle services__modal-icon"></i>,
      describtion: t("services.frontendDevelopment.items.item1"),
    },
    {
      icon: <i className="uil uil-check-circle services__modal-icon"></i>,
      describtion: t("services.frontendDevelopment.items.item2"),
    },
    {
      icon: <i className="uil uil-check-circle services__modal-icon"></i>,
      describtion: t("services.frontendDevelopment.items.item3"),
    },
    {
      icon: <i className="uil uil-check-circle services__modal-icon"></i>,
      describtion: t("services.frontendDevelopment.items.item4"),
    },
  ];
  const dataFullStackSolutions = [
    {
      icon: <i className="uil uil-check-circle services__modal-icon"></i>,
      describtion: t("services.fullStackSolutions.items.item1"),
    },
    {
      icon: <i className="uil uil-check-circle services__modal-icon"></i>,
      describtion: t("services.fullStackSolutions.items.item2"),
    },
    {
      icon: <i className="uil uil-check-circle services__modal-icon"></i>,
      describtion: t("services.fullStackSolutions.items.item3"),
    },
    {
      icon: <i className="uil uil-check-circle services__modal-icon"></i>,
      describtion: t("services.fullStackSolutions.items.item4"),
    },
  ];
  
  return (
    <section ref={sectionRef} className="services section" id="services">
      <h2 className="section__title">{t("services.title")}</h2>
      <span className="section__subtitle">{t("services.subtitle")}</span>
      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">
              {t("services.customWebDesign.title")}
            </h3>
          </div>
          <span className="services__button" onClick={() => toggleTop(1)}>
            {t("services.customWebDesign.viewMore")}{" "}
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
              <h3 className="services__modal-title">{t("services.customWebDesign.title")}</h3>
              <p className="services__modal-descirtion">
                {t("services.customWebDesign.description")}
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
              {t("services.frontendDevelopment.title")}
            </h3>
          </div>
          <span className="services__button" onClick={() => toggleTop(2)}>
            {t("services.frontendDevelopment.viewMore")}{" "}
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
              <h3 className="services__modal-title">{t("services.frontendDevelopment.title")}</h3>
              <p className="services__modal-descirtion">
                {t("services.frontendDevelopment.description")}
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
              {t("services.fullStackSolutions.title")}
            </h3>
          </div>
          <span className="services__button" onClick={() => toggleTop(3)}>
            {t("services.fullStackSolutions.viewMore")}{" "}
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
              <h3 className="services__modal-title">{t("services.fullStackSolutions.title")}</h3>
              <p className="services__modal-descirtion">
                {t("services.fullStackSolutions.description")}
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
