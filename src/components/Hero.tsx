import { Phone } from 'lucide-react';

const Hero = () => {
  const handlePhoneClick = () => {
    window.location.href = 'tel:0666211563';
  };
  return (
    <section
      id="accueil"
      className="min-h-screen relative flex items-center"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-blue-900/40 backdrop-blur-sm"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Ostéopathe à Aigondigné
            <span className="block text-2xl md:text-3xl mt-2">Quentin Philipot D.O.</span>
          </h1>
          <div className="text-lg md:text-xl text-white mb-6">
          <a
          
            href="https://maps.app.goo.gl/bjS5DPHacV9mvPqb6"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg md:text-xl text-white hover:text-blue-300 transition-colors"
            >
            32 Rte Ricardo, 79370 Aigondigné
            </a>
          </div>
            
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://www.doctolib.fr/osteopathe/aigondigne/quentin-philipot"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors text-center text-lg"
            >
              Prendre rendez-vous
            </a>
            
            <button onClick={handlePhoneClick}
              className="flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-3 rounded-md hover:bg-white/10 transition-colors text-lg"
            >
              <Phone size={20} />
              06 66 21 15 63
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;