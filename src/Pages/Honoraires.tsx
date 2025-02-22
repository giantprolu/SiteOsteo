const DouleursMusculoSquelettiques = () => {
  const handlePhoneClick = () => {
    window.location.href = 'tel:0666211563';
  };
    return (
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-3xl font-bold text-blue-900 mb-6">Honoraires </h1>
        <p className="text-gray-700 mt-4">
        Une consultation d’ostéopathie n’est pas remboursée par l’Assurance Maladie. 
        Cependant, certaines mutuelles prennent en charge en totalité ou en partie les frais engagés.
        <p>Une facture vous sera délivrée en fin de consultation permettant ainsi un remboursement par votre mutuelle.</p>
        Les règlements pourront s’effectuer par <strong>chèque</strong> ou <strong>espèces</strong>.
        </p>
      <h2 className="text-2xl font-semibold text-blue-900 mt-6">Honoraires pratiqués par votre ostéopathe :</h2>
      <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
        <li>Première consultation : 55€</li>
        <li>Consultation de suivi : 55€</li>
        <li>Sportif : 55€</li>
        <li>Femme enceinte : 55€</li>
        <li>Nourrisson : 55€</li>
        <li>Enfant : 55€</li>
      </ul>
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