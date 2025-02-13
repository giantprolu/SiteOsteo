const DouleursMusculoSquelettiques = () => {
  const handlePhoneClick = () => {
    window.location.href = 'tel:0666211563';
  };
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">Ostéopathie du Sportif</h1>
      <p className="text-gray-700">
      Prévention, récupération et amélioration des performances sportives grâce à l’ostéopathie.
      </p>
      <p className="text-gray-700 mt-4">
      Que vous soyez un sportif amateur ou un athlète confirmé, votre corps est soumis à des efforts intenses qui peuvent entraîner des douleurs, des tensions musculaires et des blessures. L’ostéopathie du sportif est une approche naturelle et efficace pour favoriser la récupération, prévenir les blessures et optimiser la performance physique.

Les traumatismes les plus fréquents chez les sportifs incluent les tendinites (épaule, coude, genou, tendon d’Achille), les entorses, les contractures musculaires, les douleurs articulaires dues à la surcharge d’entraînement ou encore les microtraumatismes répétés. Un mauvais échauffement, une technique inadaptée ou un manque de récupération peuvent accentuer ces risques.

Votre ostéopathe, passionné par le sport et formé en ostéopathie du sportif, accompagne les pratiquants de toutes disciplines, du loisir à la compétition, en les aidant à maintenir un équilibre corporel optimal.
      </p>
      <h2 className="text-2xl font-semibold text-blue-900 mt-6">Quelles sont les blessures fréquentes chez les sportifs ?</h2>
      <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
        <li>Tendinites (épaule, coude, genou, tendon d’Achille)</li>
        <li>Entorses, foulures et déchirures musculaires</li>
        <li>Douleurs musculaires et contractures</li>
        <li>Restrictions de mobilité et blocages articulaires</li>
        <li>Fatigue musculaire, crampes et syndrome de surentraînement</li>
      </ul>
      <h2 className="text-2xl font-semibold text-blue-900 mt-6">Pourquoi consulter un ostéopathe spécialisé en sport ?</h2>
      <p className="text-gray-700 mt-4">
      L’ostéopathie du sportif permet de :
      </p>
      <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
        <li>✅ Soulager efficacement les douleurs et tensions musculaires</li>
        <li>✅ Favoriser une récupération rapide après un effort ou une blessure</li>
        <li>✅ Améliorer la mobilité articulaire et la souplesse musculaire</li>
        <li>✅ Optimiser la posture et l’équilibre corporel</li>
        <li>✅ Prévenir les blessures grâce à un suivi personnalisé</li>
      </ul>
      <p className="text-gray-700 mt-4">
        Intégrez l’ostéopathie dans votre préparation physique pour maximiser vos performances et éviter les blessures. Que vous pratiquiez la course à pied, le trail, le tennis, le football ou toute autre discipline, un suivi ostéopathique adapté peut faire la différence.
      </p>
      <p className="text-gray-700 mt-6 italic">2021 : « Ostéopathie et Trail / Running » - IdHEO Nantes</p>
      <p className="text-gray-700 mt-4 font-bold">
      Pour toute information sur les consultations d’ostéopathie vous pouvez appeler directement le cabinet en cliquant sur bouton ci-dessous
      </p>
      <br/>
      <button onClick={handlePhoneClick}
        className="flex-1 bg-blue-600 text-white text-center px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
      >
        06 66 21 15 63
      </button>
    </div>
  );
};

export default DouleursMusculoSquelettiques;