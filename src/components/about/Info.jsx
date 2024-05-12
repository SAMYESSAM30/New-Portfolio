import React from "react";

const Info = () => {
  return (
    <div>
      <div className="about__info grid">
        {data.map((item, index) => (
          <div key={index} className="about__box">
            <div>{item.icon}</div>
            <h3 className="about__title">{item.title}</h3>
            <span className="about__subtitle">{item.subtitle}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Info;
let data = [
  {
    num: 1,
    title: "Experiennce",
    subtitle: "3 Years Working",
    icon: <i className="bx bx-award about__icon"></i>,
  },
  {
    title: "Completed",
    subtitle: "10 + Projects",
    icon: <i className="bx bx-briefcase-alt about__icon"></i>,
  },
  {
    title: "Support",
    subtitle: "Online 24/7",
    icon: <i className="bx bx-support about__icon"></i>,
  },
];
