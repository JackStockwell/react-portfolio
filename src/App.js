// Imports
import React from "react";
import Navbar from "./components/Navbar/index";
import Home from "./components/pages/Home"
import Projects from "./components/pages/Projects";
import Socials from "./components/pages/Socials";
import Footer from "./components/Footer/index"

// React DOM
import { Route, Routes } from 'react-router-dom';

// FA Icons hooks, imports the all faIcons used.
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHouse, faHeart, faCircleUser, faBars, faFile, faEnvelope, faX } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

// Adds them to the FA Hook libray, allowing to it be imported across the project and keeps the state.
library.add( faHouse, faHeart, faCircleUser, faBars, faGithub, faLinkedin, faFile, faEnvelope, faX)

// App render.
function App() {
  return (
    <>
      <Navbar />
        <Routes>
          {/* ROUTES */}
          <Route path='/' element={ <Home /> }/>
          <Route path='/projects' element={ <Projects /> }/>
          <Route path='/socials' element={ <Socials /> }/>
        </Routes>
      <Footer />
    </>
  );
}

export default App;
