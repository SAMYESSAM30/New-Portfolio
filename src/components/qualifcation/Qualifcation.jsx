import React, { useState } from "react";
import "./qualifcation.css";
export const Qualifcation = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTop = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualifcation section" id="qualifcation">
      <h2 className="section__title">Qualifcation</h2>
      <span className="section__subtitle">My Personel journey</span>

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
            Education
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
            Experience
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
                  Internship in Frontend developer
                </h3>
                <span className="qualifcation__subtitle">
                  Egy - Syntrum Solutions
                </span>
                <div className="qualifcation__calender">
                  <i className="uil uil-calendar-alt">2022 - 2022</i>
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
                  bachelor’s degree in MIS
                </h3>
                <span className="qualifcation__subtitle">
                  Egy - Thebes Academy
                </span>
                <div className="qualifcation__calender">
                  <i className="uil uil-calendar-alt"> 2018 - 2020 </i>
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
             <div className="qualifcation__data">
              <div></div>
              <div>
                <span className="qualifcation__rounder"></span>
                <span className="qualifcation__line"></span>
              </div>{" "}
              <div>
                <h3 className="qualifcation__title">Senior Frontend Developer </h3>
                <span className="qualifcation__subtitle">
                  NHC (National Housing Company) - Remote
                </span>
                <div className="qualifcation__calender">
                  <i className="uil uil-calendar-alt"> 2022 - 2023 </i>
                </div>
              </div>
            </div>
            {/* Data1 */}
            <div className="qualifcation__data">
              {" "}
              <div>
                <h3 className="qualifcation__title">Frontend Developer</h3>
                <span className="qualifcation__subtitle">
                  E2E County - on side
                </span>
                <div className="qualifcation__calender">
                  <i className="uil uil-calendar-alt">2023 - Current</i>
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
                <h3 className="qualifcation__title">Frontend Developer </h3>
                <span className="qualifcation__subtitle">
                  Syntrum Solutions - hybrid
                </span>
                <div className="qualifcation__calender">
                  <i className="uil uil-calendar-alt"> 2022 - 2023 </i>
                </div>
              </div>
            </div>
            {/* Data3 */}
            <div className="qualifcation__data">
              {" "}
              <div>
                <h3 className="qualifcation__title">Frontend Developer</h3>
                <span className="qualifcation__subtitle">
                  Freelance - Remote
                </span>
                <div className="qualifcation__calender">
                  <i className="uil uil-calendar-alt">2021 - Current</i>
                </div>
              </div>
              <div>
                <span className="qualifcation__rounder"></span>
                <span className="qualifcation__line"></span>
              </div>
            </div>
            {/* Data4 */}
            <div className="qualifcation__data">
              <div></div>
              <div>
                <span className="qualifcation__rounder"></span>
                <span className="qualifcation__line"></span>
              </div>{" "}
              <div>
                <h3 className="qualifcation__title">.Net Developer</h3>
                <span className="qualifcation__subtitle">
                  Freelance - Remote
                </span>
                <div className="qualifcation__calender">
                  <i className="uil uil-calendar-alt"> 2020 - 2021 </i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
