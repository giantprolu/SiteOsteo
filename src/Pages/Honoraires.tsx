import { Helmet } from 'react-helmet';
import { Phone, CreditCard, Euro, FileText, Check, Calendar, Clock, MapPin, ChevronRight } from 'lucide-react';
import { Baby0203m, Pregnant, Running, ChildProgram, Doctor } from 'healthicons-react';
import Footer from '../components/Footer';
import OneIcon from '../components/icons/One';

const Honoraires = () => {
  const handlePhoneClick = () => {
    window.location.href = 'tel:0666211563';
  };

  const tarifs = [
    { icon: OneIcon, title: "Première consultation", price: "60€", gradient: "from-teal-500 to-cyan-500" },
    { icon: Doctor, title: "Consultation de suivi", price: "60€", gradient: "from-cyan-500 to-blue-500" },
    { icon: Running, title: "Sportif", price: "60€", gradient: "from-orange-500 to-amber-500" },
    { icon: Pregnant, title: "Femme enceinte", price: "60€", gradient: "from-rose-500 to-pink-500" },
    { icon: Baby0203m, title: "Nourrisson", price: "60€", gradient: "from-sky-500 to-blue-500" },
    { icon: ChildProgram, title: "Enfant", price: "60€", gradient: "from-violet-500 to-purple-500" }
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Helmet>
        <title>Honoraires</title>
        <link rel="canonical" href="https://www.philipot-osteo-aigondigne-niort.fr/motifs/honoraires" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-float delay-500"></div>
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-4xl">
            <div className="animate-fade-in-up">
              <span className="inline-flex items-center gap-2 bg-emerald-500/20 backdrop-blur-sm text-emerald-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-emerald-500/30">
                Tarifs transparents
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight animate-fade-in-up delay-100">
              Nos
              <span className="block mt-2 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                honoraires
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-2xl animate-fade-in-up delay-200">
              Des tarifs clairs et accessibles pour prendre soin de votre santé.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" className="w-full">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Cards d'avantages */}
      <section className="py-8 -mt-1 relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto -mt-20">
            {[
              { icon: Clock, text: "Consultation 45min-1h", color: "from-emerald-500 to-teal-500" },
              { icon: MapPin, text: "Cabinet à Aigondigné", color: "from-teal-500 to-cyan-500" },
              { icon: FileText, text: "Facture pour mutuelle", color: "from-cyan-500 to-blue-500" }
            ].map((item, index) => (
              <div key={index} className="group bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-6 flex items-center gap-4 border border-slate-100 card-hover">
                <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <span className="font-semibold text-slate-800 text-lg">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-20">
        {/* Info remboursement */}
        <section className="mb-24">
          <div className="relative bg-gradient-to-br from-slate-50 to-emerald-50 rounded-[40px] p-10 md:p-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

            <div className="relative flex flex-col md:flex-row items-start gap-8">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-3xl flex items-center justify-center shadow-lg flex-shrink-0">
                <FileText className="w-10 h-10 text-white" />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-900">Paiement</h3>
                <p className="text-slate-700 text-lg leading-relaxed">
                  Une consultation d'ostéopathie n'est pas remboursée par l'Assurance Maladie. Cependant, <strong>certaines mutuelles prennent en charge</strong> en totalité ou en partie les frais engagés.
                </p>
                <p className="text-slate-700 text-lg">
                  Une facture vous sera délivrée en fin de consultation permettant un remboursement par votre mutuelle.
                </p>
                <div className="flex items-center gap-4 pt-4">
                  <div className="flex items-center gap-2 bg-white px-5 py-3 rounded-xl shadow-sm border border-slate-100">
                    <CreditCard className="w-5 h-5 text-emerald-600" />
                    <span className="font-semibold text-slate-800">Chèque</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white px-5 py-3 rounded-xl shadow-sm border border-slate-100">
                    <Euro className="w-5 h-5 text-emerald-600" />
                    <span className="font-semibold text-slate-800">Espèces</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tarifs */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <span className="inline-block bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent font-semibold text-sm uppercase tracking-wider mb-4">Nos tarifs</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Toutes nos prestations</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tarifs.map((tarif, index) => (
              <div key={index} className="group relative bg-white rounded-3xl p-8 shadow-lg shadow-slate-200/50 border border-slate-100 card-hover overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${tarif.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                <div className="relative flex items-center justify-between mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${tarif.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <tarif.icon color="white" width={32} height={32} />
                  </div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">{tarif.price}</div>
                </div>
                <h3 className="relative font-bold text-xl text-slate-900">{tarif.title}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Ce qui est inclus */}
        <section className="mb-24">
          <div className="relative bg-slate-900 rounded-[40px] p-10 md:p-16 overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

            <div className="relative">
              <h3 className="text-3xl font-bold text-white mb-10 text-center">Ce qui est inclus dans chaque consultation</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  "Bilan complet personnalisé",
                  "Traitement ostéopathique adapté",
                  "Conseils et exercices si nécessaire",
                  "Facture pour remboursement mutuelle"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
                    <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-slate-300 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-[40px] blur-2xl opacity-20"></div>
            <div className="relative bg-gradient-to-br from-emerald-500 to-teal-600 rounded-[40px] p-12 md:p-20 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>

              <div className="relative">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Prêt à retrouver votre bien-être ?</h2>
                <p className="text-emerald-100 text-xl mb-6 max-w-2xl mx-auto">Prenez rendez-vous dès maintenant et commencez votre parcours vers une meilleure santé.</p>
                <p className="text-white/80 text-lg mb-10 max-w-3xl mx-auto">
                  L'ostéopathie offre une approche personnalisée et globale pour améliorer votre bien-être au quotidien. <br></br>Pour toute information sur les consultations d'ostéopathie vous pouvez appeler directement le cabinet en cliquant sur le bouton ci-dessous.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="https://www.doctolib.fr/osteopathe/aigondigne/quentin-philipot" target="_blank" rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-3 bg-white text-emerald-700 px-10 py-5 rounded-2xl font-semibold text-lg hover:bg-emerald-50 transition-all duration-300 shadow-xl">
                    <Calendar className="w-6 h-6" />
                    Réserver sur Doctolib
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <button onClick={handlePhoneClick}
                    className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 border border-white/30">
                    <Phone className="w-6 h-6" />
                    06 66 21 15 63
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Honoraires;