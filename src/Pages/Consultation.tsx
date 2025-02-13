const DouleursMusculoSquelettiques = () => {
  const handlePhoneClick = () => {
    window.location.href = 'tel:0666211563';
  };
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">Ostéopathie : Soulagement Naturel et Efficace</h1>
      <p className="text-gray-700">
        L'ostéopathie est de plus en plus reconnue pour son efficacité dans le traitement des douleurs musculo-squelettiques. Que vous souffriez de douleurs dorsales, cervicales, lombaires, articulaires ou musculaires, l’ostéopathie offre une solution naturelle pour soulager vos maux et prévenir leur réapparition.
      </p>
      <p className="text-gray-700 mt-4">
        Les douleurs musculo-squelettiques touchent une large partie de la population, des adultes actifs aux personnes âgées en passant par les sportifs. Elles peuvent se manifester par des tensions musculaires, des raideurs articulaires, des inflammations ou des douleurs persistantes. Ces troubles sont souvent liés à une mauvaise posture prolongée, à des gestes répétitifs, à un traumatisme, ou encore au stress et à l’anxiété.
      </p>
      
      <h2 className="text-2xl font-semibold text-blue-900 mt-6">Quelles sont les causes des douleurs musculo-squelettiques ?</h2>
      <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
        <li>Mauvaises postures prolongées (travail sédentaire, station assise prolongée, travail sur écran)</li>
        <li>Faux mouvements, chutes et traumatismes (accident, coup du lapin, entorses)</li>
        <li>Surmenage musculaire (sport intense, gestes répétitifs, tendinites)</li>
        <li>Tensions liées au stress et à l’anxiété (contractures, migraines, douleurs diffuses)</li>
        <li>Vieillissement et pathologies dégénératives (arthrose, lombalgie chronique, raideurs articulaires)</li>
      </ul>
      <h2 className="text-2xl font-semibold text-blue-900 mt-6">L'ostéopathie s'avère également bénéfique pour divers troubles</h2>
      <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
        <li>Problèmes digestifs (ballonnements, constipation, reflux gastriques)</li>
        <li>Troubles urinaires (incontinence, rétention d'urine, douleurs pelviennes)</li>
        <li>Problèmes gynécologiques (règles douloureuses, troubles du cycle menstruel, douleurs pelviennes)</li>
        <li>Affections respiratoires (asthme, bronchites, difficultés respiratoires)</li>
        <li>Céphalées (migraines, tensions au niveau de la tête et du cou)</li>
        <li>Troubles ORL (sinusites, otites, douleurs cervicales liées aux problèmes ORL)</li>
      </ul>
      <h2 className="text-2xl font-semibold text-blue-900 mt-6">Comment l’ostéopathie peut-elle soulager vos douleurs musculo-squelettiques ?</h2>
      <p className="text-gray-700 mt-4">
        L’ostéopathie est une approche globale qui vise à restaurer l’équilibre du corps en libérant les tensions musculaires, en améliorant la mobilité articulaire et en stimulant la circulation sanguine. Grâce à des manipulations précises et adaptées, l’ostéopathe aide à :
      </p>
      <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
        <li>✅ Soulager efficacement les douleurs dorsales, cervicales et lombaires</li>
        <li>✅ Restaurer la mobilité et la souplesse des articulations</li>
        <li>✅ Réduire les tensions musculaires et prévenir les récidives</li>
        <li>✅ Améliorer la posture pour limiter les contraintes mécaniques</li>
        <li>✅ Apporter des conseils ergonomiques et des exercices adaptés</li>
      </ul>
      
      <h2 className="text-2xl font-semibold text-blue-900 mt-6">Pourquoi consulter un ostéopathe pour vos douleurs musculo-squelettiques ?</h2>
      <p className="text-gray-700 mt-4">
        L’ostéopathie ne se contente pas de traiter les symptômes, elle s’attaque aux causes sous-jacentes des douleurs. Une prise en charge personnalisée permet d’améliorer durablement votre qualité de vie en évitant la chronicité des douleurs.
      </p>
      <p className="text-gray-700 mt-4 font-bold">
        Consultez un ostéopathe spécialisé pour un traitement naturel et efficace de vos douleurs musculo-squelettiques.
      </p>
      <p className="text-gray-700 mt-6 italic">2024 : « Comment traiter les tendinites et les blessures musculaires ? » - CFPCO</p>
      <p className="text-gray-700 mt-6 italic">2022 : « Manipulations des nerfs périphériques… Ou pas ? Prise en charge des sciatiques et cruralgies en thérapie manuelle » - CFPCO</p>
      <p className="text-gray-700 mt-6 italic">2022 : « E-Learning - Neurosciences de la douleur » - CFPCO</p>

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
