import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './screens/Home';
import MEPPage from './screens/MEP';
import EarthworkPage from './screens/Earthwork';
import PaintingPage from './screens/painting';
import ConcretePage from './screens/concrete';
import InsulationPage from './screens/insulation';
import InteriorFinishesPage from './screens/interior-finishes';
import DemolitionPage from './screens/demolition';
import MasonryPage from './screens/masonry';
import FinishesPage from './screens/finishes';
import FurnishingPage from './screens/furnishing';
import RoofingPage from './screens/roofing';
import StructuralSteelPage from './screens/structure-steel'; 
import FramingPage from './screens/framing'; 
import DrywallPage from './screens/drywall';
import LandscapePage from './screens/landscaping';
import FlooringPage from './screens/flooring'; 
import PBE from './screens/PBE.jsx';
import CBE from './screens/CBE.jsx';
import RBE from './screens/RBE.jsx';
import About from './screens/About.jsx';
import ManufacturersPage from './screens/Manufacturers.jsx';
import Contact from './screens/Contact.jsx';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/mep" element={<MEPPage />} />
          <Route path="/earthwork" element={<EarthworkPage />} />
          <Route path="/concrete" element={<ConcretePage />} />
          <Route path="/framing" element={<FramingPage />} />
          <Route path="/flooring" element={<FlooringPage />} />
          <Route path="/masonry" element={<MasonryPage />} />
          <Route path="/interior-finishes" element={<InteriorFinishesPage />} />
          <Route path="/demolition" element={<DemolitionPage />} />
          <Route path="/furnishing" element={<FurnishingPage />} />
          <Route path="/roofing" element={<RoofingPage />} />
          <Route path="/insulation" element={<InsulationPage />} />
          <Route path="/finishes" element={<FinishesPage />} />
          <Route path="/structure-steel" element={<StructuralSteelPage />} /> 
          <Route path="/painting" element={<PaintingPage />} />
          <Route path="/landscaping" element={<LandscapePage />} />
          <Route path="/drywall" element={<DrywallPage />} />
          <Route path="/public-bids" element={<PBE />} />
          <Route path="/commercial-bids" element={<CBE />} />
          <Route path="/residential-bids" element={<RBE />} />
          <Route path="/manufacturers" element={<ManufacturersPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={
            <div className="min-h-screen flex items-center justify-center">
              <h1 className="text-4xl">Projects Page Coming Soon</h1>
            </div>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;