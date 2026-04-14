import React from 'react';

const testimonials = [
  {
    id: 1,
    name: "Arlin Paz",
    rating: 5,
    text: "Muy bueno el trabajo que hace este artista. Mis respetos",
    image: "/images/testimonials/1.jpg"
  },
  {
    id: 2,
    name: "Hitler Yugasaki",
    rating: 5,
    text: "Me perforo bien rico la piel. Felicidades, muy recomendado tatuarse donde este negrito",
    image: "/images/testimonials/2.jpg"
  },
  {
    id: 3,
    name: "Mia Kalifa",
    rating: 4,
    text: "El mejor de todos!!! No puedo esperar a gastarme el sueldo en otro tatuaje",
    image: "/images/testimonials/3.jpg"
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials py-20 bg-black text-white">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-200">Sigume en Instagram</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experiencias reales de personas que confiaron en nuestro arte para marcar sus historias en la piel.
          </p>
        </div>
        
        <div className="grid gap-8">
          {/* Featured testimonial */}
          <div className="lg:col-span-1 bg-orange-400 rounded-xl shadow-md p-6">
            <div className="flex items-start space-x-4 mb-4">
              <img 
                src={testimonials[0].image} 
                alt={testimonials[0].name} 
                className="w-16 h-16 rounded-full object-cover border-2 border-red-600"
              />
              <div>
                <h3 className="font-bold text-gray-900">{testimonials[0].name}</h3>
                <div className="flex items-center space-x-2 mt-1">
                  {[...Array(5)].map((_, index) => (
                    <svg
                      key={index}
                      className={`h-4 w-4 ${index < testimonials[0].rating ? 'text-yellow-400' : 'text-gray-300'}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.218 4.424a1 1 0 01-.442 1.317l-2.406.93a1 1 0 01-1.064-.058l-1.47-4.276a1 1 0 00-.363-1.118L6.032 7.728a1 1 0 01.588-1.81l3.976-2.888z"
                      />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 italic mt-3">"{testimonials[0].text}"</p>
              </div>
            </div>
          </div>
          
          {/* Additional testimonials */}
          <div className="grid lg:grid-cols-2 lg:gap-6 mt-6 lg:mt-0">
            {testimonials.slice(1).map(testimonial => (
              <div 
                key={testimonial.id} 
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start space-x-3 mb-3">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover border-2 border-red-600"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                    <div className="flex items-center space-x-1 mt-1">
                      {[...Array(5)].map((_, index) => (
                        <svg
                          key={index}
                          className={`h-3 w-3 ${index < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.218 4.424a1 1 0 01-.442 1.317l-2.406.93a1 1 0 01-1.064-.058l-1.47-4.276a1 1 0 00-.363-1.118L6.032 7.728a1 1 0 01.588-1.81l3.976-2.888z"
                          />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-600 italic text-sm mt-2">"{testimonial.text}"</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;