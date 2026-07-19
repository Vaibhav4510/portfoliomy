import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(2);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section id='qualification' className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>
      <div className="qualification__container container">
        <div className="qualification__tabs">


          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            {""}
            Experience
          </div>
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            {""}
            Education
          </div>
        </div>
        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            {/* Education 1  College*/}
            <div className="qualification__data">
              <div className="">
                <h3 className="qualification__title">
                  {" "}
                  Dr. D. Y. Patil Institute of Technology, Pune
                </h3>
                <span className="qualification__subtitle">
                  Bachelor of Engineering in Information Technology
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2022 - 2026
                </div>
              </div>
              <div className="">
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* Education 2  High School*/}
            <div className="qualification__data">
              <div></div>

              <div className="">
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div className="">
                <h3 className="qualification__title">
                  Sahakar Maharshi Bhausaheb Santuji Thorat
                  Arts, Science and Commerce College, Sangamner
                </h3>
                <span className="qualification__subtitle">High School</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2020 - 2022
                </div>
              </div>
            </div>

            {/* Education 3 School*/}
            <div className="qualification__data">
              <div className="">
                <h3 className="qualification__title">
                  {" "}
                  B.G.P.SAHYADRI VIDYALAYA SANGAMNER
                </h3>
                <span className="qualification__subtitle">Middle School</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2008 - 2020
                </div>
              </div>
              <div className="">
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

          {/* Work Experience */}

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div className="">
                <h3 className="qualification__title">
                  {" "}
                  Kasnet Technology Pvt. Ltd.
                </h3>
                <span className="qualification__subtitle">
                  Power BI & Cloud Intern
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  {" "}Jan 2025 - Mar 2025
                </div>
              </div>
              <div className="">
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
