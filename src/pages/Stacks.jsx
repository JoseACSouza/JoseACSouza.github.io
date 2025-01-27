import React from "react";
import docker from "../img/svg/docker.svg";
import kotlin from "../img/svg/kotlin.svg";
import laravel from "../img/svg/laravel.svg";
import mysql from "../img/svg/mysql.svg";
import python from "../img/svg/python.svg";
import react from "../img/svg/react.svg";
import typescript from "../img/svg/typescript.svg";
import { Link } from "react-router-dom";


function Stacks() {
  return (
    <div className="h-screen max-w-screen">
      <h1 className="text-4xl text-center py-4">Principais Stacks</h1>
      <div className="flex justify-around">
        <Link to='/projects/Docker'>
          <div className="flex-col flex items-center hover:p-1 hover:rounded-lg hover:bg-slate-200">
            <img src={docker} alt="docker" className="w-56 hover:w-64"/>
            <p>Docker</p>
          </div>
        </Link>
        <Link to='/projects/Kotlin'>
          <div className="flex-col flex items-center hover:p-1 hover:rounded-lg hover:bg-slate-200">
            <img src={kotlin} alt="kotlin" className="w-56 hover:w-64"/>
            <p>Kotlin</p>
          </div>
        </Link>
        <Link to='/projects/Python'>
          <div className="flex-col flex items-center hover:p-1 hover:rounded-lg hover:bg-slate-200">
            <img src={python} alt="python" className="w-56 hover:w-64"/>
            <p>Python</p>
          </div>
        </Link>
        <Link to='/projects/ReactJS'>
          <div className="flex-col flex items-center hover:p-1 hover:rounded-lg hover:bg-slate-200">
            <img src={react} alt="react" className="w-56 hover:w-64"/>
            <p>React</p>
          </div>
        </Link>
      </div>
      <div className="flex justify-between w-8/12 ml-56 mt-4">
        <Link to='/projects/Typescript'>
          <div className="flex-col flex items-center hover:p-1 hover:rounded-lg hover:bg-slate-200">
            <img src={typescript} alt="typescript" className="w-56 hover:w-64"/>
            <p>Typescript</p>
          </div>
        </Link>
        <Link to='/projects/MySQL'>
          <div className="flex-col flex items-center hover:p-1 hover:rounded-lg hover:bg-slate-200">
            <img src={mysql} alt="mysql" className="w-56 hover:w-64"/>
            <p>MySql</p>
          </div>
        </Link>
        <Link to='/projects/Laravel'>
          <div className="flex-col flex items-center hover:p-1 hover:rounded-lg hover:bg-slate-200">
            <img src={laravel} alt="laravel" className="w-56 hover:w-64"/>
            <p>Laravel</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Stacks;