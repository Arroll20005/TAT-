import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

const LeadForm = () => {
  
  const [state, handleSubmit]= useForm("xqewkbld");

  return (
    <section id="contacto-form" className="lead-form py-20 bg-gray-900 ">
      <div className= "flex justify-center flex-col items-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-200 text-center
        mb-3">
          Mándame un DM a mis redes para mas informacion o rellena el formulario
        </h2>
       <div className="flex justify-center gap-4 p-6">
        <div className="flex items-center justify-center w-20 h-20 bg-green-500 hover:bg-green-600 rounded-full shadow-lg transition-all duration-200">
          <a
            href="https://wa.me/593987858360?text=Hola%20quiero%20info"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 bg-green-500 hover:bg-green-600 rounded-full shadow-lg transition-all duration-200"
          >
            <svg
              className="h-6 w-6 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.52 3.48A11.91 11.91 0 0012.05 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.15 1.6 5.96L0 24l6.32-1.65a11.86 11.86 0 005.73 1.46h.01c6.55 0 11.89-5.34 11.89-11.9 0-3.18-1.24-6.17-3.43-8.43zM12.06 21.3c-1.8 0-3.56-.48-5.1-1.38l-.36-.21-3.75.98 1-3.65-.24-.38a9.3 9.3 0 01-1.43-4.97c0-5.14 4.19-9.33 9.34-9.33 2.49 0 4.83.97 6.59 2.73a9.26 9.26 0 012.74 6.6c0 5.14-4.19 9.33-9.34 9.33zm5.17-7.02c-.28-.14-1.65-.81-1.9-.9-.26-.1-.45-.14-.64.14-.19.28-.73.9-.9 1.08-.16.19-.33.21-.61.07-.28-.14-1.2-.44-2.28-1.4-.84-.75-1.4-1.67-1.57-1.95-.16-.28-.02-.43.12-.57.13-.13.28-.33.42-.5.14-.16.19-.28.28-.47.09-.19.05-.36-.02-.5-.07-.14-.64-1.54-.88-2.1-.23-.56-.47-.48-.64-.49h-.55c-.19 0-.5.07-.76.36-.26.28-1 1-1 2.43s1.02 2.8 1.16 3c.14.19 2 3.06 4.85 4.29.68.29 1.2.46 1.61.59.68.22 1.3.19 1.79.12.55-.08 1.65-.67 1.88-1.32.23-.66.23-1.22.16-1.33-.07-.12-.26-.19-.54-.33z" />
            </svg>
          </a>
        </div>
       
        <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-full shadow-lg transition-all duration-200">
          <a
            href="https://www.instagram.com/jeff_tattoooo/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:opacity-90 rounded-full shadow-lg transition-all duration-200"
          >
            <svg
              className="h-6 w-6 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5zm0 2h8.5C18.55 4 20 5.45 20 7.75v8.5C20 18.55 18.55 20 16.25 20h-8.5C5.45 20 4 18.55 4 16.25v-8.5C4 5.45 5.45 4 7.75 4zm9.25 1.5a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z" />
            </svg>
          </a>
        </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Lista tu Cita de Tatuaje
          </h2>
          <p className="text-gray-100 max-w-2xl mx-auto">
            Completa el formulario y te contactaremos para agendar una cita para
            tu tatuaje!
          </p>
        </div>

        {/* Form Status Message */}
        {state.succeded === "success" && (
          <div className="mb-8 p-4 bg-green-100 border border-green-200 rounded-lg text-green-800">
            ¡Gracias por tu mensaje! .
          </div>
        )}

        {state.succeded === "error" && (
          <div className="mb-8 p-4 bg-red-100 border border-red-200 rounded-lg text-red-800">
            Ocurrió un error al enviar el formulario. Por favor, intenta
            nuevamente.
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="bg-black rounded-xl shadow-md p-8 max-w-4xl mx-auto space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Nombre completo
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                placeholder="Tu nombre completo"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                placeholder="tu@email.com"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Teléfono de contacto
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              placeholder="0957053576"
            />
          </div>

          <div>
            <label
              htmlFor="datePreference"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Preferencia de fecha para consulta
            </label>
            <input
              type="date"
              id="datePreference"
              name="datePreference"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>
          <div>
            <label> Comentarios</label>
            <textarea
              id="comments"
              name="comments"
              className="w-full h-32 px-4 py-3 border rounded-lg"
              placeholder="Escribe tus comentarios aquí..."
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={state.submitting}
              className={`bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-transform transform 
                ${state.submitting ? "opacity-70 cursor-not-allowed" : "hover:scale-105"}`}
            >
              {state.submitting ? "Enviando..." : "Solicitar Consulta"}
            </button>
          </div>
        </form>

        <div className="mt-10 text-center text-gray-600">
          <p>¿Prefieres contactarnos directamente?</p>
          <p className="mt-2">
            <a
              href="mailto:info@tatuajestudio.cl"
              className="text-red-600 hover:underline font-medium"
            >
              tattoo@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
