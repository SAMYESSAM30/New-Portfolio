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
              Product <br /> Designer
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
              <h3 className="services__modal-title">Product Designer</h3>
              <p className="services__modal-descirtion">
                Service with more than 3 years of experience. Providing quality
                work to clients and companies.
              </p>
              <ui className="services__modal-services grid">
                {data.map((item, index) => {
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
              Ui/Ux
              <br /> Designer
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
              <h3 className="services__modal-title">Ui/Ux Designer</h3>
              <p className="services__modal-descirtion">
                Service with more than 3 years of experience. Providing quality
                work to clients and companies.
              </p>
              <ui className="services__modal-services grid">
                {data.map((item, index) => {
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
              Visual <br /> Designer
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
              <h3 className="services__modal-title">Visual Designer</h3>
              <p className="services__modal-descirtion">
                Service with more than 3 years of experience. Providing quality
                work to clients and companies.
              </p>
              <ui className="services__modal-services grid">
                {data.map((item, index) => {
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
const data = [
  {
    icon: <i className="uil uil-check-circle services__modal-icon"></i>,
    describtion: "I develop the user interface.",
  },
  {
    icon: <i className="uil uil-check-circle services__modal-icon"></i>,
    describtion: "Web page development",
  },
  {
    icon: <i className="uil uil-check-circle services__modal-icon"></i>,
    describtion: "I create ux element interactions.",
  },
  {
    icon: <i className="uil uil-check-circle services__modal-icon"></i>,
    describtion: "Design and mockups of products for companies",
  },
];
