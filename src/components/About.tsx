import imagePath from '../Asset/he1h4hfqu28asrcc2xyq.webp';

const About = () => {
  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={imagePath}
              alt="Quentin Philipot, Ostéopathe"
              className="rounded-lg shadow-lg w-full h-[500px] object-cover"
              loading="lazy"
            />
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-6">À Propos</h2>
            
            <div className="space-y-4 text-gray-700">
              <p>
              Quentin Philipot, diplômé de l’Institut des Hautes Etudes Ostéopathiques (IdHEO Nantes) vous reçoit depuis 2021 dans son cabinet situé à Aigondigné, au 32 Route Ricardo. 
              </p>
              <p>Le cabinet est situé à <strong>20 minutes de Niort</strong>, <strong>10 minutes de Celles-sur-Belle</strong>. </p>
              <p>Vous trouverez des parkings a proximité pour vous stationner. Le cabinet est aux normes PMR pour l’accueil de tous. 
              </p>
              <p>
              Vous pouvez prendre rendez-vous :
              </p>
                <div className="flex space-x-4">
                <a
                  href="https://www.doctolib.fr/osteopathe/aigondigne/quentin-philipot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-blue-600 text-white text-center px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Doctolib
                </a>
                  
                <a
                  href="tel:0666211563"
                  className="flex-1 bg-blue-600 text-white text-center px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
                >
                06 66 21 15 63
                </a>
                </div>
            </div>
            
            <div className="mt-8 space-y-4">
              <h3 className="text-xl font-semibold text-blue-900">Formation</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                Diplôme d'Ostéopathe (D.O.) - Institut des Hautes Études Ostéopathiques de Nantes (IDHEO-Nantes)</li>
                <li>Ostéopathie pédiatrique, du nourrisson à l'adolescent - CFPCO</li>
                <li>Ostéopathie et Trail / Running - IdHEO Nantes</li>
                <li>Comment traiter les tendinites et les blessures musculaires ? - CFPCO</li>
                <li>Manipulations des nerfs périphériques… Ou pas ? <br/>Prise en charge des sciatiques et cruralgies en thérapie manuelle - CFPCO</li>
                <li>E-Learning - Neurosciences de la douleur - CFPCOFormation post gradué</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;