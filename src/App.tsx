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

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/services/douleurs-musculo-squelettiques" element={<Douleurs />} />
          <Route path="/services/troubles-digestifs" element={<Troubles />} />
          <Route path="/services/suivi-perinatal" element={<Perinatal />} />
          <Route path="/services/posture-et-ergonomie" element={<Postures />} />
          <Route path="/services/stress-et-sommeil" element={<Stress />} />
          <Route path="/services/traumatismes-sportifs" element={<Trama />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;