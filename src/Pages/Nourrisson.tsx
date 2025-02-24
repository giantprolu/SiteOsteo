const DouleursMusculoSquelettiques = () => {
  const handlePhoneClick = () => {
    window.location.href = 'tel:0666211563';
  };
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">Ostéopathie du nourrisson</h1>
      <p className="text mb-8">
      L'ostéopathie du nourrisson est une approche douce et non invasive visant à aider à résoudre certains déséquilibres ou inconforts chez les bébés, 
      souvent liés à leur développement ou à des événements survenus lors de l'accouchement.
      </p>
      
      <h2 className="text-2xl font-semibold text-blue-900 mt-6">Pour qui s’adresse l’ostéopathie du nourrisson ?</h2>
      <p className="text-gray-700 mt-4">L’ostéopathie pédiatrique s’adresse à tous les nourrissons, qu’ils soient en parfaite santé ou qu’ils présentent des troubles fonctionnels. 
      Certains bébés peuvent naître avec des tensions dues à la grossesse ou à l’accouchement, nécessitant une prise en charge précoce.</p>
      
      <h2 className="text-2xl font-semibold text-blue-900 mt-6">Pour quoi consulter un ostéopathe pour son nourrisson ?</h2>
      <p className="text-gray-700 mt-4">
      L’ostéopathie aide à soulager de nombreux troubles courants chez le nourrisson, en améliorant son bien-être.
      <br/>Les motifs de consultation les plus fréquents sont :
      </p>
      <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
        <li><strong>Troubles digestifs</strong> : coliques, reflux gastro-œsophagien (RGO), constipation, ballonnements, etc.</li>
        <li><strong>Plagiocéphalie et torticolis</strong> : asymétrie du crâne ou du cou</li>
        <li><strong>Difficultés de succion et allaitement</strong></li>
      </ul>
      
      <h2 className="text-2xl font-semibold text-blue-900 mt-6">Quand consulter un ostéopathe pour son nourrisson ?</h2>
      <p className="text-gray-700 mt-4">
      Il est recommandé de consulter un ostéopathe dans les premières semaines de vie en cas de troubles fonctionnels.
      </p>
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