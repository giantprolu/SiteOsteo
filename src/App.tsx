import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Reviews from './components/Reviews';
import Douleurs from './Pages/Douleurs';
import Troubles from './Pages/Troubles';
import Perinatal from './Pages/Perinatal';
import Postures from './Pages/Posture';
import Trama from './Pages/Trama';
import Stress from './Pages/Stress';
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
          <Route path="/services/douleurs-musculo-squelettiques" element={<><Header /><Douleurs /></>} />
          <Route path="/services/troubles-digestifs" element={<><Header /><Troubles /></>} />
          <Route path="/services/suivi-perinatal" element={<><Header /><Perinatal /></>} />
          <Route path="/services/posture-et-ergonomie" element={<><Header /><Postures /></>} />
          <Route path="/services/stress-et-sommeil" element={<><Header /><Stress /></>} />
          <Route path="/services/traumatismes-sportifs" element={<><Header /><Trama /></>} />
          <Route path="/cookie-policy" element={<Cookie/>} />
          <Route path="/privacy-policy" element={<Privacy/>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;