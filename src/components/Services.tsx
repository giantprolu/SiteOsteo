import { useNavigate } from 'react-router-dom';
import { Bone, Utensils, Activity, Baby, Moon, RockingChair } from 'lucide-react';

const services = [
  {
    icon: Bone,
    title: 'Douleurs Musculo-squelettiques',
    description: 'Traitement des douleurs dorsales, cervicales, lombaires et articulaires.',
    path: '/services/douleurs-musculo-squelettiques',
  },
  {
    icon: Utensils,
    title: 'Troubles Digestifs',
    description: 'Prise en charge des ballonnements, reflux, coliques et troubles fonctionnels.',
    path: '/services/troubles-digestifs',
  },
  {
    icon: Activity,
    title: 'Traumatismes Sportifs',
    description: 'Accompagnement dans la récupération, prévention et réhabilitation sportive.',
    path: '/services/traumatismes-sportifs',
  },
  {
    icon: Baby,
    title: 'Suivi Périnatal',
    description: 'Soins adaptés aux femmes enceintes et aux nourrissons.',
    path: '/services/suivi-perinatal',
  },
  {
    icon: Moon,
    title: 'Stress et Sommeil',
    description: 'Traitement des troubles du sommeil et gestion du stress.',
    path: '/services/stress-et-sommeil',
  },
  {
    icon: RockingChair,
    title: 'Posture et Ergonomie',
    description: 'Conseils et corrections posturales pour le quotidien et le travail.',
    path: '/services/posture-et-ergonomie',
  },
];

const Services = () => {
  const navigate = useNavigate();

  return (
    <section id="service" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">
          Mes Services
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
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