import React from "react";
import { useTranslation } from "react-i18next";

const Frontend = () => {
  const { t } = useTranslation();
  const Data1 = [
    {
      icon: <i className="bx bx-badge-check"></i>,
      dataName: t("html"),
      level: t("basic"),
    },
    {
      icon: <i className="bx bx-badge-check"></i>,
      dataName: t("css"),
      level: t("advanced"),
    },
    {
      icon: <i className="bx bx-badge-check"></i>,
      dataName: t("bootstrap"),
      level: t("intermediate"),
    },
    {
      icon: <i className="bx bx-badge-check"></i>,
      dataName: t("tailwind-css"),
      level: t("intermediate"),
    },
    {
      icon: <i className="bx bx-badge-check"></i>,
      dataName: t("mui-css"),
      level: t("intermediate"),
    },
  ];
  const Data2 = [
    {
      icon: <i className="bx bx-badge-check"></i>,
      dataName: t("javascript"),
      level: t("intermediate"),
    },
    {
      icon: <i className="bx bx-badge-check"></i>,
      dataName: t("react"),
      level: t("intermediate"),
    },
    {
      icon: <i className="bx bx-badge-check"></i>,
      dataName: t("react-native"),
      level: t("intermediate"),
    },
    {
      icon: <i className="bx bx-badge-check"></i>,
      dataName: t("next-js"),
      level: t("intermediate"),
    },
    {
      icon: <i className="bx bx-badge-check"></i>,
      dataName: t("redux"),
      level: t("intermediate"),
    },
  ];
  return (
    <div className="skills__content">
      <h3 className="skills__title">{t("frontend-developer")}</h3>
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
