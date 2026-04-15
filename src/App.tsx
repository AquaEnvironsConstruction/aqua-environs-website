import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import OurStory from './pages/OurStory';
import Services from './pages/Services';
import Priorities from './pages/Priorities';
import Portfolio from './pages/Portfolio';
import Partners from './pages/Partners';
import Contact from './pages/Contact';
import RockArtistryConcepts from './pages/RockArtistryConcepts';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/services" element={<Services />} />
            <Route path="/priorities" element={<Priorities />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/rock-artistry-concepts" element={<RockArtistryConcepts />} />
            {/* Fallback for "For Sale" or other links */}
            <Route path="/for-sale" element={<div className="min-h-[60vh] flex items-center justify-center"><h1 className="text-4xl md:text-6xl font-serif text-forest">Coming Soon</h1></div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
