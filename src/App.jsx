// import React from 'react'
// import Navbar from './Components/Navbar/Navbar'
// import About from './Components/About/About'
// import Skills from './Components/Skills/Skills'
// import Experience from './Components/Experience/Experience'
// import Projects from './Components/Projects/Projects'
// import Contact from './Components/Contact/Contact'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// const App = () => {
//   return (
//     <div>
//      <Navbar/>
//      <About/>
//      <Skills/>
//      <Experience/>
//      <Projects/> 
//      <Contact/>  
//      </div>
//   )
// }

// export default App


import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Experience from './Components/Experience/Experience';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import './App.css'

const App = () => {
  return (
    <div>
      <Navbar />
      {/* Sections with IDs for smooth scrolling */}
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
