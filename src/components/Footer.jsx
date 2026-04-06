import React from 'react';

const Footer = () => {
  return (
    <footer className="footer bg-gray-900 text-gray-200 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Tatuaje Studio</h3>
            <p className="text-gray-400">
              Arte único en tatuajes personalizados. Desde realismo hasta estilos abstractos, cada diseño es una obra maestra que trasciende la piel.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Información de Contacto</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center space-x-3">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-.498.286a7 7 0 0011.174 0l-.497-.286a1 1 0 01-.502-1.21l1.498-4.493a1 1 0 01.948-.684H19a2 2 0 012 2v1a2 2 0 01-2 2h-1a1 1 0 00-.948.684l-.498.286a7 7 0 00-11.174 0l-.498-.286a1 1 0 00-.948-.684h-1a2 2 0 01-2-2V5z"></path>
                </svg>
                <span>Resbalon, Manabi</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <span>0957053576</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-5.436 0a3 3 0 10-4.348 5.196l-.866.577a3 3 0 00-4.348-5.196l-.866-.577zM13 16h6a2 2 0 002-2V6a2 2 0 00-2-2h-6a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                </svg>
                <span>tattoo@gmail.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Síguenos</h3>
            <div className="flex space-x-4">

  {/* Instagram */}
  <a href="https://www.instagram.com/jeff_tattoooo/" className="text-gray-400 hover:text-white transition-colors">
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5zm0 2h8.5C18.32 4 20 5.68 20 7.75v8.5c0 2.07-1.68 3.75-3.75 3.75h-8.5C5.68 20 4 18.32 4 16.25v-8.5C4 5.68 5.68 4 7.75 4zm8.75 1a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z"/>
    </svg>
  </a>

  {/* Facebook */}
  <a href="#" className="text-gray-400 hover:text-white transition-colors">
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M22 12a10 10 0 10-11.5 9.87v-6.99H7.9V12h2.6V9.8c0-2.57 1.54-4 3.9-4 1.13 0 2.3.2 2.3.2v2.5h-1.3c-1.28 0-1.68.8-1.68 1.62V12h2.86l-.46 2.88h-2.4v6.99A10 10 0 0022 12z"/>
    </svg>
  </a>

  {/* X (Twitter) */}
  <a href="#" className="text-gray-400 hover:text-white transition-colors">
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2H21l-6.5 7.43L22 22h-6.828l-5.35-7.01L3.5 22H1l6.93-7.93L2 2h6.828l4.84 6.4L18.244 2zm-2.39 18h1.89L8.3 4H6.28l9.574 16z"/>
    </svg>
  </a>

</div>
            
            <div className="mt-6 text-center text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Tatuaje Studio. Todos los derechos reservados.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;