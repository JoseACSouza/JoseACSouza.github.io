import React from "react";
import { professionalPerfil } from "../database/profile";
import meuHabitat from '../img/fotosPessoais/meuHabitat.png';
import meusPaisEEu from '../img/fotosPessoais/meusPaisEEu.jpg';
import minhasBisas from '../img/fotosPessoais/minhasBisas.png';
import githublogo from '../img/svg/github-logo.svg';
import linkedinlogo from '../img/svg/linkedin.svg';



function CompleteAbout() {
  return (
    <div className="max-w-screen">
      <h1 className="text-center text-2xl font-bold my-4">Sobre mim</h1>
      <p className="mx-12 text-md">{professionalPerfil.description}</p>
      <div className="flex space-x-2 justify-between my-4 items-baseline w-11/12 ml-12">
        <div>
          <img src={meuHabitat} alt="" className="w-80 rounded-lg border-black border-1"/>
          <p className="text-xs text-center">Eu em meu lugar de paz</p>
        </div>
        <div>
          <img src={meusPaisEEu} alt="" className="w-96 rounded-lg border-black border-1"/>
          <p className="text-xs text-center">Meus pais</p>
        </div>
        <div>
          <img src={minhasBisas} alt="" className="w-96 rounded-lg border-black border-1"/>
          <p className="text-xs text-center">Minhas bisas</p>
        </div>
        <div className="flex flex-col self-start space-y-2">
            <a
              target="_blank"
              href="https://github.com/JoseACSouza"
              rel="noreferrer"
            >
              <img src={githublogo} alt="github logo" className="w-8"/>
            </a>
            <a 
              target="_blank" 
              href="https://www.linkedin.com/in/joseacs/" 
              rel="noreferrer" 
            >
              <img src={linkedinlogo} alt="linkedin logo" className="w-8"/>
            </a>
        </div>
      </div>
    </div>
  );
}

export default CompleteAbout;