import React from "react";
import { useTranslation } from "react-i18next";

const WorksItems = ({ item }) => {
  const { t } = useTranslation();
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <a
        href={item.href}
        className="work__button"
        target="_blank"
        rel="noopener noreferrer"
      >
        {t("demo")} <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
    </div>
  );
};

export default WorksItems;
