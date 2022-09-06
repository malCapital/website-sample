import React from 'react';
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Navbar from './Navbar';
import Footer from './Footer';
const App = () => {
  return (
    <div className="page-container">
      <div className="content-wrap">
   <Navbar/>
    <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/about" element={<About/>}/>
    <Route exact path="/service" element={<Service/>}/>
    <Route exact path="/contact" element={<Contact/>}/>
    <Route path="/" element={<Navigate replace to="/" />}/>
    </Routes>
    <Footer/>
    </div>
    </div>
  )
}

export default App

