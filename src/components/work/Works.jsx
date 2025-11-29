import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ProjectsData } from "./data";
import WorksItems from "./WorksItems";
const Works = () => {
  const { t } = useTranslation();
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);
  
  const projectsNav = [
    { name: "all", key: "portfolio.all" },
    { name: "vanillaJs", key: "portfolio.vanillaJs" },
    { name: "ReactJs", key: "portfolio.reactJs" },
    { name: "NextJs", key: "portfolio.nextJs" },
  ];
  
  useEffect(() => {
    if (item.name === "all") {
      setProjects(ProjectsData);
    } else {
      const newProjects = ProjectsData.filter((project) => {
        return project.category.toLowerCase() === item.name.toLowerCase();
      });
      setProjects(newProjects);
    }
  }, [item]);
  const handleClick = (navItem, index) => {
    setItem({ name: navItem.name });
    setActive(index);
  };
  return (
    <div>
      <div className="work__filter">
        {projectsNav.map((navItem, index) => {
          return (
            <span
              onClick={() => handleClick(navItem, index)}
              key={index}
              className={`${active === index ? "active-work" : ""} work__item`}
              data-filter={navItem.name}
            >
              {t(navItem.key)}
            </span>
          );
        })}
      </div>
      <div className="work__container container grid">
        {projects.map((item) => {
          return <WorksItems item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Works;
