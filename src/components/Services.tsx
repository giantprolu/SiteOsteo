import { useNavigate } from 'react-router-dom';
import { Bone, Euro, Activity, Baby, HeartPulse, PersonStanding } from 'lucide-react';

const services = [
  {
    icon: Bone,
    title: 'Consultation d’ostéopathie',
    description: 'Traitement des douleurs dorsales, cervicales, lombaires et articulaires.',
    path: '/services/consultation-osteopathie',
  },
  {
    icon: Activity,
    title: 'Ostéopathie du sportif',
    description: 'Accompagnement dans la récupération, prévention et réhabilitation sportive.',
    path: '/services/osteopathie-du-sportif',
  },
  {
    icon: Baby,
    title: 'Ostéopathie du nourrisson',
    description: 'Soins adaptés aux femmes enceintes et aux nourrissons.',
    path: '/services/osteopathie-du-nourrisson',
  },
  {
    icon: HeartPulse,
    title: 'Ostéopathie de la femme enceinte',
    description: 'Traitement des troubles du sommeil et gestion du stress.',
    path: '/services/osteopathie-de-la-femme-enceinte',
  },
  {
    icon: PersonStanding,
    title: 'Ostéopathie de l’enfant et de l’adolescent',
    description: 'Soins adaptés aux enfants et adolescents.',
    path: '/services/osteopathie-de-l-enfant-et-de-l-adolescent',
  },
  {
    icon: Euro,
    title: 'Honoraires',
    description: 'Consultez nos tarifs pour les différentes prestations.',
    path: '/services/honoraires',
    className: 'bg-gray-200 text-gray-700', // Ajout de la classe spécifique
  },
];

const Services = () => {
  const navigate = useNavigate();

  return (
    <section id="service" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">
          Motifs de consultation
        </h2>
        <h3 className="text-center mb-8">
          Consultation d’ostéopathie : L'ostéopathie est de plus en plus reconnue pour son efficacité dans le traitement des douleurs musculo-squelettiques.
          <br />Elle s'avère également bénéfique pour divers troubles, tels que les problèmes digestifs, urinaires, gynécologiques, respiratoires, ainsi que pour les céphalées et les troubles ORL.
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer ${service.className || ''}`}
              onClick={() => navigate(service.path)}
            >
              <service.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-blue-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;