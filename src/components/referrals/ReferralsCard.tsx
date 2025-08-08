import React from 'react';
import giftImg from '../../images/regalo.webp';

interface ReferralsCardProps {
  giftSrc?: string;
}

const ReferralsCard: React.FC<ReferralsCardProps> = ({ giftSrc }) => {
  const imageSrc = giftSrc || giftImg;

  return (
    <section className="relative rounded-2xl overflow-hidden border border-[#0d1117] shadow-lg">
      {/* Background gradient diagonal */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #00B7E3 0%, #002663 54%, #3E0B6B 100%)'
        }}
      />

      {/* Content */}
      <div className="relative z-10 p-6 sm:p-8 pr-24 sm:pr-32 md:pr-44">
        {/* Pill + dots */}
        <div className="flex items-start justify-between mb-6">
          <div className="inline-flex items-center gap-2 bg-black/55 text-white rounded-xl px-3 py-2">
            <span className="text-base">🎁</span>
            <span className="text-sm font-medium">Bono referidos</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-green-400"></span>
            <span className="w-3 h-3 rounded-full bg-gray-300"></span>
            <span className="w-3 h-3 rounded-full bg-gray-400"></span>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-white font-extrabold tracking-tight text-3xl sm:text-4xl mb-3">
          ¡REFERIDOS <span className="text-[#00B7E3]">HONDU</span>!
        </h2>

        {/* Description */}
        <p className="text-white/90 text-base sm:text-lg max-w-xl mb-6">
          Refiere a tus amigos y familiares y gana <span className="font-extrabold">BONOS</span> exclusivos.
        </p>

        {/* Socials */}
        <div className="flex items-center gap-4 mb-8">
          <button className="w-10 h-10 rounded-full bg-white/15 text-white font-bold">f</button>
          <button className="w-10 h-10 rounded-full bg-white/15 text-white font-bold">ig</button>
          <button className="w-10 h-10 rounded-full bg-white/15 text-white font-bold">in</button>
        </div>

        {/* CTA */}
        <button className="px-6 py-3 rounded-full bg-gradient-to-r from-[#95FB3F] to-[#46FC6D] text-gray-900 font-extrabold">Compartir</button>
      </div>

      {/* Gift image (pegada a la esquina, detrás del contenido) */}
      <div className="absolute bottom-0 right-0 z-0 w-[150px] sm:w-[200px] md:w-[240px] select-none pointer-events-none">
        <img src={imageSrc} alt="Regalo" className="w-full h-auto object-contain drop-shadow-2xl" />
      </div>
    </section>
  );
};

export default ReferralsCard;