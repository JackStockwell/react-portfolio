import React from "react";
import Navbar from "./components/Navbar/index";
import Home from "./components/pages/Home"
import Projects from "./components/pages/Projects";
import Socials from "./components/pages/Socials";

import { Route, Routes } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faHouse, faHeart, faCircleUser, faBars } from '@fortawesome/free-solid-svg-icons'


library.add(faHouse, faHeart, faCircleUser, faBars)

function App() {
  return (
    <>
      <Navbar />
      <Routes>
         <Route path='/' element={ <Home /> }/>
         <Route path='/projects' element={ <Projects /> }/>
         <Route path='/socials' element={ <Socials /> }/>
      </Routes>      
    </>
  );
}

export default App;
