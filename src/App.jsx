import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './screens/Home';
import MEPPage from './screens/MEP';
import Footer from './components/Footer';


const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/mep" element={<MEPPage />} />
          {/* Add more routes as needed */}
          <Route path="/about" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl">About Page Coming Soon</h1></div>} />
          <Route path="/projects" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl">Projects Page Coming Soon</h1></div>} />
          <Route path="/contact" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl">Contact Page Coming Soon</h1></div>} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;