import imagePath from '../Asset/he1h4hfqu28asrcc2xyq.webp';
import { GraduationCap, MapPin, Clock, Phone, Calendar, ChevronRight, ExternalLink } from 'lucide-react';

const About = () => {
  const handlePhoneClick = () => {
    window.location.href = 'tel:0666211563';
  };

  const formations = [
    { title: "Diplôme d'Ostéopathe (D.O.)", org: "IDHEO Nantes", link: "https://www.idheo.com/" },
    { title: "Ostéopathie pédiatrique, du nourrisson à l'adolescent", org: "CFPCO", link: "https://www.cfpco.fr/Workshop/442/osteopathie-pediatrique-:-du-nourrisson-a-l%C2%B4adolescent" },
    { title: "Ostéopathie et Trail / Running", org: "IdHEO Nantes", link: "https://www.idheo.com/" },
    { title: "Accompagnement du coureur à pied 2.0", org: "4FOOT Solution", link: "https://4foot-solution.com/running-osteo.html" },
    { title: "Comment traiter les tendinites et blessures musculaires ?", org: "CFPCO", link: "https://www.cfpco.fr/Workshop/332/comment-traiter-les-tendinites-et-les-blessures-musculaires--" },
    { title: "Prise en charge des sciatiques et cruralgies", org: "CFPCO", link: "https://www.cfpco.fr/Workshop/369/manipulations-des-nerfs-peripheriques%E2%80%A6-ou-pas-prise-en-charge-des-sciatiques-et-cruralgies-en-therapie-manuelle-" },
    { title: "Neurosciences de la douleur", org: "CFPCO", link: "https://www.cfpco.fr/videopack/cd7e7afd-055f-43fe-8fb6-0f63d719f6eb/neurosciences-de-la-douleur---par-laurent-fabre?st=9a8b80b3-a687-43ec-b296-3922173c86d5" }
  ];

  return (
    <section id="accueil" className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Décoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-3xl blur-2xl opacity-20 scale-95"></div>
            <img
              src={imagePath}
              alt="Quentin Philipot, Ostéopathe"
              className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              loading="lazy"
            />
            {/* Badge flottant */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 border border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Situé à</p>
                  <p className="font-semibold text-slate-900">Aigondigné</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contenu */}
          <div>
            <span className="inline-block bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent font-semibold text-sm uppercase tracking-wider mb-4">À propos</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Quentin Philipot</h2>

            <div className="space-y-4 text-slate-600 text-lg leading-relaxed mb-8">
              <p>
                Diplômé de l'Institut des Hautes Etudes Ostéopathiques (IdHEO Nantes), vous reçois depuis 2021 dans son cabinet situé à Aigondigné, au 32 Route Ricardo.
              </p>
              <div className="flex flex-wrap gap-4 text-base">
                <div className="flex items-center gap-2 bg-teal-50 px-4 py-2 rounded-full">
                  <Clock className="w-4 h-4 text-teal-600" />
                  <span className="text-slate-700">20 min de Niort</span>
                </div>
                <div className="flex items-center gap-2 bg-cyan-50 px-4 py-2 rounded-full">
                  <Clock className="w-4 h-4 text-cyan-600" />
                  <span className="text-slate-700">10 min de Celles-sur-Belle</span>
                </div>
              </div>
              <p>
                Vous trouverez des parkings à proximité. Le cabinet est aux normes PMR pour l'accueil de tous.
              </p>
            </div>

            {/* Boutons RDV */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="https://www.doctolib.fr/osteopathe/aigondigne/quentin-philipot"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-lg shadow-teal-500/25 hover:-translate-y-1"
              >
                <Calendar className="w-5 h-5" />
                Doctolib
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <button
                onClick={handlePhoneClick}
                className="inline-flex items-center justify-center gap-2 bg-white border-2 border-slate-200 hover:border-teal-300 hover:bg-teal-50 text-slate-800 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                06 66 21 15 63
              </button>
            </div>

            {/* Formations */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Formations</h3>
              </div>
              <ul className="space-y-3">
                {formations.map((formation, index) => (
                  <li key={index} className="group">
                    <a
                      href={formation.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors"
                    >
                      <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div className="flex-1">
                        <span className="text-slate-700 group-hover:text-teal-600 transition-colors">{formation.title}</span>
                        <span className="text-teal-600 text-sm ml-2">— {formation.org}</span>
                      </div>
                      <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-teal-500 flex-shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;