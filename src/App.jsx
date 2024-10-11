import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlosemNavigation from './GlosemComponents/GlosemNavigation/GlosemNavigation';
import GlosemHome from './GlosemComponents/GlosemHome/GlosemHome';
import GlosemFooter from './GlosemComponents/GlosemFooter/GlosemFooter';
import GlosemAbout from './GlosemComponents/GlosemAbout/GlosemAbout';
import GlosemProducts from './GlosemComponents/GlosemProducts/GlosemProducts';
function App() {
  return (
    <>
      <Router>
        <GlosemNavigation />
        <Routes>
          <Route path="/" element={<GlosemHome />} />
          <Route path="/glosemAbout" element={<GlosemAbout />} />
          <Route path="/glosemProducts" element={<GlosemProducts />} />
        </Routes>
        <GlosemFooter />
      </Router>
    </>
  );
}

export default App;
