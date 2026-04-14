import { useEffect, useState } from "react";

export default function ModalPromo() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => setOpen(true), 500); // aparece después de 0.5s
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      
      <div className="bg-[#1a1a1a] text-white p-8 rounded-2xl w-[90%] max-w-md text-center relative shadow-2xl">
        
        {/* Botón cerrar */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-3 right-3 text-white text-xl hover:text-gray-400"
        >
          ✕
        </button>

        {/* Título */}
        <h1 className="text-4xl font-serif tracking-wide mb-2">
          JEFF
        </h1>
        <h2 className="text-3xl font-serif mb-4">
          TATTOO PROMO
        </h2>

        <p className="text-sm text-gray-300 mb-6">
          (APLICA SOLO PARA TATUAJES PEQUEÑOS)
        </p>

        {/* Precios */}
        <div className="space-y-2 text-lg">
          <div className="flex justify-between border-b border-gray-600 pb-1">
            <span>1 TATUAJE</span>
            <span>$10</span>
          </div>
          <div className="flex justify-between border-b border-gray-600 pb-1">
            <span>2 TATUAJES</span>
            <span>$15</span>
          </div>
          <div className="flex justify-between border-b border-gray-600 pb-1">
            <span>3 TATUAJES</span>
            <span>$20</span>
          </div>
        </div>

        {/* Info extra */}
        <p className="mt-6 text-sm text-gray-400">
          DISEÑOS LINEALES (SIN SOMBRAS)
        </p>

        <div className="mt-4 text-sm text-gray-300">
          <p>📞 0987858860</p>
          <p>IG: @jeff_tatto000</p>
        </div>

        {/* Botón acción */}
        <a
          href="https://wa.me/593987858860?text=Hola%20quiero%20info%20de%20la%20promo"
          target="_blank"
          className="block mt-6 bg-white text-black py-2 rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          Reservar por WhatsApp
        </a>
      </div>
    </div>
  );
}