import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import AboutUs from './components/About';
import UploadVideo from './components/UploadVideo';
import Treatment from './components/Treatments';
import Contact from './components/Contact';
import Facilities from './components/Facilities';
import Packages from './components/Packages';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Testimonial from "./components/AddTestimonial";
import Admin from './components/Admin';

function App() {
  return (
    <Router>
      <AppWithRouting />
    </Router>
  );
}

const AppWithRouting = () => {
  const location = useLocation();

  return (
    <>
      {/* Only render Navbar and Footer if the current route is not '/admin' or '/testimonial' */}
      {location.pathname !== '/admin' && location.pathname !== '/testimonial' && location.pathname!=='/login' && location.pathname!=='/UploadVideo' && <Navbar />}
      
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Home />} />
        <Route path='/aboutus' element={<AboutUs />} />
       
        <Route path='/treatment' element={<Treatment />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/packages' element={<Packages />} />
        <Route path='/facilities' element={<Facilities />} />
        <Route path='/testimonial' element={<Testimonial />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/UploadVideo' element={<UploadVideo/>}/>
      </Routes>
      
      {location.pathname !== '/admin' && location.pathname !== '/testimonial' && location.pathname!=='/login' && location.pathname!=='/UploadVideo' && <Footer />}
    </>
  );
}

export default App;
