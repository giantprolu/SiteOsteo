import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
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
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/react';
import Error from './Pages/NotFound';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Analytics />
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/motifs" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/avis" element={<Reviews />} />
          <Route path="/motifs/consultation-osteopathie" element={<Douleurs />} />
          <Route path="/motifs/osteopathie-du-sportif" element={<Trama />} />
          <Route path="/motifs/osteopathie-du-nourrisson" element={<Perinatal />} />
          <Route path="/motifs/osteopathie-de-la-femme-enceinte" element={<Stress />} />
          <Route path="/motifs/osteopathie-de-l-enfant-et-de-l-adolescent" element={<Postures />} />
          <Route path="/motifs/honoraires" element={<Troubles />} />
          <Route path="/cookie-policy" element={<Cookie />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <SpeedInsights />
    </Router>
  );
}

export default App;