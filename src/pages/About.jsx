import React from "react";
import { Link } from "react-router-dom";
import bgNet from '../img/svg/bgNet.svg'
import profileImage from '../img/profileImage.png';

export default function About() {
  return(
    <div className="flex min-h-screen flex-wrap items-center justify-center h-screen max-w-screen">
      <div className="absolute left-12 mb-52 w-96 -z-10">
        <img alt="web-background" src={bgNet} />
      </div>
      <div className="z-10 flex justify-around items-center w-screen flex-wrap">
          <div>
            <p className="text-3xl font-bold">
            Eu sou José Alexandre <br />
            <span className="text-main-orange">
              {'desenvolvedor '}
            </span> 
            web full-stack <br />
            apaixonado por inovações <br />
            tecnológicas e rpg de mesa... <br />
            </p>
            <Link to="/complete-about" className="text-main-blue font-bold">
              saiba mais
            </Link>
          </div>
          <img alt="profile-photo" src={profileImage} width="400vh"/>
      </div>
    </div>
  )
}