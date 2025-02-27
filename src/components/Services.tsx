import { useNavigate } from 'react-router-dom';
import { Bone, Euro, Activity, Baby, HeartPulse, PersonStanding } from 'lucide-react';

const services = [
  {
    icon: Bone,
    title: 'Consultation d’ostéopathie',
    description: '',
    path: '/motifs/consultation-osteopathie',
  },
  {
    icon: Activity,
    title: 'Ostéopathie du sportif',
    description: '',
    path: '/motifs/osteopathie-du-sportif',
  },
  {
    icon: Baby,
    title: 'Ostéopathie du nourrisson',
    description: '',
    path: '/motifs/osteopathie-du-nourrisson',
  },
  {
    icon: HeartPulse,
    title: 'Ostéopathie de la femme enceinte',
    description: '',
    path: '/motifs/osteopathie-de-la-femme-enceinte',
  },
  {
    icon: PersonStanding,
    title: 'Ostéopathie de l’enfant et de l’adolescent',
    description: '',
    path: '/motifs/osteopathie-de-l-enfant-et-de-l-adolescent',
  },
  {
    icon: Euro,
    title: 'Honoraires',
    description: 'Consultez nos tarifs pour les différentes prestations.',
    path: '/motifs/honoraires',
    className: 'bg-gray-200 text-black',
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer ${service.className || 'bg-white'}`}
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