import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Reviews from './components/Reviews';
import Douleurs from './Pages/Consultation';
import Troubles from './Pages/Honoraires';
import Perinatal from './Pages/Nourrisson';
import Postures from './Pages/AdoEnfant';
import Trama from './Pages/Sportif';
import Stress from './Pages/Femme';
import ScrollToTop from './components/ScoolToTop';
import Cookie from './Pages/CookiePage';
import Privacy from './Pages/PrivacyPolicy';
import CookieBanner from './components/CookieBanner'; // Ajout de l'importation
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/react';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <CookieBanner /> {/* Ajout du composant CookieBanner */}
      <Analytics />
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/services/consultation-osteopathie" element={<Douleurs />} />
          <Route path="/services/osteopathie-du-sportif" element={<Trama />} />
          <Route path="/services/osteopathie-du-nourrisson" element={<Perinatal />} />
          <Route path="/services/osteopathie-de-la-femme-enceinte" element={<Stress />} />
          <Route path="/services/osteopathie-de-l-enfant-et-de-l-adolescent" element={<Postures />} />
          <Route path="/services/honoraires" element={<Troubles />} />
          <Route path="/cookie-policy" element={<Cookie />} />
          <Route path="/privacy-policy" element={<Privacy />} />
        </Routes>
      </main>
      <SpeedInsights />
    </Router>
  );
}

export default App;