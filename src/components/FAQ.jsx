import React, { useState } from 'react';

const faqItems = [
  {
    id: 1,
    question: "¿Duele mucho hacerse un tatuaje?",
    answer: "El nivel de dolor varía según la ubicación y tu tolerancia personal. Las áreas con más terminaciones nerviosas o menos grasa (como costillas, tobillos o dedos) suelen ser más sensibles. Nuestro artista trabaja con técnicas para minimizar el malestar y siempre puedes pedir descansos durante la sesión."
  },
  {
    id: 2,
    question: "¿Cuánto tiempo tarda en sanar un tatuaje?",
    answer: "La sanación superficial suele tomar 2-3 semanas, mientras que la sanación completa de las capas más profundas puede tomar hasta 4-6 meses. Durante las primeras semanas es crucial seguir las indicaciones de cuidado post-tatuaje para asegurar una buena curación y mantener la calidad del diseño."
  },
  {
    id: 3,
    question: "¿Necesito preparar algo antes de mi cita?",
    answer: "Sí, te recomendamos: hidratarte bien en los días previos, evitar alcohol y aspirina 24 horas antes, dormir bien la noche anterior, comer algo antes de venir, y venir con la piel limpia y sin lociones o perfumes en el área a tatuar."
  },
  {
    id: 4,
    question: "¿Puedo traer mi propio diseño?",
    answer: "Absolutamente. Muchos clientes llegan con ideas o bocetos que quieren desarrollar. Nuestro artista trabajará contigo para adaptar tu diseño al medio de la piel, asegurando que se vea bien y envejezca correctamente. También podemos crear un diseño completamente original basado en tu descripción."
  },
  {
    id: 5,
    question: "¿Cuánto cuesta un tatuaje?",
    answer: "Los precios varían según tamaño y tiempo requerido.  materiales."
  },
  {
    id: 6,
    question: "¿Qué medidas de higiene siguen en el estudio?",
    answer: "Seguimos protocolos estrictos de higiene y seguridad: uso de equipos esterilizados de un solo uso, guantes cambiados frecuentemente, superficies desinfectadas entre clientes, y cumplimiento total de las normas sanitarias locales. Tu seguridad es nuestra prioridad máxima."
  }
];

const FAQ = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

return (
    <section className="faq py-20 bg-black text-white relative">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="text-center mb-16">
           <h2 className="text-3xl font-bold mb-6 text-gray-900">Preguntas Frecuentes</h2>
           <p className="text-gray-600 max-w-2xl mx-auto">
             Resolvemos las dudas más comunes sobre el proceso de tatuaje para que te sientas cómodo y informado.
           </p>
         </div>
         
         {/* WhatsApp Icon */}
        <div className="absolute top-6 right-20 z-10">
  <a
    href="https://wa.me/5491112345678"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center w-12 h-12 bg-green-500 hover:bg-green-600 rounded-full shadow-lg transition-all duration-200"
  >
    <svg
      className="h-6 w-6 text-white"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M20.52 3.48A11.91 11.91 0 0012.05 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.15 1.6 5.96L0 24l6.32-1.65a11.86 11.86 0 005.73 1.46h.01c6.55 0 11.89-5.34 11.89-11.9 0-3.18-1.24-6.17-3.43-8.43zM12.06 21.3c-1.8 0-3.56-.48-5.1-1.38l-.36-.21-3.75.98 1-3.65-.24-.38a9.3 9.3 0 01-1.43-4.97c0-5.14 4.19-9.33 9.34-9.33 2.49 0 4.83.97 6.59 2.73a9.26 9.26 0 012.74 6.6c0 5.14-4.19 9.33-9.34 9.33zm5.17-7.02c-.28-.14-1.65-.81-1.9-.9-.26-.1-.45-.14-.64.14-.19.28-.73.9-.9 1.08-.16.19-.33.21-.61.07-.28-.14-1.2-.44-2.28-1.4-.84-.75-1.4-1.67-1.57-1.95-.16-.28-.02-.43.12-.57.13-.13.28-.33.42-.5.14-.16.19-.28.28-.47.09-.19.05-.36-.02-.5-.07-.14-.64-1.54-.88-2.1-.23-.56-.47-.48-.64-.49h-.55c-.19 0-.5.07-.76.36-.26.28-1 1-1 2.43s1.02 2.8 1.16 3c.14.19 2 3.06 4.85 4.29.68.29 1.2.46 1.61.59.68.22 1.3.19 1.79.12.55-.08 1.65-.67 1.88-1.32.23-.66.23-1.22.16-1.33-.07-.12-.26-.19-.54-.33z"/>
    </svg>
  </a>
</div>
         
         <div className="max-w-3xl mx-auto space-y-4">
          {faqItems.map(item => (
            <div key={item.id} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              <div
                className={`flex items-center justify-between px-6 py-4 cursor-pointer hover:bg-gray-50 transition-colors 
                  ${expandedId === item.id ? 'bg-red-50 border-red-200' : ''}`}
                onClick={() => toggleExpand(item.id)}
              >
                <h3 className="text-lg font-medium text-gray-900 flex-1">
                  {item.question}
                </h3>
                <svg
                  className={`h-5 w-5 text-gray-500 transition-transform duration-200 
                    ${expandedId === item.id ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              
              {expandedId === item.id && (
                <div className="px-6 py-4 text-gray-600 border-t border-gray-200">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;