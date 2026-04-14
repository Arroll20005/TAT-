import React, { useState } from 'react';

const Portfolio = () => {
  

  const portafolioItems = []
    for (let index = 0; index <= 10; index++) {
      portafolioItems.push({ id: `${index}`, src: `/images/gallery/${index}.jpg`, alt: 'Tatuaje de Realismo' });
     
      
    
    
   
  }

  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % portafolioItems.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + portafolioItems.length) % portafolioItems.length);
  };

  return (
    <section id="portfolio" className="portfolio py-10 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-200">Portafolio</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explora nuestro trabajo reciente y descubre el estilo que mejor se adapta a tu visión.
          </p>
        </div>

         {/* Carousel */}
         <div 
           id="default-carousel" 
           className="relative w-full" 
           data-carousel="slide"
         >
           {/* Carousel wrapper */}
           <div className="relative h-[500px] overflow-hidden rounded-base">
             {/* Slides */}
             {portafolioItems.map((item, index) => (
               <div
                 key={item.id}
                 className={`duration-700 ease-in-out ${
                   index === activeSlide 
                     ? 'block absolute inset-0' 
                     : 'hidden absolute inset-0'
                 }`}
                 data-carousel-item
               >
                 <img 
                   src={item.src} 
                   alt={item.alt} 
                   className="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-contain"
                 />
               </div>
             ))}

            {/* Navigation buttons */}
            <button 
              type="button" 
              className="absolute top-1/2 left-2 -translate-y-1/2 bg-gray-800 bg-opacity-50 rounded-full p-2 text-white hover:bg-gray-800 hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-opacity-75"
              data-carousel-button="previous"
              onClick={prevSlide}
            >
              <span className="sr-only">Previous slide</span>
              <svg 
                className="h-5 w-5" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 6 10"
              >
                <path 
                  stroke="currentColor" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M5 1 1 5l4 4"
                />
              </svg>
            </button>
            <button 
              type="button" 
              className="absolute top-1/2 right-2 -translate-y-1/2 bg-gray-800 bg-opacity-50 rounded-full p-2 text-white hover:bg-gray-800 hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-opacity-75"
              data-carousel-button="next"
              onClick={nextSlide}
            >
              <span className="sr-only">Next slide</span>
              <svg 
                className="h-5 w-5" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 6 10"
              >
                <path 
                  stroke="currentColor" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="m1 9 4-4-4-4"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;