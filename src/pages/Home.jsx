import React from "react";
import FrontPage from './FrontPage.jsx';
import About from './About.jsx';
import Highlights from './Highlights.jsx';
import Formation from './Formation.jsx';
import Stacks from './Stacks.jsx';
import Contact from './Contact.jsx';
import loading from '../img/gif/loading waiting GIF.gif';


function Home() {

  return (
    <div className="">
      <div className="lg:block max-md:hidden">
        <FrontPage />
        <About />
        <Highlights />
        <Formation />
        <Stacks />
        <Contact /> 
      </div>
      <div className="lg:hidden flex flex-col h-screen justify-center items-center space-y-4">
        <h1 className="text-xl text-main-orange text-center p-2">
           Versão Mobile Em Contrução...
        </h1>
        <img src={loading} alt="loading" />
      </div>
    </div>
  );
}

export default Home;