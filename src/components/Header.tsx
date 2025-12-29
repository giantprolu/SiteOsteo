import { useState, useRef, useEffect } from 'react';
import { Menu, X, Calendar, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);

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
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

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

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/90 backdrop-blur-sm'}`}>
      <div className="container mx-auto px-4 py-4 md:py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-4 group">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <span className="text-white font-bold text-xl md:text-2xl">QP</span>
            </div>
            <div>
              <div className="text-xl md:text-2xl font-bold text-slate-900 leading-tight">Quentin Philipot</div>
              <div className="text-sm text-teal-600 font-medium hidden sm:block">Ostéopathe D.O.</div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
            {[
              { label: 'Accueil', href: '/', section: 'accueil', action: () => navigate('/') },
              { label: 'Motifs de consultation', href: '#services', section: 'service', action: handleServiceClick },
              { label: 'Avis', href: '#reviews', section: 'Avis', action: handleAvisClick },
              { label: 'Contact', href: '#contact', section: 'contacte', action: handleContactClick }
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => { e.preventDefault(); item.action(); }}
                className={`px-5 py-2.5 rounded-xl text-base font-medium transition-all duration-200 ${activeSection === item.section
                  ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-md'
                  : 'text-slate-700 hover:text-teal-600 hover:bg-teal-50'
                  }`}
              >
                {item.label}
              </a>
            ))}

            <a
              href="https://www.doctolib.fr/osteopathe/aigondigne/quentin-philipot"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-white px-6 py-3 rounded-xl font-medium text-base transition-all duration-300 shadow-lg shadow-teal-500/20 hover:shadow-teal-500/30 hover:-translate-y-0.5"
            >
              <Calendar className="w-5 h-5" />
              Prendre rendez-vous
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-3">
            <a
              href="https://www.doctolib.fr/osteopathe/aigondigne/quentin-philipot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-5 py-2.5 rounded-xl font-medium text-sm shadow-md"
            >
              <Calendar className="w-5 h-5" />
              <span className="hidden sm:inline">RDV</span>
            </a>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(!isOpen);
              }}
              className="p-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav ref={menuRef} className="lg:hidden mt-4 pb-4 border-t border-slate-100 pt-4">
            <div className="flex flex-col gap-2">
              {[
                { label: 'Accueil', href: '/', section: 'accueil', action: () => { navigate('/'); setIsOpen(false); } },
                { label: 'Motifs de consultation', href: '#services', section: 'service', action: handleServiceClick },
                { label: 'Avis', href: '#reviews', section: 'Avis', action: handleAvisClick },
                { label: 'Contact', href: '#contact', section: 'contacte', action: handleContactClick }
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); item.action(); }}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all ${activeSection === item.section
                    ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white'
                    : 'text-slate-700 hover:bg-slate-100'
                    }`}
                >
                  {item.label}
                  <ChevronRight className="w-4 h-4" />
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;