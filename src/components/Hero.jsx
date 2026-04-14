import React from 'react';

const Hero = () => {
  return (
    <section className="hero min-h-[90vh] bg-gradient-to-b from-black/90 to-black bg-cover bg-center" style={{ backgroundImage: "url('/images/tatu-hero.png')" }}>
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center text-white">
        <div >
           <img src="../../public/images/icons/logoo.png" alt="Logo de Tatuajes" />
         </div>
      
        <h1 className="text-xl mb-8 max-w-2xl mx-auto text-gray-30 [text-shadow:2px_2px_0_black]">
          Tatuajes personalizados que cuentan tu historia única. Estilos desde realista hasta abstracto.
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-transform transform hover:scale-105"
          onClick={() => document.getElementById('contacto-form').scrollIntoView({behavior: 'smooth'})}>
            Contactame
          </button>
          <button className="border border-white/20 hover:border-white/40 text-white font-bold py-3 px-8 rounded-lg transition-transform transform hover:scale-105"
          onClick={() => document.getElementById('portfolio').scrollIntoView({behavior: 'smooth'})}>
            Ver Portafolio
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;