const DouleursMusculoSquelettiques = () => {
  const handlePhoneClick = () => {
    window.location.href = 'tel:0666211563';
  };
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">Ostéopathie de l’enfant et de l’adolescent</h1>
      <p className="text mb-8">
      L'ostéopathie de l’enfant et de l’adolescent est une approche thérapeutique qui s’adapte aux besoins spécifiques des jeunes patients.
      En effet, elle s’adapte aux besoins spécifiques de chaque enfant, en prenant en compte son âge, son mode de vie et ses activités. 
      Aussi, elle prend en compte la croissance et les changements physiologiques propres à chaque tranche d’âge. 
      </p>
      
      <h2 className="text-2xl font-semibold text-blue-900 mt-6">Pour qui s’adresse l’ostéopathie de l’enfant et de l’adolescent ?</h2>
      <p className="text-gray-700 mt-4">
      L'ostéopathie pédiatrique concerne :
      </p>
      <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
        <li><strong>Les jeunes enfants (dès les premiers mois de vie)</strong> : certains bébés peuvent rencontrer des tensions dues à l'accouchement ou aux premiers apprentissages moteurs.</li>
        <li><strong>Les enfants en pleine croissance</strong> : à mesure qu'ils grandissent, les enfants développent leur posture et leur motricité, ce qui peut engendrer des gênes ou des douleurs.</li>
        <li><strong>Les adolescents.</strong></li>
        <li><strong>Les enfants et adolescents pratiquant une activité sportive.</strong></li>
      </ul>
      <h2 className="text-2xl font-semibold text-blue-900 mt-6">Pour quoi consulter un ostéopathe pour son enfant ou son adolescent ?</h2>
      <p className="text-gray-700 mt-4">
      L'ostéopathie peut intervenir sur différents troubles et inconforts :
      </p>
      <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
        <li><strong>Pathologies de croissance</strong> : Sever (talon), Osgood-Schlatter (genou), Sinding-Larsen (genou), etc.</li>
        <li><strong>Troubles posturaux</strong> : douleurs liées à la croissance, scoliose, torticolis.</li>
        <li><strong>Problèmes ORL récurrents</strong> : otites, sinusites, rhinites chroniques, etc.</li>
        <li><strong>Troubles digestifs</strong> : reflux gastro-oesophagien, constipation, ballonnements, etc.</li>
        <li><strong>Troubles du sommeil</strong> : difficultés d'endormissement, sommeil agitatif.</li>
        <li><strong>Douleurs liés à un traumatisme ou à une chute</strong> : accidents domestiques, chutes à vélo, blessures sportives</li>
      </ul>

      <h2 className="text-2xl font-semibold text-blue-900 mt-6">Quand consulter un ostéopathe pour son enfant ou son adolescent ?</h2>
      <p className="text-gray-700 mt-4">
      L’ostéopathie s’adapte aux besoins spécifiques de chaque enfant, en prenant en compte son âge, son mode de vie et ses activités. 
      </p>
      <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
        <li><strong>Lors de douleurs ou de gênes corporelles.</strong></li>
        <li><strong>Après un traumatisme ou une chute.</strong></li>
        <li><strong>Pendant un traitement orthodontique</strong> : l'ostéopathie peut aider à limiter les douleurs et les tensions liées au traitement orthodontique.</li>
      </ul>

      <p className="text-gray-700 mt-4 ">
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
      <p className="text-gray-700 mt-4">
        2024 : « Ostéopathie pédiatrique, du nourrisson à l'adolescent » - CFPCO
      </p>
      
    </div>
  );
};

export default DouleursMusculoSquelettiques;