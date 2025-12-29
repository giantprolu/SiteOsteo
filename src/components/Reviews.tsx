import { useEffect } from "react";
import { Star } from 'lucide-react';

const Reviews = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section id="Avis" className="py-24 bg-white relative overflow-hidden">
      {/* Décoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <span className="inline-block bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent font-semibold text-sm uppercase tracking-wider mb-4">Témoignages</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Avis Google</h2>
          <div className="flex items-center justify-center gap-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-amber-400 fill-amber-400" />
            ))}
          </div>
        </div>

        {/* Section Avis Google avec Elfsight */}
        <div className="bg-gradient-to-br from-slate-50 to-teal-50 p-8 md:p-12 rounded-3xl shadow-lg border border-slate-100">
          <div className="elfsight-app-11ae880f-00b2-46d6-83a1-df5762cd64da" data-elfsight-app-lazy></div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
