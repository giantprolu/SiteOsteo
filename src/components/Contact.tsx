import { MapPin, Phone, Clock } from 'lucide-react';

const Contact = () => {
  const handlePhoneClick = () => {
    window.location.href = 'tel:0666211563';
  };
  return (
    <section id="contacte" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Contact</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-1">Adresse</h3>
                    <p className="text-gray-700">
                      32 Rte Ricardo<br />
                      79370 Aigondigné
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-1">Téléphone</h3>
                    <button
                      onClick={handlePhoneClick}
                      className="text-gray-700 hover:text-blue-600"
                    >
                      06 66 21 15 63
                    </button>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-1">Horaires</h3>
                    <table className="text-gray-700">
                      <tbody>
                        <tr>
                          <td className="pr-4">Lundi - Vendredi</td>
                          <td>8h30 - 19h00</td>
                        </tr>
                        <tr>
                          <td className="pr-4">Samedi</td>
                          <td>8h30 - 13h00</td>
                        </tr>
                        <tr>
                          <td className="pr-4">Dimanche</td>
                          <td>Fermé</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <a
                  href="https://www.doctolib.fr/osteopathe/aigondigne/quentin-philipot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-blue-600 text-white text-center px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Prendre rendez-vous
                </a>
              </div>
            </div>
          </div>
          
          <div className="h-[400px] md:h-full min-h-[400px] rounded-lg overflow-hidden shadow-md">
            <iframe
              title="Cabinet location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2757.0286098321803!2d-0.27682239999999997!3d46.2894058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4807490761fb5771%3A0x374c18b0e48f9473!2sQuentin%20Philipot%20Ost%C3%A9opathe%20D.O.!5e0!3m2!1sfr!2sfr!4v1739222993571!5m2!1sfr!2sfr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;