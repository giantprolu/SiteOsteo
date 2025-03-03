import { Helmet } from "react-helmet";

const DouleursMusculoSquelettiques = () => {
  const handlePhoneClick = () => {
    window.location.href = 'tel:0666211563';
  };
  return (
    <div className="container mx-auto px-4 py-20">
      <Helmet>
        <title>Ostéopathie du sportif</title>
        <link rel="canonical" href="https://www.philipot-osteo-aigondigne-niort.fr/motifs/osteopathie-du-sportif" />
      </Helmet>
      <h1 className="text-3xl font-bold text-blue-900 mb-6">Ostéopathie du sportif</h1>
      <p className="text mb-8">
      Passionnée par de multiples sports, votre ostéopathe reçoit des sportifs diverses et variés au cabinet, allant du sportif loisir au sportif compétiteur. 
      L'ostéopathie du sportif offre une approche personnalisée pour vous aider à pratiquer votre discipline dans les meilleures conditions.
      </p>
      
      <h2 className="text-2xl font-semibold text-blue-900 mt-6">Pour qui s’adresse l’ostéopathie du sportif ?</h2>
      <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
        <li><strong>Les sportifs amateurs et réguliers</strong></li>
        <li><strong>Les athlètes de haut niveau et professionnels</strong></li>
        <li><strong>Les jeunes sportifs en pleine croissance</strong> : participation au bien-être lors des changements physiologiques (croissance) en diminuant les douleurs liés à ceux-ci</li>
        <li><strong>Les sportifs en rééducation</strong> : accompagnement après une blessure ou une chirurgie pour une récupération optimale</li>
      </ul>
      <h2 className="text-2xl font-semibold text-blue-900 mt-6">Pour quoi consulter un ostéopathe du sport ?</h2>
      <p className="text-gray-700 mt-4">
      L'ostéopathie permet d'intervenir sur de nombreux troubles liés à la pratique sportive. 
      Les traumatismes les plus fréquents chez les sportifs incluent les tendinites (épaule, coude, genou, tendon d’Achille), les entorses, les contractures musculaires, 
      les douleurs articulaires dues à la surcharge d’entraînement ou encore les micro-traumatismes répétés.
      </p>
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
      <p className="text-gray-700 mt-6 italic">2021 : « Ostéopathie et Trail / Running » - IdHEO Nantes</p>
      <p className="text-gray-700 mt-4 italic">2024 : « Comment traiter les tendinites et les blessures musculaires ? » - CFPCO</p>
      
    </div>
  );
};

export default DouleursMusculoSquelettiques;