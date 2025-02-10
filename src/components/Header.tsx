import React, { useState } from 'react';
import { Menu, Phone, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

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
            <a href="#accueil" className="text-blue-900 hover:text-blue-700">Accueil</a>
            <a href="#services" className="text-blue-900 hover:text-blue-700">Services</a>
            <a href="#contact" className="text-blue-900 hover:text-blue-700">Contact</a>
            <a
              href="https://www.doctolib.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Prendre rendez-vous
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-blue-900 p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a
                href="#accueil"
                className="text-blue-900 hover:text-blue-700 py-2"
                onClick={toggleMenu}
              >
                Accueil
              </a>
              <a
                href="#services"
                className="text-blue-900 hover:text-blue-700 py-2"
                onClick={toggleMenu}
              >
                Services
              </a>
              <a
                href="#contact"
                className="text-blue-900 hover:text-blue-700 py-2"
                onClick={toggleMenu}
              >
                Contact
              </a>
              <a
                href="https://www.doctolib.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-center"
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