import React from "react";

export const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend developer</h3>
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
const Data1 = [
  {
    icon: <i className="bx bx-badge-check"></i>,
    dataName: "C#",
    level: "Basic",
  },
  {
    icon: <i className="bx bx-badge-check"></i>,
    dataName: ".Net",
    level: "Basic",
  },
  {
    icon: <i className="bx bx-badge-check"></i>,
    dataName: "Node Js",
    level: "Basic",
  },
  {
    icon: <i className="bx bx-badge-check"></i>,
    dataName: "Express Js",
    level: "Basic",
  },
];
const Data2 = [
  {
    icon: <i className="bx bx-badge-check"></i>,
    dataName: "SQL",
    level: "Basic",
  },
  {
    icon: <i className="bx bx-badge-check"></i>,
    dataName: "MySQL",
    level: "Intermediate",
  },

  {
    icon: <i className="bx bx-badge-check"></i>,
    dataName: "Mango DB",
    level: "Basic",
  },
  {
    icon: <i className="bx bx-badge-check"></i>,
    dataName: "Firebase",
    level: "Intermediate",
  },
];
