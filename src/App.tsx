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
import Postures from './Pages/Ado';
import Trama from './Pages/Sportif';
import Stress from './Pages/Femme';
import ScrollToTop from './components/ScoolToTop';
import Cookie from './Pages/CookiePage';
import Privacy from './Pages/PrivacyPolicy';

function App() {
  return (
    <Router>
      <ScrollToTop />

      <main>
        <Routes>
          <Route path="/" element={<><Header /><Home /></>} />
          <Route path="/about" element={<><Header /><About /></>} />
          <Route path="/services" element={<><Header /><Services /></>} />
          <Route path="/contact" element={<><Header /><Contact /></>} />
          <Route path="/reviews" element={<><Header /><Reviews /></>} />
          <Route path="/services/consultation-osteopathie" element={<><Header /><Douleurs /></>} />
          <Route path="/services/osteopathie-du-sportif" element={<><Header /><Trama /></>} />
          <Route path="/services/osteopathie-du-nourrisson" element={<><Header /><Perinatal /></>} />
          <Route path="/services/osteopathie-de-la-femme-enceinte" element={<><Header /><Stress /></>} />
          <Route path="/services/osteopathie-de-l-enfant-et-de-l-adolescent" element={<><Header /><Postures /></>} />
          <Route path="/services/honoraires" element={<><Header /><Troubles /></>} />
          <Route path="/cookie-policy" element={<Cookie/>} />
          <Route path="/privacy-policy" element={<Privacy/>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;