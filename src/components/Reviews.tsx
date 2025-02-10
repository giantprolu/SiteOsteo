import { useEffect } from "react";

const Reviews = () => {
  useEffect(() => {
    // Charger dynamiquement le script Elfsight
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section id="Avis" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Avis Google</h2>

        {/* Section Avis Google avec Elfsight */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <div className="elfsight-app-11ae880f-00b2-46d6-83a1-df5762cd64da" data-elfsight-app-lazy></div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
