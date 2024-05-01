import React from "react";
import "./services.css";
import { useState } from "react";
const Services = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTop = (index) => {
    setToggleState(index);
  };
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What i offer</span>
      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">
              Custom
              <br />
              Web Design
            </h3>
          </div>
          <span className="services__button" onClick={() => toggleTop(1)}>
            View More{" "}
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
              <h3 className="services__modal-title">Custom Web Design</h3>
              <p className="services__modal-descirtion">
                Service with more than 3 years of experience. Providing quality
                work to clients and companies.
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
              Front-end
              <br /> Development
            </h3>
          </div>
          <span className="services__button" onClick={() => toggleTop(2)}>
            View More{" "}
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
              <h3 className="services__modal-title">Front-end Development</h3>
              <p className="services__modal-descirtion">
                Service with more than 3 years of experience. Providing quality
                work to clients and companies.
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
              Full-stack
              <br /> Solutions
            </h3>
          </div>
          <span className="services__button" onClick={() => toggleTop(3)}>
            View More{" "}
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
              <h3 className="services__modal-title">Full-stack Solutions</h3>
              <p className="services__modal-descirtion">
                Service with more than 3 years of experience. Providing quality
                work to clients and companies.
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
const dataCustomWebDesign = [
  {
    icon: <i className="uil uil-check-circle services__modal-icon"></i>,
    describtion: "Tailored designs to reflect your brand identity.",
  },
  {
    icon: <i className="uil uil-check-circle services__modal-icon"></i>,
    describtion: "Responsive layouts for seamless user experience.",
  },
  {
    icon: <i className="uil uil-check-circle services__modal-icon"></i>,
    describtion: "Integration of modern UI/UX principles.",
  },
  {
    icon: <i className="uil uil-check-circle services__modal-icon"></i>,
    describtion: "Cross-browser and cross-device compatibility.",
  },
];
const dataFrontendDevelopment = [
  {
    icon: <i className="uil uil-check-circle services__modal-icon"></i>,
    describtion: "Building interactive and engaging user interfaces.",
  },
  {
    icon: <i className="uil uil-check-circle services__modal-icon"></i>,
    describtion: "Utilizing HTML, CSS, and JavaScript frameworks.",
  },
  {
    icon: <i className="uil uil-check-circle services__modal-icon"></i>,
    describtion: "Ensuring code efficiency and optimization.",
  },
  {
    icon: <i className="uil uil-check-circle services__modal-icon"></i>,
    describtion: "Implementing accessibility standards for inclusivity.",
  },
];
const dataFullStackSolutions = [
  {
    icon: <i className="uil uil-check-circle services__modal-icon"></i>,
    describtion:
      "Developing dynamic websites with front-end and back-end integration.",
  },
  {
    icon: <i className="uil uil-check-circle services__modal-icon"></i>,
    describtion: "Creating RESTful APIs for data exchange.",
  },
  {
    icon: <i className="uil uil-check-circle services__modal-icon"></i>,
    describtion: "Database design and management.",
  },
  {
    icon: <i className="uil uil-check-circle services__modal-icon"></i>,
    describtion: "Deployment and maintenance support.",
  },
];
