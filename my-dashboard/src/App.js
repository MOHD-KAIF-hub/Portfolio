import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';


const App = () => {
  return (
    <div className="bg-slate-100 flex flex-col w-full ">
    <Router>
  <Navbar/>
  </Router>
  <Home/>
  <About/>
  <Skills/>
  <Work/>
  <Contact/>


</div>
  );
};

export default App;
