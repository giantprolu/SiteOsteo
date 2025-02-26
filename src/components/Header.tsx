import { useState, useRef, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = '';
      
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleContactClick = () => {
    setIsOpen(false);
    navigate('/#contact');
    setTimeout(() => {
      const contactElement = document.getElementById('contacte');
      if (contactElement) {
        contactElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleServiceClick = () => {
    setIsOpen(false);
    navigate('/#services');
    setTimeout(() => {
      const serviceElement = document.getElementById('service');
      if (serviceElement) {
        serviceElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleAvisClick = () => {
    setIsOpen(false);
    navigate('/#reviews');
    setTimeout(() => {
      const avisElement = document.getElementById('Avis');
      if (avisElement) {
        avisElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const isActive = (hash: string) => {
    return location.hash === hash;
  };

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-semibold text-blue-900">
            Quentin Philipot
            <span className="hidden md:inline text-sm ml-2 text-blue-700">Ostéopathe D.O.</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="/"
              className={`text-blue-900 hover:text-blue-700 ${activeSection === 'accueil' ? 'bg-blue-100 rounded-md px-3 py-2 hover:text-blue-700' : ''}`}
            >
              Accueil
            </a>
            <a
              href="#services"
              className={`text-blue-900 hover:text-blue-700 ${activeSection === 'service' ? 'bg-blue-100 rounded-md px-3 py-2 hover:text-blue-700' : ''}`}
              onClick={handleServiceClick}
            >
              Motifs de consultation
            </a>
            <a
              href="#reviews"
              className={`text-blue-900 hover:text-blue-700 ${activeSection === 'Avis' ? 'bg-blue-100 rounded-md px-3 py-2 hover:text-blue-700' : ''}`}
              onClick={handleAvisClick}
            >
              Avis
            </a>
            <a
              href="#contact"
              className={`text-blue-900 hover:text-blue-700 ${activeSection === 'contacte' ? 'bg-blue-100 rounded-md px-3 py-2 hover:text-blue-700' : ''}`}
              onClick={handleContactClick}
            >
              Contact
            </a>
            <a
              href="https://www.doctolib.fr/osteopathe/aigondigne/quentin-philipot"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Prendre rendez-vous
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-blue-900 p-2" aria-label="Toggle menu">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav ref={menuRef} className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a
                href="#accueil"
                className={`text-blue-900 hover:text-blue-700 py-2 ${isActive('#accueil') ? 'bg-blue-100 rounded-md px-3 py-2' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                Accueil
              </a>
              <a
                href="#services"
                className={`text-blue-900 hover:text-blue-700 py-2 ${isActive('#services') ? 'bg-blue-100 rounded-md px-3 py-2' : ''}`}
                onClick={handleServiceClick}
              >
                Motifs de consultation
              </a>
              <a
                href="#contact"
                className={`text-blue-900 hover:text-blue-700 py-2 ${isActive('#contact') ? 'bg-blue-100 rounded-md px-3 py-2' : ''}`}
                onClick={handleContactClick}
              >
                Contact
              </a>
              <a
                href="#reviews"
                className={`text-blue-900 hover:text-blue-700 py-2 ${isActive('#reviews') ? 'bg-blue-100 rounded-md px-3 py-2' : ''}`}
                onClick={handleAvisClick}
              >
                Avis
              </a>
              <a
                href="https://www.doctolib.fr/osteopathe/aigondigne/quentin-philipot"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-center"
                onClick={() => setIsOpen(false)}
              >
                Prendre rendez-vous
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;