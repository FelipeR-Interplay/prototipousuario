import React from 'react';
import { UserInfo } from '../../types/index';
import avatarImage from '../../images/avatar.png';
import avatarMarco from '../../images/avatarmarco.png';
import { Star } from 'lucide-react';

interface AvatarSectionProps {
  userInfo: UserInfo;
  nivel: string;
  puntos: number;
  nivelActual: number;
  puntosRequeridos: number;
}

const AvatarSection: React.FC<AvatarSectionProps> = ({ userInfo, nivel, puntos, nivelActual, puntosRequeridos }) => {
  const progreso = Math.min((puntos / puntosRequeridos) * 100, 100);

  return (
    <section className="rounded-2xl p-0 text-center bg-transparent">
      {/* Wrapper del tamaño del marco (sin recortes) */}
      <div className="relative mx-auto w-32 h-32 overflow-visible select-none">
        {/* Marco/laurel que RODEA al avatar */}
        <img
          src={avatarMarco}
          alt="Marco"
          className="absolute inset-0 w-full h-full object-contain z-20 pointer-events-none"
        />

        {/* Halo azul claro y avatar centrados dentro */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-b from-[#73FFFF] to-[#00B7E3] opacity-70 flex items-center justify-center z-10 shadow-[0_0_20px_rgba(0,183,227,0.25)]">
          <img
            src={avatarImage}
            alt="Avatar"
            className="w-20 h-20 rounded-full object-cover z-30"
          />
        </div>
      </div>

      {/* Nombre */}
      <h2 className="mt-3 text-white font-extrabold text-lg leading-tight">
        {userInfo.nombre} {userInfo.apellido}
      </h2>

      {/* Se elimina clasificación aquí; solo se muestra en el contenedor translúcido */}

      {/* Barra de estatus VIP (según referencia) */}
      <div className="mt-3 mx-auto w-full max-w-[360px] bg-black/30 backdrop-blur-sm rounded-xl border border-white/10 p-3">
        <div className="flex items-center gap-2 text-white mb-2">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="text-sm font-extrabold tracking-wide">VIP PRO (XP)</span>
        </div>
        <div className="relative h-3 rounded-full overflow-hidden bg-white/90">
          <div
            className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-[#00B7E3] via-[#28D7D7] to-[#46FC6D]"
            style={{ width: `${progreso}%` }}
          />
        </div>
        <div className="flex justify-between text-xs text-white/90 mt-2">
          <span>{puntos.toLocaleString()}</span>
          <span>{puntosRequeridos.toLocaleString()}</span>
        </div>
      </div>
    </section>
  );
};

export default AvatarSection; 