import React from "react";
import { useTranslation } from "react-i18next"; // Import the useTranslation hook

const Info = () => {
  const { t } = useTranslation(); // Initialize the translation function

  const data = [
    {
      num: 1,
      title: t("experience"), // Use translation here
      subtitle: t("yearsWorking"), // Use translation here
      icon: <i className="bx bx-award about__icon"></i>,
    },
    {
      title: t("completed"), // Use translation here
      subtitle: t("projectsInAbout"), // Use translation here
      icon: <i className="bx bx-briefcase-alt about__icon"></i>,
    },
    {
      title: t("support"), // Use translation here
      subtitle: t("online247"), // Use translation here
      icon: <i className="bx bx-support about__icon"></i>,
    },
  ];

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
