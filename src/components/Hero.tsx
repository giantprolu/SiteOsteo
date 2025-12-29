import { Phone, Calendar, ChevronRight, MapPin } from 'lucide-react';
import backgroundImage from '../Asset/IMG_0012.webp';

const Hero = () => {
  const handlePhoneClick = () => {
    window.location.href = 'tel:0666211563';
  };

  return (
    <section
      id="accueil"
      className="min-h-screen relative flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      {/* Overlay avec gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-blue-900/70 to-slate-900/80"></div>

      {/* Éléments décoratifs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float delay-500"></div>
      </div>

      {/* Grille décorative */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-3xl text-white">
          {/* Badge */}
          <div className="animate-fade-in-up">
            <span className="inline-flex items-center gap-2 bg-teal-500/20 backdrop-blur-sm text-teal-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-teal-500/30">
              Ostéopathe D.O.
            </span>
          </div>

          {/* Titre principal */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in-up delay-100">
            Quentin Philipot
            <span className="block mt-2 text-3xl md:text-4xl font-medium text-slate-300">
              Ostéopathe à Aigondigné
            </span>
          </h1>

          {/* Adresse */}
          <a
            href="https://maps.app.goo.gl/bjS5DPHacV9mvPqb6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-lg md:text-xl text-slate-300 hover:text-teal-400 transition-colors mb-10 animate-fade-in-up delay-200"
          >
            <MapPin className="w-5 h-5" />
            32 Rte Ricardo, 79370 Aigondigné
          </a>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
            <a
              href="https://www.doctolib.fr/osteopathe/aigondigne/quentin-philipot"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-lg shadow-teal-500/25 hover:-translate-y-1"
            >
              <Calendar className="w-5 h-5" />
              Prendre rendez-vous
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <button
              onClick={handlePhoneClick}
              className="inline-flex items-center justify-center gap-2 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 border border-white/20"
            >
              <Phone size={20} />
              06 66 21 15 63
            </button>
          </div>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H0Z" fill="white" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;