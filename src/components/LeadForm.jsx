import React, { useState } from 'react';

const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    tattooDescription: '',
    budget: '',
    datePreference: ''
  });
  
  const [formStatus, setFormStatus] = useState(null); // null, 'success', 'error'
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus(null);
    
    // Simulate API call (replace with actual form submission logic)
    try {
      // In a real app, you would send this data to your backend or a service like Formspree, Netlify Forms, etc.
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simulate successful submission
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        tattooDescription: '',
        budget: '',
        datePreference: ''
      });
    } catch (error) {
      setFormStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="lead-form py-20 bg-gray-900">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Lista tu Cita de Tatuaje</h2>
          <p className="text-gray-100 max-w-2xl mx-auto">
            Completa el formulario abajo para comenzar el proceso de diseño de tu tatuaje personalizado.
          </p>
        </div>
        
        {/* Form Status Message */}
        {formStatus === 'success' && (
          <div className="mb-8 p-4 bg-green-100 border border-green-200 rounded-lg text-green-800">
            ¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto para agendar tu consulta.
          </div>
        )}
        
        {formStatus === 'error' && (
          <div className="mb-8 p-4 bg-red-100 border border-red-200 rounded-lg text-red-800">
            Ocurrió un error al enviar el formulario. Por favor, intenta nuevamente.
          </div>
        )}
        
        <form 
          onSubmit={handleSubmit}
          className="bg-black rounded-xl shadow-md p-8 max-w-4xl mx-auto space-y-6"
       >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Nombre completo
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                placeholder="Tu nombre completo"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                placeholder="tu@email.com"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                Teléfono de contacto
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                placeholder="0957053576"
              />
          </div>
          
         
            
            <div>
              <label htmlFor="datePreference" className="block text-sm font-medium text-gray-300 mb-2">
                Preferencia de fecha para consulta
              </label>
              <input
                type="date"
                id="datePreference"
                name="datePreference"
                value={formData.datePreference}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>
         
          
        


        
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-transform transform 
                ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:scale-105'}`}
            >
              {isSubmitting ? 'Enviando...' : 'Solicitar Consulta'}
            </button>
          </div>
        </form>
        
        <div className="mt-10 text-center text-gray-600">
          <p>¿Prefieres contactarnos directamente?</p>
          <p className="mt-2">
            <a href="mailto:info@tatuajestudio.cl" className="text-red-600 hover:underline font-medium">tattoo@gmail.com</a>
          </p>
        </div>
      </div>

   </section>
  );
};

export default LeadForm;