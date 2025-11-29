import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import "./qualifcation.css";
export const Qualifcation = () => {
  const { t } = useTranslation();
  const [toggleState, setToggleState] = useState(1);
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

  return (
    <section ref={sectionRef} className="qualifcation section" id="qualifcation">
      <h2 className="section__title">{t("qualification.title")}</h2>
      <span className="section__subtitle">{t("qualification.subtitle")}</span>

      <div className="qualifcation__container container">
        <div className="qualifcation__tabs">
          <div
            className={
              toggleState === 1
                ? "qualifcation__button qualifcation__active button--flex"
                : "qualifcation__button button--flex"
            }
            onClick={() => toggleTop(1)}
          >
            <i className="uil uil-graduation-cap qualifcation__icon"></i>
            {t("qualification.education")}
          </div>

          <div
            className={
              toggleState === 2
                ? "qualifcation__button qualifcation__active button--flex"
                : "qualifcation__button button--flex"
            }
            onClick={() => toggleTop(2)}
          >
            <i className="uil uil-briefcase-alt qualifcation__icon"></i>
            {t("qualification.experience")}
          </div>
        </div>
        {/* education */}
        <div className="qualifcation__sections">
          <div
            className={
              toggleState === 1
                ? "qualifcation__content qualifcation__content-active"
                : "qualifcation__content "
            }
          >
            {/* Data1 */}
            <div className="qualifcation__data">
              <div>
                <h3 className="qualifcation__title">
                  {t("qualification.internship")}
                </h3>
                <span className="qualifcation__subtitle">
                  {t("qualification.internshipLocation")}
                </span>
                <div className="qualifcation__calender">
                  <i className="uil uil-calendar-alt">{t("qualification.internshipDate")}</i>
                </div>
              </div>
              <div>
                <span className="qualifcation__rounder"></span>
                <span className="qualifcation__line"></span>
              </div>
            </div>
            {/* Data2 */}
            <div className="qualifcation__data">
              <div></div>
              <div>
                <span className="qualifcation__rounder"></span>
                <span className="qualifcation__line"></span>
              </div>{" "}
              <div>
                <h3 className="qualifcation__title">
                  {t("qualification.bachelor")}
                </h3>
                <span className="qualifcation__subtitle">
                  {t("qualification.bachelorLocation")}
                </span>
                <div className="qualifcation__calender">
                  <i className="uil uil-calendar-alt">{t("qualification.bachelorDate")}</i>
                </div>
              </div>
            </div>
          </div>

          {/* Experience */}

          <div
            className={
              toggleState === 2
                ? "qualifcation__content qualifcation__content-active"
                : "qualifcation__content"
            }
          >
            {/* NHC Innovation - Current */}
            <div className="qualifcation__data">
              <div></div>
              <div>
                <span className="qualifcation__rounder"></span>
                <span className="qualifcation__line"></span>
              </div>
              <div>
                <h3 className="qualifcation__title">{t("qualification.seniorFrontendDeveloperNHC")}</h3>
                <span className="qualifcation__subtitle">
                  {t("qualification.seniorFrontendDeveloperNHCLocation")}
                </span>
                <div className="qualifcation__calender">
                  <i className="uil uil-calendar-alt">{t("qualification.seniorFrontendDeveloperNHCDate")}</i>
                </div>
              </div>
            </div>
            {/* Zeem */}
            <div className="qualifcation__data">
              <div>
                <h3 className="qualifcation__title">{t("qualification.seniorFrontendDeveloperZeem")}</h3>
                <span className="qualifcation__subtitle">
                  {t("qualification.seniorFrontendDeveloperZeemLocation")}
                </span>
                <div className="qualifcation__calender">
                  <i className="uil uil-calendar-alt">{t("qualification.seniorFrontendDeveloperZeemDate")}</i>
                </div>
              </div>
              <div>
                <span className="qualifcation__rounder"></span>
                <span className="qualifcation__line"></span>
              </div>
            </div>
            {/* Upwork */}
            <div className="qualifcation__data">
              <div></div>
              <div>
                <span className="qualifcation__rounder"></span>
                <span className="qualifcation__line"></span>
              </div>
              <div>
                <h3 className="qualifcation__title">{t("qualification.frontendDeveloperUpwork")}</h3>
                <span className="qualifcation__subtitle">
                  {t("qualification.frontendDeveloperUpworkLocation")}
                </span>
                <div className="qualifcation__calender">
                  <i className="uil uil-calendar-alt">{t("qualification.frontendDeveloperUpworkDate")}</i>
                </div>
              </div>
            </div>
            {/* Custom Mind */}
            <div className="qualifcation__data">
              <div>
                <h3 className="qualifcation__title">{t("qualification.frontendDeveloperCustomMind")}</h3>
                <span className="qualifcation__subtitle">
                  {t("qualification.frontendDeveloperCustomMindLocation")}
                </span>
                <div className="qualifcation__calender">
                  <i className="uil uil-calendar-alt">{t("qualification.frontendDeveloperCustomMindDate")}</i>
                </div>
              </div>
              <div>
                <span className="qualifcation__rounder"></span>
                <span className="qualifcation__line"></span>
              </div>
            </div>
            {/* E2E County */}
            <div className="qualifcation__data">
              <div></div>
              <div>
                <span className="qualifcation__rounder"></span>
                <span className="qualifcation__line"></span>
              </div>
              <div>
                <h3 className="qualifcation__title">{t("qualification.frontendDeveloperE2E")}</h3>
                <span className="qualifcation__subtitle">
                  {t("qualification.frontendDeveloperE2ELocation")}
                </span>
                <div className="qualifcation__calender">
                  <i className="uil uil-calendar-alt">{t("qualification.frontendDeveloperE2EDate")}</i>
                </div>
              </div>
            </div>
            {/* Syntrum Solutions */}
            <div className="qualifcation__data">
              <div>
                <h3 className="qualifcation__title">{t("qualification.frontendDeveloperSyntrum")}</h3>
                <span className="qualifcation__subtitle">
                  {t("qualification.frontendDeveloperSyntrumLocation")}
                </span>
                <div className="qualifcation__calender">
                  <i className="uil uil-calendar-alt">{t("qualification.frontendDeveloperSyntrumDate")}</i>
                </div>
              </div>
              <div>
                <span className="qualifcation__rounder"></span>
                <span className="qualifcation__line"></span>
              </div>
            </div>
            {/* .Net Developer */}
            <div className="qualifcation__data">
              <div></div>
              <div>
                <span className="qualifcation__rounder"></span>
                <span className="qualifcation__line"></span>
              </div>
              <div>
                <h3 className="qualifcation__title">{t("qualification.netDeveloper")}</h3>
                <span className="qualifcation__subtitle">
                  {t("qualification.netDeveloperLocation")}
                </span>
                <div className="qualifcation__calender">
                  <i className="uil uil-calendar-alt">{t("qualification.netDeveloperDate")}</i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
