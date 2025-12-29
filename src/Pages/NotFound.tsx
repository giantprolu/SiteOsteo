import { useNavigate } from 'react-router-dom';
import { Home, ArrowLeft, Calendar, Phone, HelpCircle } from 'lucide-react';
import { Helmet } from 'react-helmet';
import Footer from '../components/Footer';

const NotFound = () => {
  const navigate = useNavigate();

  const handlePhoneClick = () => {
    window.location.href = 'tel:0666211563';
  };

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col">
      <Helmet>
        <title>Page non trouvée - 404</title>
        <link rel="canonical" href="https://www.philipot-osteo-aigondigne-niort.fr/404" />
      </Helmet>

      {/* Main Content */}
      <div className="flex-1 relative flex items-center justify-center overflow-hidden min-h-[80vh]">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/20 to-transparent"></div>

          {/* Animated Blobs */}
          <div className="absolute top-20 left-20 w-72 h-72 bg-teal-500/10 rounded-full blur-[100px] animate-float"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] animate-float delay-1000"></div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20"></div>
        </div>

        <div className="relative z-10 w-full max-w-4xl px-4 py-12 text-center">
          {/* 404 Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 mb-8 backdrop-blur-sm animate-fade-in-up">
            <HelpCircle className="w-4 h-4" />
            <span className="text-sm font-medium">Erreur 404</span>
          </div>

          {/* Main Title */}
          <h1 className="text-6xl md:text-9xl font-bold text-white mb-6 tracking-tight animate-fade-in-up delay-100">
            Oups !
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
            La page que vous recherchez semble ne pas exister.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
            <button
              onClick={() => navigate(-1)}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-all duration-300 group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span>Retour</span>
            </button>

            <button
              onClick={() => navigate('/')}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-white shadow-lg shadow-teal-500/25 transition-all duration-300 hover:-translate-y-1"
            >
              <Home className="w-5 h-5" />
              <span>Retour à l'accueil</span>
            </button>
          </div>

          {/* Help Card */}
          <div className="mt-16 max-w-2xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 animate-fade-in-up delay-500">
            <h3 className="text-xl font-semibold text-white mb-6">Besoin d'un rendez-vous ?</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.doctolib.fr/osteopathe/aigondigne/quentin-philipot"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-6 py-3 rounded-xl bg-white text-slate-900 hover:bg-slate-50 transition-colors font-medium"
              >
                <Calendar className="w-5 h-5 text-teal-600" />
                Doctolib
              </a>
              <button
                onClick={handlePhoneClick}
                className="flex items-center justify-center gap-3 px-6 py-3 rounded-xl bg-teal-500/10 text-teal-300 border border-teal-500/20 hover:bg-teal-500/20 transition-colors font-medium"
              >
                <Phone className="w-5 h-5" />
                06 66 21 15 63
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;