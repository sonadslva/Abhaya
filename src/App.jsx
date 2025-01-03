import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css'
import Login from './components/login'
import Home from './components/Home'
import AboutUs from './components/About';
import Team from './components/Team';
import Treatment from './components/Treatments';
import Contact from './components/Contact';
import Facilities from './components/Facilities';
import Packages from './components/Packages';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
function App() {
  

  return (
    <>
      <Router>
        <Navbar/>
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/team' element={<Team/>}/>
        <Route path='/treatment' element={<Treatment/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/packages' element={<Packages/>}/>
        <Route path='/facilities' element={<Facilities/>}/>
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
