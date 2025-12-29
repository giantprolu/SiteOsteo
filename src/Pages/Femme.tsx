import { Helmet } from "react-helmet";
import { Phone, Calendar, ChevronRight, Clock, MapPin, CheckCircle2, Target, GraduationCap, ExternalLink } from 'lucide-react';
import { Pregnant, IntestinalPain, Baby0203m, ExerciseYoga } from 'healthicons-react';
import Footer from '../components/Footer';

const Femme = () => {
  const handlePhoneClick = () => {
    window.location.href = 'tel:0666211563';
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Helmet>
        <title>Ostéopathie de la femme enceinte</title>
        <link rel="canonical" href="https://www.philipot-osteo-aigondigne-niort.fr/motifs/osteopathie-de-la-femme-enceinte" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-72 h-72 bg-rose-500/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-float delay-500"></div>
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-4xl">
            <div className="animate-fade-in-up">
              <span className="inline-flex items-center gap-2 bg-rose-500/20 backdrop-blur-sm text-rose-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-rose-500/30">
                Accompagnement grossesse
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight animate-fade-in-up delay-100">
              Vivre sa grossesse en
              <span className="block mt-2 bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
                douceur
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-10 max-w-2xl animate-fade-in-up delay-200">
              L'ostéopathie offre une approche douce et naturelle pour soulager les tensions et favoriser votre bien-être jusqu'à l'accouchement.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
              <a href="https://www.doctolib.fr/osteopathe/aigondigne/quentin-philipot" target="_blank" rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-400 hover:to-pink-400 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-lg shadow-rose-500/25 hover:-translate-y-1">
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
              { icon: Clock, text: "Séances à chaque trimestre", color: "from-rose-500 to-pink-500" },
              { icon: MapPin, text: "Cabinet à Aigondigné", color: "from-pink-500 to-fuchsia-500" },
              { icon: CheckCircle2, text: "Techniques douces", color: "from-fuchsia-500 to-purple-500" }
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
            <span className="inline-block bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent font-semibold text-sm uppercase tracking-wider mb-4">Pour vous</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Pour toutes les futures mamans</h2>
          </div>

          <div className="relative bg-gradient-to-br from-rose-50 to-pink-50 rounded-[40px] p-10 md:p-16 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-rose-500/10 to-pink-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

            <div className="relative flex flex-col md:flex-row items-start gap-8">
              <div className="w-20 h-20 bg-gradient-to-br from-rose-500 to-pink-500 rounded-3xl flex items-center justify-center shadow-lg flex-shrink-0">
                <Pregnant color="white" width={40} height={40} />
              </div>
              <div>
                <p className="text-slate-700 text-xl leading-relaxed">
                  Les maux et douleurs liés à la grossesse sont nombreux et diffèrent d'une femme à l'autre. Consulter un ostéopathe permet de soulager la plupart des douleurs causées par la grossesse. Que ce soit pour une première grossesse ou pas, l'ostéopathie permet d'apporter un <strong>soutien adapté à chaque femme enceinte</strong>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Troubles traités */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <span className="inline-block bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent font-semibold text-sm uppercase tracking-wider mb-4">Troubles soulagés</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Pourquoi consulter ?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: ExerciseYoga,
                title: "Douleurs musculaires",
                gradient: "from-rose-500 to-pink-500",
                items: ["Lombalgie, sciatique", "Douleurs dorsales et cervicales", "Douleurs costales", "Douleurs bassin et coccyx"]
              },
              {
                icon: IntestinalPain,
                title: "Troubles digestifs & circulatoires",
                gradient: "from-pink-500 to-fuchsia-500",
                items: ["Nausées, reflux", "Ballonnements, constipation", "Jambes lourdes, œdèmes", "Circulation sanguine"]
              },
              {
                icon: Baby0203m,
                title: "Préparation accouchement",
                gradient: "from-fuchsia-500 to-purple-500",
                items: ["Mobilité du bassin", "Préparation du corps", "Position du bébé", "Récupération post-partum"]
              }
            ].map((category, index) => (
              <div key={index} className="group relative bg-white rounded-3xl p-8 shadow-lg shadow-slate-200/50 border border-slate-100 card-hover overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                <div className={`relative w-16 h-16 bg-gradient-to-br ${category.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-all duration-300`}>
                  <category.icon color="white" width={32} height={32} />
                </div>
                <h3 className="relative font-bold text-xl text-slate-900 mb-4">{category.title}</h3>
                <ul className="relative space-y-2">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-slate-600">
                      <div className="w-1.5 h-1.5 bg-rose-500 rounded-full"></div>
                      <span>{item}</span>
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
              <span className="inline-block bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent font-semibold text-sm uppercase tracking-wider mb-4">Tout au long de la grossesse</span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">Quand consulter ?</h2>

              <div className="space-y-4">
                {[
                  "En cas de douleurs liées à la grossesse",
                  "Avant l'accouchement pour préparer le corps",
                  "Après l'accouchement pour soulager les tensions",
                  "En prévention à chaque trimestre"
                ].map((item, index) => (
                  <div key={index} className="group flex items-center gap-4 bg-white rounded-2xl p-5 shadow-sm border border-slate-100 hover:shadow-lg hover:border-rose-200 transition-all duration-300">
                    <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Target className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-500 to-pink-500 rounded-[32px] blur-2xl opacity-20"></div>
              <div className="relative bg-gradient-to-br from-rose-500 to-pink-600 rounded-[32px] p-10 text-white overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2"></div>
                <div className="relative">
                  <h3 className="text-3xl font-bold mb-4">Votre bien-être, notre priorité</h3>
                  <p className="text-rose-100 text-lg mb-8 leading-relaxed">
                    Accompagnez votre grossesse en toute sérénité avec une prise en charge douce et personnalisée.
                  </p>
                  <a href="https://www.doctolib.fr/osteopathe/aigondigne/quentin-philipot" target="_blank" rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 bg-white text-rose-700 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-rose-50 transition-all duration-300 shadow-xl">
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
            <span className="inline-block bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent font-semibold text-sm uppercase tracking-wider mb-4">Expertise</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Formation spécialisée</h2>
          </div>

          <div className="max-w-xl mx-auto">
            <a href="https://www.cfpco.fr/Workshop/442/osteopathie-pediatrique-:-du-nourrisson-a-l%C2%B4adolescent" target="_blank" rel="noopener noreferrer" className="group bg-white rounded-3xl p-8 shadow-lg shadow-slate-200/50 border border-slate-100 card-hover block">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">2024</span>
                </div>
                <GraduationCap className="w-8 h-8 text-rose-500" />
              </div>
              <h3 className="font-semibold text-slate-900 text-lg mb-2 group-hover:text-rose-600 transition-colors">Ostéopathie pédiatrique, du nourrisson à l'adolescent</h3>
              <div className="flex items-center gap-2">
                <p className="text-rose-600 font-medium">CFPCO</p>
                <ExternalLink className="w-4 h-4 text-rose-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </a>
          </div>
        </section>

        {/* CTA Final */}
        <section className="text-center">
          <div className="relative bg-slate-900 rounded-[40px] p-12 md:p-20 overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-rose-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Prêt à retrouver votre bien-être ?</h2>
              <p className="text-slate-400 text-xl mb-6 max-w-2xl mx-auto">Prenez rendez-vous dès maintenant et commencez votre parcours vers une meilleure santé.</p>
              <p className="text-slate-300 text-lg mb-10 max-w-3xl mx-auto">
                L'ostéopathie offre une approche personnalisée et globale pour améliorer votre bien-être au quotidien. <br></br>Pour toute information sur les consultations d'ostéopathie vous pouvez appeler directement le cabinet en cliquant sur le bouton ci-dessous.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://www.doctolib.fr/osteopathe/aigondigne/quentin-philipot" target="_blank" rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-400 hover:to-pink-400 text-white px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-lg shadow-rose-500/25 hover:-translate-y-1">
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

export default Femme;
