import React from 'react';

const AboutArtist = () => {
  return (
    <section className="about-artist py-20 bg-black text-white">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-white">Sobre el Artista</h2>
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
             Este artista tatuador se especliza en hacer de tu piel una obra de arte andante. Con un talento y un pulso imprecindible
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <img src="/images/artist/perfil.jpeg" alt="Retrato del artista tatuador" className="rounded-lg shadow-xl w-full h-auto" />
          </div>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2zm0 10c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-300">Especialidades</h3>
                <p className="text-gray-400">Realismo</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-1.1.45-2.076 1.206-2.856M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.45.184-.875.512-1.182M12 9a1.998 1.998 0 011.414-.586l1.293-1.293A1.998 1.998 0 0115.414 6H18a2 2 0 012 2v1a1.998 1.998 0 01-.586 1.414l-1.293 1.293A1.998 1.998 0 0115 9.414V12a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-300">Formación</h3>
                <p className="text-gray-400">Aprendizaje autodidacta y formacion con tatuadores de experiencia</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.768 0 3.42 3.42 0 011.946.806 3.42 3.42 0 003.142 1.874 3.42 3.42 0 01-.468 3.42 3.42 3.42 0 00-3.42 3.42 3.42 3.42 0 01-3.42 0 3.42 3.42 0 00-3.142-1.874 3.42 3.42 0 00-.468-3.42 3.42 3.42 0 01.806-1.946V4h-4z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-300">Estilo de Trabajo</h3>
                <p className="text-gray-400">Enfoque personalizado, atención al detalle, ambiente profesional y acogedor</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutArtist;