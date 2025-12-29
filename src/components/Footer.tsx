import { Linkedin, Facebook, Instagram, MapPin, Phone, Mail, Calendar } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handlePhoneClick = () => {
    window.location.href = 'tel:0666211563';
  };

  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Section principale */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo et description */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">QP</span>
              </div>
              <div>
                <div className="text-lg font-bold text-white">Quentin Philipot</div>
                <div className="text-xs text-teal-400">Ostéopathe D.O.</div>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-md mb-6">
              L'ostéopathie offre une approche personnalisée et globale pour améliorer votre bien-être au quotidien.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/quentin-philipot-6692bb67/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-teal-500 rounded-xl flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://www.facebook.com/philipotosteo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-teal-500 rounded-xl flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.instagram.com/philipotosteo?igsh=dnl0M294ZGRocHU5"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-teal-500 rounded-xl flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Contact rapide */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://maps.app.goo.gl/bjS5DPHacV9mvPqb6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-400 hover:text-teal-400 transition-colors"
                >
                  <MapPin size={16} />
                  32 Rte Ricardo, 79370 Aigondigné
                </a>
              </li>
              <li>
                <button
                  onClick={handlePhoneClick}
                  className="flex items-center gap-2 text-slate-400 hover:text-teal-400 transition-colors"
                >
                  <Phone size={16} />
                  06 66 21 15 63
                </button>
              </li>
              <li>
                <a
                  href="mailto:philipot.osteo@gmail.com"
                  className="flex items-center gap-2 text-slate-400 hover:text-teal-400 transition-colors"
                >
                  <Mail size={16} />
                  philipot.osteo@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* RDV */}
          <div>
            <h4 className="text-white font-semibold mb-4">Prendre RDV</h4>
            <a
              href="https://www.doctolib.fr/osteopathe/aigondigne/quentin-philipot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-white px-5 py-3 rounded-xl font-medium text-sm transition-all duration-300 shadow-lg shadow-teal-500/20"
            >
              <Calendar size={16} />
              Doctolib
            </a>
            <p className="text-slate-500 text-sm mt-4">
              Pour toute information, n'hésitez pas à appeler directement le cabinet.
            </p>
          </div>
        </div>

        {/* Séparateur */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-slate-500">
              © {currentYear} Quentin Philipot. Tous droits réservés.
            </div>
            <div className="flex items-center gap-6 text-sm">
              <a href="/cookie-policy" className="text-slate-500 hover:text-teal-400 transition-colors">
                Politique de cookies
              </a>
              <a href="/privacy-policy" className="text-slate-500 hover:text-teal-400 transition-colors">
                Politique de confidentialité
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;