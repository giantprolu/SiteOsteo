import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Stethoscope, Running, Baby0203m, Pregnant, ChildProgram, Coins } from 'healthicons-react';

const services = [
  {
    icon: Stethoscope,
    title: 'Consultation d\'ostéopathie',
    description: 'Prise en charge globale de vos douleurs',
    path: '/motifs/consultation-osteopathie',
    gradient: 'from-teal-500 to-cyan-500',
  },
  {
    icon: Running,
    title: 'Ostéopathie du sportif',
    description: 'Performance et récupération',
    path: '/motifs/osteopathie-du-sportif',
    gradient: 'from-orange-500 to-amber-500',
  },
  {
    icon: Baby0203m,
    title: 'Ostéopathie du nourrisson',
    description: 'Soins doux pour les tout-petits',
    path: '/motifs/osteopathie-du-nourrisson',
    gradient: 'from-sky-500 to-cyan-500',
  },
  {
    icon: Pregnant,
    title: 'Ostéopathie de la femme enceinte',
    description: 'Accompagnement de la grossesse',
    path: '/motifs/osteopathie-de-la-femme-enceinte',
    gradient: 'from-rose-500 to-pink-500',
  },
  {
    icon: ChildProgram,
    title: 'Ostéopathie de l\'enfant et de l\'adolescent',
    description: 'Accompagner la croissance',
    path: '/motifs/osteopathie-de-l-enfant-et-de-l-adolescent',
    gradient: 'from-violet-500 to-purple-500',
  },
  {
    icon: Coins,
    title: 'Honoraires',
    description: 'Tarifs et modalités de paiement',
    path: '/motifs/honoraires',
    gradient: 'from-emerald-500 to-teal-500',
    isSpecial: true,
  },
];

const Services = () => {
  const navigate = useNavigate();

  return (
    <section id="service" className="py-24 bg-white relative overflow-hidden">
      {/* Décoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <span className="inline-block bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent font-semibold text-sm uppercase tracking-wider mb-4">Nos services</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Motifs de consultation
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-3xl p-8 shadow-lg shadow-slate-200/50 border border-slate-100 card-hover cursor-pointer overflow-hidden ${service.isSpecial ? 'lg:col-span-1' : ''}`}
              onClick={() => navigate(service.path)}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

              <h3 className="relative text-xl font-bold text-slate-900 mb-3 group-hover:text-slate-800">
                {service.title}
              </h3>

              <p className="relative text-slate-600 mb-4">
                {service.description}
              </p>

              <div className="relative flex items-center text-teal-600 font-medium group-hover:text-teal-500">
                <span>En savoir plus</span>
                <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;