import React, { useEffect, useState } from "react";
import { ProjectsData } from "./data";
import { projectsNav } from "./data";
import WorksItems from "./WorksItems";
const Works = () => {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);
  useEffect(() => {
    if (item.name === "all") {
      setProjects(ProjectsData);
    } else {
      const newProjects = ProjectsData.filter((project) => {
        return project.category.toLocaleLowerCase() === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);
  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLocaleLowerCase() });
    setActive(index);
  };
  return (
    <div>
      <div className="work__filter">
        {projectsNav.map((item, index) => {
          return (
            <span
              onClick={(e) => handleClick(e, index)}
              key={index}
              className={`${active === index ? "active-work" : ""} work__item`}
              data-filter={item.name}
            >
              {item.name}
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
