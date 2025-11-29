import React from "react";
import { useTranslation } from "react-i18next";

const WorksItems = ({ item }) => {
  const { t } = useTranslation();
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt={t(item.title)} className="work__img" />
      <h3 className="work__title">{t(item.title)}</h3>
      {item.description && (
        <p className="work__description">{t(item.description)}</p>
      )}
      {item.technologies && (
        <div className="work__technologies">
          {item.technologies.map((tech, index) => (
            <span key={index} className="work__tech-tag">{tech}</span>
          ))}
        </div>
      )}
      <a
        href={item.href}
        className="work__button"
        target="_blank"
        rel="noopener noreferrer"
      >
        {t("portfolio.demo")} <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
    </div>
  );
};

export default WorksItems;
