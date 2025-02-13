const OsteopathieFemmeEnceinte = () => {
  const handlePhoneClick = () => {
    window.location.href = 'tel:0666211563';
  };
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">Ostéopathie de la femme enceinte</h1>
      <p className="text-gray-700">
        L'ostéopathie de la femme enceinte est une approche thérapeutique essentielle qui permet d’accompagner la future maman tout au long de sa grossesse. En agissant sur les tensions musculaires, les douleurs articulaires et les déséquilibres posturaux, l’ostéopathie contribue à un meilleur confort et prépare le corps à l’accouchement.
      </p>
      <p className="text-gray-700 mt-4">
        Pendant la grossesse, le corps de la femme subit de profonds changements hormonaux, posturaux et physiologiques. Ces transformations entraînent fréquemment des douleurs lombaires, sciatiques, tensions dans le bassin, troubles digestifs et circulatoires. Un suivi ostéopathique régulier permet de prévenir et de soulager ces inconforts tout en favorisant un bien-être global, essentiel au bon déroulement de la grossesse.
      </p>
      
      <h2 className="text-2xl font-semibold text-blue-900 mt-6">Les Bienfaits de l’Ostéopathie Pendant la Grossesse</h2>
      <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
        <li>Réduction des douleurs lombaires, sciatiques et tensions musculaires</li>
        <li>Optimisation de la mobilité du bassin en préparation à l’accouchement</li>
        <li>Soutien de l’équilibre postural pour éviter les compensations douloureuses</li>
        <li>Amélioration de la digestion et réduction des reflux gastriques</li>
        <li>Stimulation de la circulation sanguine pour limiter les œdèmes et les jambes lourdes</li>
        <li>Réduction du stress et amélioration du sommeil grâce à une relaxation profonde</li>
      </ul>
      
      <h2 className="text-2xl font-semibold text-blue-900 mt-6">Pourquoi Consulter un Ostéopathe Pendant la Grossesse ?</h2>
      <p className="text-gray-700 mt-4">
        L’ostéopathie pendant la grossesse permet d’adapter le corps aux transformations physiologiques et de limiter l’apparition de douleurs chroniques. En harmonisant la posture et en réduisant les tensions corporelles, elle offre un soutien essentiel pour vivre une grossesse sereine et confortable.
      </p>
      <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
        <li>✅ Soulagement efficace des douleurs dorsales et pelviennes</li>
        <li>✅ Amélioration de la posture et de l’équilibre du centre de gravité</li>
        <li>✅ Travail sur la respiration pour favoriser une meilleure oxygénation</li>
        <li>✅ Réduction des tensions ligamentaires et musculaires</li>
        <li>✅ Accompagnement vers un accouchement plus fluide et sans complications</li>
      </ul>
      <p className="text-gray-700 mt-4">
        Un suivi ostéopathique personnalisé apporte un réel bénéfice tout au long des neuf mois de grossesse et contribue également au bien-être du bébé en réduisant les contraintes mécaniques exercées sur l’utérus. 
      </p>
      <h2 className="text-2xl font-semibold text-blue-900 mt-6">L’Ostéopathie Post-Partum : Un Suivi Indispensable Après l’Accouchement</h2>
      <p className="text-gray-700 mt-4">
        Après l’accouchement, le corps de la femme doit récupérer et retrouver un équilibre optimal. L’ostéopathie post-partum permet de réajuster les tensions accumulées durant la grossesse et l’accouchement, d’améliorer la posture et de favoriser la récupération musculaire et articulaire.
      </p>
      <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
        <li>Rééquilibrage du bassin et des articulations après l’accouchement</li>
        <li>Prévention et traitement des douleurs post-partum</li>
        <li>Amélioration du transit intestinal et réduction des douleurs digestives</li>
        <li>Accompagnement à la rééducation périnéale</li>
        <li>Soutien du bien-être émotionnel et réduction du stress</li>
      </ul>
      <p className="text-gray-700 mt-4">
        En consultant un ostéopathe, vous favorisez une récupération en douceur et vous offrez à votre corps les meilleures conditions pour retrouver son équilibre naturel après l’accouchement.
      </p>
      <h2 className="text-2xl font-semibold text-blue-900 mt-6">Prenez Soin de Votre Corps Pendant et Après la Grossesse</h2>
      <p className="text-gray-700 mt-4">
        L’ostéopathie est une méthode douce et naturelle qui accompagne la femme enceinte à chaque étape de sa maternité. En rétablissant l’équilibre corporel, elle contribue au bien-être de la future maman et du bébé, et facilite l’adaptation aux transformations du corps.
      </p>
      <p className="text-gray-700 mt-4 font-bold">
        Consultez un ostéopathe spécialisé en périnatalité pour une grossesse harmonieuse et une récupération optimale après l’accouchement.
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
    </div>
  );
};

export default OsteopathieFemmeEnceinte;
