import React from "react";
import emaillogo from "../img/svg/email.svg";
import linkedinlogo from "../img/svg/linkedin.svg";
import githublogo from "../img/svg/github-logo.svg";
import girlpc from "../img/svg/girl-pc.svg";
import { professionalPerfil } from "../database/profile";
import upArrow from '../img/svg/up-arrow.svg';


function Contact() {
  const { contact } = professionalPerfil;
  const scrollToTop = () => {
    window.scrollTo({behavior:"smooth", top: 0});
  };

  return (
    <div className="h-screen pb-8 pt-8 px-12 max-w-screen" id="contact">
      <h1 className="text-3xl max-w-72">Let's Create Together</h1>
      <div className="flex justify-between h-5/6 py-4 items-end">
        <img src={girlpc} alt="girl on pc" className="w-96 pb-24 ml-24"/>
        <div className="flex flex-col">
          <div className="inline-flex justify-end">
            <div
              className="flex flex-col justify-end items-end w-full"
            >
              <img
                src={emaillogo}
                alt="email logo"
                className="w-10 p-1 bg-white rounded-t-md"/>
              <p>{contact.email}</p>
            </div>
          </div>
          <div className="inline-flex mt-2">
            <a
              target="_blank"
              href="https://github.com/JoseACSouza"
              rel="noreferrer"
              className="flex flex-col justify-end items-end w-full hover:invert"
            >
              <img
                src={githublogo}
                alt="github logo"
                className="w-10 p-1 bg-white rounded-t-md"/>
              <p
                className="text-end py-0.5 px-1 bg-white rounded-b-md rounded-l-md">
                  {contact.github}
                </p>
            </a>
          </div>
          <div className="inline-flex mt-2">
            <a 
              target="_blank" 
              href="https://www.linkedin.com/in/joseacs/" 
              rel="noreferrer" 
              className="flex flex-col justify-end items-end w-full hover:invert"
            >
              <img
                src={linkedinlogo}
                alt="linkedin logo"
                className="w-10 p-1 bg-white rounded-t-md"/>
              <p className="py-0.5 px-1 bg-white rounded-b-md rounded-l-md">{contact.linkedin}</p>
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button onClick={scrollToTop} className="p-1 bg-white hover:invert w-12 rounded-xl">
          <img
            src={upArrow}
            alt="up arrow"
          />
        </button>
      </div>
    </div>
   );
}

export default Contact;