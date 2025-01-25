import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Projects from './pages/Projects.jsx';
import CompleteAbout from './pages/CompleteAbout.jsx';

function App() {
  return (
    <main className="font-main">
      <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route exact path="/projects/:filter?" element={ <Projects /> } />
        <Route exact path="/complete-about" element={ <CompleteAbout /> } />
      </Routes>
    </main>
  );
}

export default App;