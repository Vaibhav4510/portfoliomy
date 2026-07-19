import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class="bx bx-award about__icon"></i>
        <h3 className="about__title">CGPA</h3>
        <span className="about__subtitle">9/10</span>
      </div>

      <div className="about__box">
        <i class="bx bx-briefcase-alt-2 about__icon"></i>
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">10 + projects</span>
      </div>

      <div className="about__box">
        <i class="bx bxl-discord-alt about__icon"></i>
        <h3 className="about__title">LC & GFG</h3>
        <span className="about__subtitle">100+ DSA Problems</span>
      </div>
    </div>
  );
};

export default Info;
