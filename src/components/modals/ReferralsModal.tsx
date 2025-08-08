import React from 'react';
import giftFallback from '../../images/diamante.webp';

interface ReferralsModalProps {
  isOpen: boolean;
  onClose: () => void;
  giftSrc?: string;
}

const ReferralsModal: React.FC<ReferralsModalProps> = ({ isOpen, onClose, giftSrc }) => {
  if (!isOpen) return null;

  const imageSrc = giftSrc || giftFallback;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="w-full max-w-3xl rounded-[24px] overflow-hidden relative shadow-xl">
        {/* Gradient background exacto */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(90deg, #00B7E3 0%, #002663 54%, #3E0B6B 100%)'
          }}
        />

        {/* Capa de contenido */}
        <div className="relative p-6 sm:p-8">
          {/* Header pill y dots */}
          <div className="flex items-start justify-between mb-6">
            <div className="inline-flex items-center gap-2 bg-black/50 text-white rounded-xl px-3 py-2">
              <span className="text-lg">🎁</span>
              <span className="text-sm font-medium">Bono referidos</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-green-400"></span>
              <span className="w-3 h-3 rounded-full bg-gray-300"></span>
              <span className="w-3 h-3 rounded-full bg-gray-400"></span>
            </div>
          </div>

          {/* Título grande */}
          <h2 className="text-white font-extrabold tracking-tight text-3xl sm:text-4xl md:text-5xl mb-3">
            ¡REFERIDOS <span className="text-[#00B7E3]">HONDU</span>!
          </h2>

          {/* Descripción */}
          <p className="text-white/90 text-lg sm:text-xl max-w-xl mb-6">
            Refiere a tus amigos y familiares y gana <span className="font-extrabold">BONOS</span> exclusivos.
          </p>

          {/* Redes sociales */}
          <div className="flex items-center gap-4 mb-8">
            <button className="w-10 h-10 rounded-full bg-white/15 text-white font-bold">f</button>
            <button className="w-10 h-10 rounded-full bg-white/15 text-white font-bold">ig</button>
            <button className="w-10 h-10 rounded-full bg-white/15 text-white font-bold">in</button>
          </div>

          {/* CTA */}
          <button className="px-6 py-3 rounded-full bg-gradient-to-r from-[#95FB3F] to-[#46FC6D] text-gray-900 font-extrabold">Compartir</button>

          {/* Close */}
          <button onClick={onClose} className="absolute top-4 right-4 text-white/80 hover:text-white text-xl" aria-label="Cerrar">✕</button>
        </div>

        {/* Imagen Regalo */}
        <div className="absolute bottom-0 right-4 sm:right-6 md:right-8 w-[180px] sm:w-[220px] md:w-[260px] select-none pointer-events-none">
          <img src={imageSrc} alt="Regalo" className="w-full h-auto object-contain drop-shadow-2xl" />
        </div>
      </div>
    </div>
  );
};

export default ReferralsModal;