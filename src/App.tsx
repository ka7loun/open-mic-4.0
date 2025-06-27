import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import AboutEvent from './pages/AboutEvent';
import Program from './pages/Program';
import Registration from './pages/Registration';
import Speakers from './pages/Speakers';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-secondary-50 to-secondary-100">
        <ScrollToTop />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/about-event" element={<AboutEvent />} />
            <Route path="/program" element={<Program />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/speakers" element={<Speakers />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <BackToTop />
      </div>
    </Router>
  );
}

export default App;