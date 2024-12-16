import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./qualifcation.css";

export const Qualifcation = () => {
  const [toggleState, setToggleState] = useState(1);
  const { t } = useTranslation();

  const toggleTop = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualifcation section" id="qualifcation">
      <h2 className="section__title">{t("qualification_title")}</h2>
      <span className="section__subtitle">{t("personal_journey")}</span>

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
            {t("education")}
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
            {t("experience_title")}
          </div>
        </div>

        {/* Education */}
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
                <h3 className="qualifcation__title">{t("internship_title")}</h3>
                <span className="qualifcation__subtitle">
                  {t("company_name", { company: "Syntrum Solutions" })}
                </span>
                <div className="qualifcation__calender">
                  <i className="uil uil-calendar-alt">
                    {t("year_range", { start: "2022", end: "2022" })}
                  </i>
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
              </div>
              <div>
                <h3 className="qualifcation__title">{t("bachelor_degree")}</h3>
                <span className="qualifcation__subtitle">
                  {t("company_name", { company: "Thebes Academy" })}
                </span>
                <div className="qualifcation__calender">
                  <i className="uil uil-calendar-alt">
                    {t("year_range", { start: "2018", end: "2020" })}
                  </i>
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
            {/* Data1 */}
            <div className="qualifcation__data">
              <div></div>
              <div>
                <span className="qualifcation__rounder"></span>
                <span className="qualifcation__line"></span>
              </div>
              <div>
                <h3 className="qualifcation__title">
                  {t("frontend_developer_title")}
                </h3>
                <span className="qualifcation__subtitle">
                  {t("company_name", { company: "National Housing Company" })}
                </span>
                <div className="qualifcation__calender">
                  <i className="uil uil-calendar-alt">
                    {t("current_year_range")}
                  </i>
                </div>
              </div>
            </div>

            {/* Data2 */}
            <div className="qualifcation__data">
              <div>
                <h3 className="qualifcation__title">
                  {t("frontend_developer")}
                </h3>
                <span className="qualifcation__subtitle">
                  {t("company_name", { company: "E2E County" })}
                </span>
                <div className="qualifcation__calender">
                  <i className="uil uil-calendar-alt">
                    {t("year_range", { start: "2023", end: "2023" })}
                  </i>
                </div>
              </div>
              <div>
                <span className="qualifcation__rounder"></span>
                <span className="qualifcation__line"></span>
              </div>
            </div>

            {/* Data3 */}
            <div className="qualifcation__data">
              <div></div>
              <div>
                <span className="qualifcation__rounder"></span>
                <span className="qualifcation__line"></span>
              </div>
              <div>
                <h3 className="qualifcation__title">
                  {t("frontend_developer")}
                </h3>
                <span className="qualifcation__subtitle">
                  {t("company_name", { company: "Syntrum Solutions" })}
                </span>
                <div className="qualifcation__calender">
                  <i className="uil uil-calendar-alt">
                    {t("year_range", { start: "2022", end: "2023" })}
                  </i>
                </div>
              </div>
            </div>

            {/* Data4 */}
            <div className="qualifcation__data">
              <div></div>
              <div>
                <span className="qualifcation__rounder"></span>
                <span className="qualifcation__line"></span>
              </div>
              <div>
                <h3 className="qualifcation__title">{t(".net_developer")}</h3>
                <span className="qualifcation__subtitle">
                  {t("company_name", { company: "Freelance" })}
                </span>
                <div className="qualifcation__calender">
                  <i className="uil uil-calendar-alt">
                    {t("year_range", { start: "2020", end: "2021" })}
                  </i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
