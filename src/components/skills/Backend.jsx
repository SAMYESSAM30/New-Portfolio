import React from "react";
import { useTranslation } from "react-i18next";

export const Backend = () => {
  const { t } = useTranslation();

  const Data1 = [
    {
      icon: <i className="bx bx-badge-check"></i>,
      dataName: t("c"),
      level: t("basic"),
    },
    {
      icon: <i className="bx bx-badge-check"></i>,
      dataName: t("net"),
      level: t("basic"),
    },
    {
      icon: <i className="bx bx-badge-check"></i>,
      dataName: t("node-js"),
      level: t("basic"),
    },
    {
      icon: <i className="bx bx-badge-check"></i>,
      dataName: t("express-js"),
      level: t("basic"),
    },
  ];
  const Data2 = [
    {
      icon: <i className="bx bx-badge-check"></i>,
      dataName: t("sql"),
      level: t("basic"),
    },
    {
      icon: <i className="bx bx-badge-check"></i>,
      dataName: t("mysql"),
      level: t("intermediate"),
    },

    {
      icon: <i className="bx bx-badge-check"></i>,
      dataName: t("mango-db"),
      level: t("basic"),
    },
    {
      icon: <i className="bx bx-badge-check"></i>,
      dataName: t("firebase"),
      level: t("intermediate"),
    },
  ];
  return (
    <div className="skills__content">
      <h3 className="skills__title">{t("backend-developer")}</h3>
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
