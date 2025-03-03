import { Helmet } from "react-helmet";
const OsteopathieFemmeEnceinte = () => {
  const handlePhoneClick = () => {
    window.location.href = 'tel:0666211563';
  };
  return (
    <div className="container mx-auto px-4 py-20">
      <Helmet>
        <title>Ostéopathie de la femme enceinte</title>
        <link rel="canonical" href="https://www.philipot-osteo-aigondigne-niort.fr/motifs/osteopathie-de-la-femme-enceinte" />
      </Helmet>
      <h1 className="text-3xl font-bold text-blue-900 mb-6">Ostéopathie de la femme enceinte</h1>
      <p className="text mb-8">
      La grossesse est une période de profonds changements pour le corps d’une femme. L’ostéopathie offre une approche douce et naturelle pour soulager les tensions et favoriser un bien-être optimal jusqu’à l’accouchement.
      </p>
      
      <h2 className="text-2xl font-semibold text-blue-900 mt-6">Pour qui s’adresse l’ostéopathie de la femme enceinte ?</h2>
      <p className="text-gray-700 mt-4">Les maux et douleurs liés à la grossesse sont nombreux et diffèrent d’une femme à l’autre.
        Toutefois, consulter un ostéopathe permet de soulager la plupart des douleurs causées par la grossesse. 
        Que ce soit pour une première grossesse ou pas, l’ostéopathie permet d’apporter un soutien adapté à chaque femme enceinte. 
      </p>
      
      <h2 className="text-2xl font-semibold text-blue-900 mt-6">Pour quoi consulter un ostéopathe ?</h2>
      <p className="text-gray-700 mt-4">
      L’ostéopathie permet de soulager de nombreux troubles courants liés à la grossesse :
      </p>
      <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
        <li><strong>Douleurs et tensions musculaires</strong> : lombalgie, sciatique, douleurs dorsales et cervicales, douleurs costales et sensation d’oppression thoracique, douleurs au niveau du bassin et du coccyx, etc.</li>
        <li><strong>Troubles digestifs et circulatoires</strong> : nausées, reflux gastro-œsophagiens, ballonnements, constipation et troubles intestinaux, jambes lourdes, œdèmes, mauvaise circulation sanguine</li>
        <li><strong>Préparation à l’accouchement</strong> : travail sur la mobilité du bassin</li>
      </ul>

      <h2 className="text-2xl font-semibold text-blue-900 mt-6">Quand consulter un ostéopathe ?</h2>
      <p className="text-gray-700 mt-4">
      L’ostéopathie s’adresse à toutes les femmes enceintes, quel que soit le stade de leur grossesse. 
      </p>
      <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
        <li><strong>En cas de douleurs ou d’inconforts</strong></li>
        <li><strong>Avant l’accouchement</strong></li>
        <li><strong>Après l’accouchement</strong> : soulager les tensions post-partum</li>
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
    </div>
  );
};

export default OsteopathieFemmeEnceinte;
