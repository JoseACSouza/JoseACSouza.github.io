import React from "react";
import ProjectCard from "../components/ProjectCard";
import { Link } from "react-router-dom";
import { projects } from "../database/projects";

function Highlights() {

  const mainProjects = projects.filter((project)=> project.main);
  

  return (
    <div className="h-screen max-w-screen p-4">
      <p className="text-center font-extrabold text-5xl">Destaques</p>
      <div className="flex justify-between inset-1 h-5/6 mt-6 px-12">
        <div className="flex-col flex justify-between w-7/12 ml-2">
          <div>
            <ProjectCard project={mainProjects[0]}/>
          </div>
          <ProjectCard project={mainProjects[1]}/>
        </div>
        <div className="flex-col flex items-end justify-around mr-2">
          <ProjectCard project={mainProjects[2]}/>
          <Link 
            to="/projects"
            className="text-main-blue font-bold text-xl hover:text-blue-800 hover:text-2xl hover:font-extrabold">
            Ver todos {'>>>'}
          </Link>
        </div>
      </div>

    </div>
  );
}

export default Highlights;