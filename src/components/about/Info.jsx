import React from "react";
import { useTranslation } from "react-i18next";

const Info = () => {
  const { t } = useTranslation();
  const data = [
    {
      num: 1,
      title: t("about.experience"),
      subtitle: t("about.experienceValue"),
      icon: <i className="bx bx-award about__icon"></i>,
    },
    {
      title: t("about.completed"),
      subtitle: t("about.completedValue"),
      icon: <i className="bx bx-briefcase-alt about__icon"></i>,
    },
    {
      title: t("about.support"),
      subtitle: t("about.supportValue"),
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
