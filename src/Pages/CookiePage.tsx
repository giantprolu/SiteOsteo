import { ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CookiePolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <button
          onClick={() => navigate(-1)}
          className="mb-8 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-800 transition-colors"
        >
          Retour
        </button>
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Cookies</h1>
        
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Utilisation des cookies</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Le site [Nom du site] ne dépose actuellement aucun cookie. Nous ne suivons aucune donnée personnelle, 
            et nous ne collectons pas d'informations via des cookies. Vous pouvez naviguer sur le site en toute tranquillité.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Types de cookies utilisés</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-gray-800 mb-2">Cookies strictement nécessaires</h3>
              <p className="text-gray-600">Ces cookies sont indispensables pour naviguer sur le site et utiliser ses fonctionnalités. Sans ces cookies, les services que vous avez demandés ne peuvent être fournis.</p>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-gray-800 mb-2">Cookies de performance</h3>
              <p className="text-gray-600">Ces cookies collectent des informations sur la manière dont les visiteurs utilisent le site, par exemple les pages les plus visitées. Ces données sont utilisées pour améliorer le fonctionnement du site.</p>
            </div>

            <div className="border-l-4 border-yellow-500 pl-4">
              <h3 className="font-semibold text-gray-800 mb-2">Cookies de fonctionnalité</h3>
              <p className="text-gray-600">Ces cookies permettent au site de se souvenir des choix que vous faites (comme votre nom d'utilisateur, votre langue ou la région où vous vous trouvez) et de fournir des fonctionnalités améliorées et plus personnelles.</p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-gray-800 mb-2">Cookies de ciblage ou publicitaires</h3>
              <p className="text-gray-600">Ces cookies sont utilisés pour afficher des publicités plus pertinentes pour vous et vos intérêts. Ils sont également utilisés pour limiter le nombre de fois que vous voyez une publicité et pour mesurer l'efficacité des campagnes publicitaires.</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Gestion des cookies</h2>
          <p className="text-gray-600 mb-6">
            Vous pouvez configurer votre navigateur pour refuser les cookies ou pour être informé lorsqu'un cookie est installé. 
            Cependant, le refus de certains cookies peut entraîner l'impossibilité d'accéder à certaines fonctionnalités du site.
          </p>
          
          <h3 className="font-semibold text-gray-800 mb-4">Pour plus d'informations sur la gestion des cookies, vous pouvez consulter les pages d'aide de votre navigateur :</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { name: 'Google Chrome', href: '#' },
              { name: 'Mozilla Firefox', href: '#' },
              { name: 'Internet Explorer', href: '#' },
              { name: 'Safari', href: '#' },
              { name: 'Opera', href: '#' }
            ].map((browser) => (
              <a
                key={browser.name}
                href={browser.href}
                className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
              >
                <span>{browser.name}</span>
                <ExternalLink size={16} />
              </a>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Responsabilité</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              [Nom de l'entreprise] ne saurait être tenue responsable des dommages directs et indirects causés au matériel de l'utilisateur, 
              lors de l'accès au site [Nom du site], et résultant soit de l'utilisation d'un matériel ne répondant pas aux spécifications indiquées, 
              soit de l'apparition d'un bug ou d'une incompatibilité.
            </p>
            <p>
              [Nom de l'entreprise] ne pourra également être tenue responsable des dommages indirects (tels par exemple qu'une perte de marché 
              ou perte d'une chance) consécutifs à l'utilisation du site [Nom du site].
            </p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Droit applicable et attribution de juridiction</h2>
          <p className="text-gray-600">
            Tout litige en relation avec l'utilisation du site [Nom du site] est soumis au droit français. 
            Il est fait attribution exclusive de juridiction aux tribunaux compétents de [ville].
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact</h2>
          <p className="text-gray-600 mb-6">
            Pour toute question relative aux mentions légales du site, vous pouvez nous contacter à l'adresse suivante : 
            <a href="mailto:[adresse e-mail de contact]" className="text-blue-600 hover:text-blue-800 ml-1">
              [adresse e-mail de contact]
            </a>
          </p>
          
          <p className="text-sm text-gray-500 italic">
            Ces mentions légales et informations sur les cookies sont susceptibles d'être modifiées à tout moment. 
            Nous vous invitons à les consulter régulièrement.
          </p>
        </section>
      </div>
    </div>
  );
};

export default CookiePolicy;