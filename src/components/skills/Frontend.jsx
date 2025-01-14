import React from "react";

const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend developer</h3>
      <div className="skills__box">
        <div className="skills__group">
          {Data1.map((item, index) => {
            return (
              <div className="skills__data" key={index}>
                {item.icon}
                <div className="skills__names">
                  <h3 className="skills__name">
                    {item.dataName}
                    <span className="skills__level">{item.level}</span>
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

        <div className="skills__group">
          {Data2.map((item, index) => {
            return (
              <div className="skills__data" key={index}>
                {item.icon}
                <div className="skills__names">
                  <h3 className="skills__name">
                    {item.dataName}
                    <span className="skills__level">{item.level}</span>
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Frontend;
const Data1 = [
  {
    icon: <i className="bx bx-badge-check"></i>,
    dataName: "HTML",
    level: "Basic",
  },
  {
    icon: <i className="bx bx-badge-check"></i>,
    dataName: "CSS",
    level: "Advanced",
  },
  {
    icon: <i className="bx bx-badge-check"></i>,
    dataName: "Bootstrap",
    level: "Intermediate",
  },
  {
    icon: <i className="bx bx-badge-check"></i>,
    dataName: "tailwind CSS",
    level: "Intermediate",
  },
  {
    icon: <i className="bx bx-badge-check"></i>,
    dataName: "MUI CSS",
    level: "Intermediate",
  },
];
const Data2 = [
  {
    icon: <i className="bx bx-badge-check"></i>,
    dataName: "JavaScript",
    level: "Intermediate",
  },
  {
    icon: <i className="bx bx-badge-check"></i>,
    dataName: "React",
    level: "Intermediate",
  },
  {
    icon: <i className="bx bx-badge-check"></i>,
    dataName: "React Native",
    level: "Intermediate",
  },
  {
    icon: <i className="bx bx-badge-check"></i>,
    dataName: "Next Js",
    level: "Intermediate",
  },
  {
    icon: <i className="bx bx-badge-check"></i>,
    dataName: "Redux",
    level: "Intermediate",
  },
];
