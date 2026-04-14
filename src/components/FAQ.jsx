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