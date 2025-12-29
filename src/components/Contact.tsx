import { MapPin, Phone, Clock, Mail, Calendar, ChevronRight, ExternalLink } from 'lucide-react';

const Contact = () => {
  const handlePhoneClick = () => {
    window.location.href = 'tel:0666211563';
  };
  const handleMailClick = () => {
    window.location.href = 'mailto:philipot.osteo@gmail.com';
  };

  return (
    <section id="contacte" className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Décoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <span className="inline-block bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent font-semibold text-sm uppercase tracking-wider mb-4">Nous contacter</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Contact</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Informations de contact */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-slate-100">
            <div className="space-y-8">
              {/* Adresse */}
              <div className="group flex items-start gap-5">
                <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform flex-shrink-0">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2">Adresse</h3>
                  <a
                    href="https://maps.app.goo.gl/bjS5DPHacV9mvPqb6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-teal-600 transition-colors flex items-center gap-2"
                  >
                    32 Rte Ricardo, 79370 Aigondigné
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Téléphone */}
              <div className="group flex items-start gap-5">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform flex-shrink-0">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2">Téléphone</h3>
                  <button
                    onClick={handlePhoneClick}
                    className="text-slate-600 hover:text-teal-600 transition-colors font-medium"
                  >
                    06 66 21 15 63
                  </button>
                </div>
              </div>

              {/* Email */}
              <div className="group flex items-start gap-5">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform flex-shrink-0">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2">Email</h3>
                  <button
                    onClick={handleMailClick}
                    className="text-slate-600 hover:text-teal-600 transition-colors"
                  >
                    philipot.osteo@gmail.com
                  </button>
                </div>
              </div>

              {/* Horaires */}
              <div className="group flex items-start gap-5">
                <div className="w-14 h-14 bg-gradient-to-br from-violet-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform flex-shrink-0">
                  <Clock className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-3">Horaires</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between gap-8 text-slate-600">
                      <span>Lundi - Vendredi</span>
                      <span className="font-medium text-slate-900">8h30 - 19h00</span>
                    </div>
                    <div className="flex justify-between gap-8 text-slate-600">
                      <span>Samedi</span>
                      <span className="font-medium text-slate-900">8h30 - 13h00</span>
                    </div>
                    <div className="flex justify-between gap-8 text-slate-600">
                      <span>Dimanche</span>
                      <span className="font-medium text-rose-500">Fermé</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bouton RDV */}
            <div className="mt-10">
              <a
                href="https://www.doctolib.fr/osteopathe/aigondigne/quentin-philipot"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-lg shadow-teal-500/25 hover:-translate-y-1"
              >
                <Calendar className="w-6 h-6" />
                Prendre rendez-vous
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Carte */}
          <div className="h-[500px] lg:h-full min-h-[400px] rounded-3xl overflow-hidden shadow-lg border border-slate-100">
            <iframe
              title="Cabinet location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2757.0286098321803!2d-0.27682239999999997!3d46.2894058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4807490761fb5771%3A0x374c18b0e48f9473!2sQuentin%20Philipot%20Ost%C3%A9opathe%20D.O.!5e0!3m2!1sfr!2sfr!4v1739222993571!5m2!1sfr!2sfr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;