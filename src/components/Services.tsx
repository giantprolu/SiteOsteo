import { Brain, Baby, FileWarning as Running, Spline as Spine, Atom as Stomach, BedDouble } from 'lucide-react';

const services = [
  {
    icon: Spine,
    title: 'Douleurs Musculo-squelettiques',
    description: 'Traitement des douleurs dorsales, cervicales, lombaires et articulaires.',
  },
  {
    icon: Stomach,
    title: 'Troubles Digestifs',
    description: 'Prise en charge des ballonnements, reflux, coliques et troubles fonctionnels.',
  },
  {
    icon: Running,
    title: 'Traumatismes Sportifs',
    description: 'Accompagnement dans la récupération, prévention et réhabilitation sportive.',
  },
  {
    icon: Baby,
    title: 'Suivi Périnatal',
    description: 'Soins adaptés aux femmes enceintes et aux nourrissons.',
  },
  {
    icon: Brain,
    title: 'Stress et Sommeil',
    description: 'Traitement des troubles du sommeil et gestion du stress.',
  },
  {
    icon: BedDouble,
    title: 'Posture et Ergonomie',
    description: 'Conseils et corrections posturales pour le quotidien et le travail.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">
          Mes Services
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
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