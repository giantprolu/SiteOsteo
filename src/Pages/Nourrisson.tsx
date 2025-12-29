import { Helmet } from "react-helmet";
import { Phone, GraduationCap, Calendar, Clock, MapPin, CheckCircle2, ChevronRight, Target, ExternalLink } from 'lucide-react';
import { Baby0203m, IntestinalPain, Lactation, Baby0306m } from 'healthicons-react';
import Footer from '../components/Footer';

const Nourrisson = () => {
  const handlePhoneClick = () => {
    window.location.href = 'tel:0666211563';
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Helmet>
        <title>Ostéopathie du nourrisson</title>
        <link rel="canonical" href="https://www.philipot-osteo-aigondigne-niort.fr/motifs/osteopathie-du-nourrisson" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-slate-900 via-sky-900 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-72 h-72 bg-sky-500/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-float delay-500"></div>
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-4xl">
            <div className="animate-fade-in-up">
              <span className="inline-flex items-center gap-2 bg-sky-500/20 backdrop-blur-sm text-sky-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-sky-500/30">
                Ostéopathie pédiatrique
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight animate-fade-in-up delay-100">
              Des soins tout en
              <span className="block mt-2 bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">
                douceur
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-10 max-w-2xl animate-fade-in-up delay-200">
              L'ostéopathie du nourrisson est une approche douce et non invasive pour aider votre bébé à bien démarrer dans la vie.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
              <a href="https://www.doctolib.fr/osteopathe/aigondigne/quentin-philipot" target="_blank" rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-400 hover:to-cyan-400 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-lg shadow-sky-500/25 hover:-translate-y-1">
                <Calendar className="w-5 h-5" />
                Prendre rendez-vous
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <button onClick={handlePhoneClick}
                className="inline-flex items-center justify-center gap-2 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 border border-white/20">
                <Phone className="w-5 h-5" />
                06 66 21 15 63
              </button>
            </div>
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
              { icon: Clock, text: "Séances adaptées aux bébés", color: "from-sky-500 to-cyan-500" },
              { icon: MapPin, text: "Cabinet à Aigondigné", color: "from-cyan-500 to-teal-500" },
              { icon: CheckCircle2, text: "Techniques douces", color: "from-teal-500 to-emerald-500" }
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
        {/* Pour qui */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <span className="inline-block bg-gradient-to-r from-sky-500 to-cyan-500 bg-clip-text text-transparent font-semibold text-sm uppercase tracking-wider mb-4">Pour qui ?</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">L'ostéopathie des tout-petits</h2>
          </div>

          <div className="relative bg-gradient-to-br from-sky-50 to-cyan-50 rounded-[40px] p-10 md:p-16 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-sky-500/10 to-cyan-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

            <div className="relative flex flex-col md:flex-row items-start gap-8">
              <div className="w-20 h-20 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-3xl flex items-center justify-center shadow-lg flex-shrink-0">
                <Baby0203m color="white" width={40} height={40} />
              </div>
              <div>
                <p className="text-slate-700 text-xl leading-relaxed">
                  L'ostéopathie pédiatrique s'adresse à <strong>tous les nourrissons</strong>, qu'ils soient en parfaite santé ou qu'ils présentent des troubles fonctionnels. Certains bébés peuvent naître avec des tensions dues à la grossesse ou à l'accouchement, nécessitant une prise en charge précoce.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Troubles traités - listes à puces */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <span className="inline-block bg-gradient-to-r from-sky-500 to-cyan-500 bg-clip-text text-transparent font-semibold text-sm uppercase tracking-wider mb-4">Motifs fréquents</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Pourquoi consulter ?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: IntestinalPain, title: "Troubles digestifs", gradient: "from-sky-500 to-cyan-500", items: ["Coliques du nourrisson", "Reflux gastro-œsophagien (RGO)", "Constipation", "Ballonnements"] },
              { icon: Baby0306m, title: "Plagiocéphalie & torticolis", gradient: "from-cyan-500 to-teal-500", items: ["Asymétrie du crâne", "Position préférentielle", "Torticolis congénital", "Déformation crânienne"] },
              { icon: Lactation, title: "Difficultés de succion", gradient: "from-teal-500 to-emerald-500", items: ["Problèmes d'allaitement", "Difficultés à téter", "Fatigue lors des repas", "Régurgitations"] }
            ].map((item, index) => (
              <div key={index} className="group relative bg-white rounded-3xl p-8 shadow-lg shadow-slate-200/50 border border-slate-100 card-hover overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                <div className={`relative w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-all duration-300`}>
                  <item.icon color="white" width={40} height={40} />
                </div>
                <h3 className="relative font-bold text-xl text-slate-900 mb-4">{item.title}</h3>
                <ul className="relative space-y-2">
                  {item.items.map((li, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-slate-600">
                      <div className="w-1.5 h-1.5 bg-sky-500 rounded-full"></div>
                      <span>{li}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Quand consulter - avec icône Target */}
        <section className="mb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-gradient-to-r from-sky-500 to-cyan-500 bg-clip-text text-transparent font-semibold text-sm uppercase tracking-wider mb-4">Le bon moment</span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">Quand consulter ?</h2>

              <div className="space-y-4">
                {[
                  "Dans les premières semaines de vie",
                  "En cas de troubles fonctionnels",
                  "Après un accouchement difficile",
                  "En prévention pour un bilan"
                ].map((item, index) => (
                  <div key={index} className="group flex items-center gap-4 bg-white rounded-2xl p-5 shadow-sm border border-slate-100 hover:shadow-lg hover:border-sky-200 transition-all duration-300">
                    <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Target className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-[32px] blur-2xl opacity-20"></div>
              <div className="relative bg-gradient-to-br from-sky-500 to-cyan-600 rounded-[32px] p-10 text-white overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2"></div>
                <div className="relative">
                  <h3 className="text-3xl font-bold mb-4">Le bien-être de votre bébé</h3>
                  <p className="text-sky-100 text-lg mb-8 leading-relaxed">
                    Offrez à votre enfant les meilleures conditions de développement avec une prise en charge douce et adaptée.
                  </p>
                  <a href="https://www.doctolib.fr/osteopathe/aigondigne/quentin-philipot" target="_blank" rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 bg-white text-sky-700 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-sky-50 transition-all duration-300 shadow-xl">
                    <Calendar className="w-5 h-5" />
                    Prendre rendez-vous
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Formation avec lien */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <span className="inline-block bg-gradient-to-r from-sky-500 to-cyan-500 bg-clip-text text-transparent font-semibold text-sm uppercase tracking-wider mb-4">Expertise</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Formation spécialisée</h2>
          </div>

          <div className="max-w-xl mx-auto">
            <a href="https://www.cfpco.fr/Workshop/442/osteopathie-pediatrique-:-du-nourrisson-a-l%C2%B4adolescent" target="_blank" rel="noopener noreferrer" className="group bg-white rounded-3xl p-8 shadow-lg shadow-slate-200/50 border border-slate-100 card-hover block">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">2024</span>
                </div>
                <GraduationCap className="w-8 h-8 text-sky-500" />
              </div>
              <h3 className="font-semibold text-slate-900 text-lg mb-2 group-hover:text-sky-600 transition-colors">Ostéopathie pédiatrique, du nourrisson à l'adolescent</h3>
              <div className="flex items-center gap-2">
                <p className="text-sky-600 font-medium">CFPCO</p>
                <ExternalLink className="w-4 h-4 text-sky-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </a>
          </div>
        </section>

        {/* CTA Final */}
        <section className="text-center">
          <div className="relative bg-slate-900 rounded-[40px] p-12 md:p-20 overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-sky-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Prêt à retrouver votre bien-être ?</h2>
              <p className="text-slate-400 text-xl mb-6 max-w-2xl mx-auto">Prenez rendez-vous dès maintenant et commencez votre parcours vers une meilleure santé.</p>
              <p className="text-slate-300 text-lg mb-10 max-w-3xl mx-auto">
                L'ostéopathie offre une approche personnalisée et globale pour améliorer votre bien-être au quotidien. <br></br>Pour toute information sur les consultations d'ostéopathie vous pouvez appeler directement le cabinet en cliquant sur le bouton ci-dessous.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://www.doctolib.fr/osteopathe/aigondigne/quentin-philipot" target="_blank" rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-400 hover:to-cyan-400 text-white px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-lg shadow-sky-500/25 hover:-translate-y-1">
                  <Calendar className="w-6 h-6" />
                  Réserver sur Doctolib
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <button onClick={handlePhoneClick}
                  className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm hover:bg-white/15 text-white px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 border border-white/20">
                  <Phone className="w-6 h-6" />
                  06 66 21 15 63
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Nourrisson;