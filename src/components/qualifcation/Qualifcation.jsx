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
                <h3 className="qualifcation__title">Web Design</h3>
                <span className="qualifcation__subtitle">
                  spain - Institute
                </span>
                <div className="qualifcation__calender">
                  <i className="uil uil-calendar-alt">2021 - present</i>
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
                <h3 className="qualifcation__title">Art Director</h3>
                <span className="qualifcation__subtitle">
                  spain - Institute
                </span>
                <div className="qualifcation__calender">
                  <i className="uil uil-calendar-alt"> 2021 - 2022 </i>
                </div>
              </div>
            </div>
            {/* Data3 */}
            <div className="qualifcation__data">
              {" "}
              <div>
                <h3 className="qualifcation__title">Web development</h3>
                <span className="qualifcation__subtitle">
                  spain - Institute
                </span>
                <div className="qualifcation__calender">
                  <i className="uil uil-calendar-alt">2021 - present</i>
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
                <h3 className="qualifcation__title">UX Expert</h3>
                <span className="qualifcation__subtitle">
                  spain - Institute
                </span>
                <div className="qualifcation__calender">
                  <i className="uil uil-calendar-alt"> 2019 - 2018 </i>
                </div>
              </div>
            </div>
          </div>
          {/* end data one */}

          <div
            className={
              toggleState === 2
                ? "qualifcation__content qualifcation__content-active"
                : "qualifcation__content"
            }
          >
            {/* Data1 */}
            <div className="qualifcation__data">
              {" "}
              <div>
                <h3 className="qualifcation__title">Product Designer</h3>
                <span className="qualifcation__subtitle">
                  spain - Institute
                </span>
                <div className="qualifcation__calender">
                  <i className="uil uil-calendar-alt">2021 - present</i>
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
                <h3 className="qualifcation__title">UX Designer</h3>
                <span className="qualifcation__subtitle">
                  spain - Institute
                </span>
                <div className="qualifcation__calender">
                  <i className="uil uil-calendar-alt"> 2021 - 2022 </i>
                </div>
              </div>
            </div>
            {/* Data3 */}
            <div className="qualifcation__data">
              {" "}
              <div>
                <h3 className="qualifcation__title">Web Designer</h3>
                <span className="qualifcation__subtitle">Figma - spain</span>
                <div className="qualifcation__calender">
                  <i className="uil uil-calendar-alt">2021 - present</i>
                </div>
              </div>
              <div>
                <span className="qualifcation__rounder"></span>
                <span className="qualifcation__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
