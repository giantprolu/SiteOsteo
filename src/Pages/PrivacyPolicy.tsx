import { Mail, Phone, Building2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


const PrivacyPolicy = () => {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
      <button
          onClick={() => navigate(-1)}
          className="mt-8 mb-8 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-800 transition-colors"
        >
          Retour
        </button>
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Mentions Légales</h1>
        
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Éditeur du site</h2>
          <div className="space-y-4 text-gray-600">
          <p className="leading-relaxed">
            Le site philipot-osteo est édité par Chavaudra Nathan (personne physique).
          </p>

            
            <div className="grid gap-4 mt-6">
              <div className="flex items-center space-x-3">
                <Building2 className="text-gray-400" size={20} />
                <span>Directeur de la publication : Chavaudra Nathan</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="text-gray-400" size={20} />
                <a href="mailto:[adresse e-mail de contact]" className="text-blue-600 hover:text-blue-800 transition-colors">
                  nathnathchav@gmail.com
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="text-gray-400" size={20} />
                <span>0788631797</span>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Hébergement</h2>
          <div className="space-y-4 text-gray-600">
            <p className="leading-relaxed">
              Le site est hébergé par OVH, dont le siège social est situé 
              au 2 rue Kellermann, 59100 Roubaix.
            </p>
            
            <div className="grid gap-4 mt-6">
              <div className="flex items-center space-x-3">
                <Phone className="text-gray-400" size={20} />
                <span>1007</span>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Propriété intellectuelle</h2>
          <p className="text-gray-600 leading-relaxed">
            L'ensemble des contenus présents sur le site [Nom du site], incluant, de manière 
            non limitative, les textes, images, graphismes, logos, vidéos, sons, icônes et 
            logiciels, sont la propriété de Quentin Philipot ou de ses partenaires. 
            Toute reproduction, représentation, modification, publication, adaptation de tout 
            ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, 
            est interdite, sauf autorisation écrite préalable de Chavaudra Nathan.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Données personnelles</h2>
          <p className="text-gray-600 leading-relaxed">
            Conformément à la loi n° 78-17 du 6 janvier 1978 relative à l'informatique, aux 
            fichiers et aux libertés, et au Règlement Général sur la Protection des Données 
            (RGPD), vous disposez d'un droit d'accès, de rectification, de suppression et 
            d'opposition aux données personnelles vous concernant. Pour exercer ce droit, 
            vous pouvez nous contacter à l'adresse suivante : 
            <a href="mailto:[adresse e-mail de contact]" className="text-blue-600 hover:text-blue-800 ml-1">
              nathnathchav@gmail.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;