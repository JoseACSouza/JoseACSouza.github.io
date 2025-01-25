import React from "react";
import FrontPage from './FrontPage.jsx';
import About from './About.jsx';
import Highlights from './Highlights.jsx';
import Formation from './Formation.jsx';
import Stacks from './Stacks.jsx';
import Contact from './Contact.jsx';


function Home() {
  return (
    <div>
      <FrontPage />
      <About />
      <Highlights />
      <Formation />
      <Stacks />
      <Contact /> 
    </div>
  );
}

export default Home;