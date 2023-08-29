import React from "react";
import Navbar from "./components/Navbar/index";
import Home from "./components/pages/Home"
import Projects from "./components/pages/Projects";
import Socials from "./components/pages/Socials";
import Footer from "./components/Footer/index"

import { Route, Routes } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faHouse, faHeart, faCircleUser, faBars, faFile, faEnvelope, faX } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


library.add( faHouse, faHeart, faCircleUser, faBars, faGithub, faLinkedin, faFile, faEnvelope, faX)

function App() {
  return (
    <>
      <Navbar />
        <Routes>
          <Route path='/' element={ <Home /> }/>
          <Route path='/projects' element={ <Projects /> }/>
          <Route path='/socials' element={ <Socials /> }/>
        </Routes>
      <Footer />
    </>
  );
}

export default App;
