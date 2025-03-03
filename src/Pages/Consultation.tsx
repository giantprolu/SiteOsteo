import { Helmet } from "react-helmet";
const DouleursMusculoSquelettiques = () => {
  const handlePhoneClick = () => {
    window.location.href = 'tel:0666211563';
  };
  return (
    <div className="container mx-auto px-4 py-20">
      <Helmet>
        <title>Consultation d’ostéopathie</title>
        <link rel="canonical" href="https://www.philipot-osteo-aigondigne-niort.fr/motifs/consultation-osteopathie" />
      </Helmet>
      <h1 className="text-3xl font-bold text-blue-900 mb-6">Ostéopathie</h1>
      <h3 className="text mb-8">
          L'ostéopathie est de plus en plus reconnue pour son efficacité dans le traitement des douleurs musculo-squelettiques.
          Elle s'avère également bénéfique pour divers troubles, tels que les problèmes digestifs, urinaires, gynécologiques, respiratoires, ainsi que pour les céphalées et les troubles ORL.
        </h3>
      
      <h2 className="text-2xl font-semibold text-blue-900 mt-6">Pour qui s'adresse l'ostéopathie ?
      </h2>
      <p className="text-gray-700 mt-4">
      L'ostéopathie est une approche adaptée à tous les âges de la vie. Voici les principaux profils de patients qui peuvent consulter un ostéopathe : 
        </p>
      <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
        <li><strong>Les nourrissons et enfants </strong>: coliques, RGO, plagiocéphalie, troubles ORL répétitifs, etc.</li>
        <li><strong>Les femmes enceintes </strong>: douleurs lombaires, sciatiques, préparation à l'accouchement, etc.</li>
        <li><strong>Les sportifs </strong>: blessures, douleurs musculaire, etc.</li>
        <li><strong>Les seniors </strong>: soulagement des douleurs articulaires et musculaires, etc.</li>
      </ul>
      <h2 className="text-2xl font-semibold text-blue-900 mt-6">Pour quoi consulter un ostéopathe ?</h2>

      <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
        <li><strong>Douleurs musculo-squelettiques </strong>: maux de dos, cervicalgies, dorsalgies, lombalgies, tendinites, entorses, etc.</li>
        <li><strong>Problèmes digestifs </strong>: ballonnements, constipation, reflux gastriques, etc.</li>
        <li><strong>Problèmes gynécologiques </strong>: règles douloureuses, douleurs pelviennes, etc.</li>
        <li><strong>Céphalées </strong>: migraines, tensions au niveau de la tête et du cou, etc.</li>
        <li><strong>Troubles ORL </strong>: sinusites, otites, douleurs cervicales liées aux problèmes ORL, etc.</li>
        <li><strong>Les femmes enceintes </strong>: douleurs lombaires, sciatiques, préparation à l'accouchement, etc.</li>
        <li><strong>Les sportifs </strong>: blessures, douleurs musculaire, etc.</li>
      </ul>
      <h2 className="text-2xl font-semibold text-blue-900 mt-6">Quand consulter un ostéopathe ?</h2>
      <p className="text-gray-700 mt-4">
      L'ostéopathie permet de traiter une grande variété de troubles fonctionnels. Voici les principales indications :
      </p>
      <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
        <li><strong>En cas de douleur aiguë ou chronique</strong></li>
        <li><strong>Suite à un traumatisme </strong>: accident, chute, intervention chirurgicale, etc.</li>
        <li><strong>Avant ou après une activité physique intense</strong></li>
        <li><strong>Pendant des périodes de changements physiologiques </strong></li>
        </ul>      
      <p className="text-gray-700 mt-4">
      L'ostéopathie offre une approche personnalisée et globale pour améliorer votre bien-être au quotidien. 
      </p>
      <p className="text-gray-700 mt-4 font-bold">
      Pour toute information sur les consultations d’ostéopathie vous pouvez appeler directement le cabinet en cliquant sur bouton ci-dessous
      </p>
      <br/>
      <button onClick={handlePhoneClick}
        className="flex-1 bg-blue-600 text-white text-center px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
      >
        06 66 21 15 63
      </button>
      <h2 className="text-2xl font-semibold text-blue-900 mt-6">Formations</h2>

      <p className="text-gray-700 mt-6 italic">2024 : « Comment traiter les tendinites et les blessures musculaires ? » - CFPCO</p>
      <p className="text-gray-700 mt-6 italic">2022 : « Manipulations des nerfs périphériques… Ou pas ? Prise en charge des sciatiques et cruralgies en thérapie manuelle » - CFPCO</p>
      <p className="text-gray-700 mt-6 italic">2022 : « E-Learning - Neurosciences de la douleur » - CFPCO</p> 

      
    </div>
  );
};

export default DouleursMusculoSquelettiques;
