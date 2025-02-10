import React from 'react';

const About = () => {
  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="src\Asset\he1h4hfqu28asrcc2xyq.webp"
              alt="Quentin Philipot, Ostéopathe"
              className="rounded-lg shadow-lg w-full h-[500px] object-cover"
              loading="lazy"
            />
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-6">À Propos</h2>
            
            <div className="space-y-4 text-gray-700">
              <p>
                Diplômé en ostéopathie (D.O.) et fort d'une expérience enrichissante, je propose une
                approche holistique et personnalisée de l'ostéopathie.
              </p>
              
              <p>
                Ma pratique s'appuie sur une connaissance approfondie de l'anatomie et de la
                biomécanique, permettant une prise en charge globale de mes patients.
              </p>
              
              <p>
                Je me forme continuellement aux dernières techniques ostéopathiques pour vous offrir
                les meilleurs soins possibles, adaptés à vos besoins spécifiques.
              </p>
            </div>
            
            <div className="mt-8 space-y-4">
              <h3 className="text-xl font-semibold text-blue-900">Formation</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                Diplôme d'Ostéopathe - Institut des Hautes Études Ostéopathiques de Nantes</li>
                <li>Spécialisation 
                ostéopathie pédiatrique, du nourrisson à l'adolescent (CFPCO)</li>
                <li>Formation en ostéopathie du sport</li>
                <li>Formation en ostéopathie périnatale</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;