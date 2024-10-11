import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlosemNavigation from './GlosemComponents/GlosemNavigation/GlosemNavigation';
import GlosemHome from './GlosemComponents/GlosemHome/GlosemHome';
import GlosemFooter from './GlosemComponents/GlosemFooter/GlosemFooter';
import GlosemAbout from './GlosemComponents/GlosemAbout/GlosemAbout';

function App() {
  return (
    <>
      <Router>
        <GlosemNavigation />
        <Routes>
          <Route path="/" element={<GlosemHome />} /> {/* Home route */}
          <Route path="/glosemAbout" element={<GlosemAbout />} /> {/* Home route */}
        </Routes>
        <GlosemFooter />
      </Router>
    </>
  );
}

export default App;
