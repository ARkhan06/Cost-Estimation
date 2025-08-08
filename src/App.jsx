import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './screens/Home';
import MEPPage from './screens/MEP';
import PBE from './screens/PBE.jsx'
import CBE from './screens/CBE.jsx'
import RBE from './screens/RBE.jsx'
import About from './screens/About.jsx';
import ManufacturersPage from './screens/Manufacturers.jsx';
import './App.css';


import Footer from './components/Footer';
import Contact from './screens/Contact.jsx';
import AboutCompanyPage from './screens/About.jsx';


const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/mep" element={<MEPPage />} />
          <Route path="/public-bids" element={<PBE />} />
          <Route path="/commercial-bids" element={<CBE />} />
          <Route path="/residential-bids" element={<RBE />} />
          <Route path="/manufacturers" element={<ManufacturersPage />} />

          {/* Add more routes as needed */}
          <Route path="/about" element={<About/>} />
          <Route path="/projects" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl">Projects Page Coming Soon</h1></div>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;