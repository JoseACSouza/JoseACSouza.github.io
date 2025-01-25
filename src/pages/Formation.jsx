import React from "react";
import { professionalPerfil } from "../database/profile.js";
import stairs from "../img/stairs.png";
import stickman from "../img/gif/stickman-stick.gif";

function Formation() {
  return (
    <div className="h-screen max-w-screen pt-4">
      <h1 className="font-extrabold text-4xl text-center"> Formação </h1>
      <div className="inline-flex justify-center items-center w-full h-5/6 p-14">
        <div className="flex flex-col justify-between h-96 items-end mb-2">
          <ul className="list-disc">
            {
              professionalPerfil.formations.map((formation, index) => {
                const { name, period } = formation;
                return (
                  <li key={index}>
                    {name} em {period.length > 1 ? `${period[0]}~${period[1]}`:period[0]}
                  </li>
                )
              })
            }
          </ul>
          <img alt="homem palito se preparando para subir a escada" src={stickman} className="w-96 mb-1"/>
        </div>
        <div className="">
          <img alt="stairs" src={stairs} className="-z-10"/>
        </div>
      </div>
    </div>
  )
}

export default Formation;