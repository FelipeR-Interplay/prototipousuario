import React from 'react';
import { Gift, Megaphone, X, ArrowRight } from 'lucide-react';

interface PromotionsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PromotionsModal: React.FC<PromotionsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/50">
      <div className="w-full max-w-2xl md:max-w-4xl bg-[#1E2930] rounded-2xl border border-[#0d1117] p-5 md:p-8">
        <div className="flex items-center justify-between mb-4 md:mb-6">
          <h3 className="text-white font-extrabold uppercase text-base md:text-lg flex items-center gap-2">
            <Megaphone className="w-5 h-5 text-[#00B7E3]" />
            Promociones
          </h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white" aria-label="Cerrar">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* Card 1 */}
          <div className="rounded-2xl overflow-hidden bg-[#0d1117] border border-[#3a3a4e] p-4 md:p-6 relative min-h-[260px]">
            <div className="inline-flex items-center gap-2 bg-black/40 rounded-xl px-3 py-1 mb-3">
              <Gift className="w-4 h-4 text-[#00B7E3]" />
              <span className="text-white text-sm">Bono referidos</span>
            </div>
            <h4 className="text-white font-extrabold text-2xl leading-tight mb-2">
              ¡REFERIDOS <span className="text-[#00B7E3]">HONDU</span>!
            </h4>
            <p className="text-gray-300 text-sm mb-4 max-w-sm">Refiere a tus amigos y familiares y gana <span className="font-bold">BONOS</span> exclusivos.</p>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white">f</span>
              <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white">ig</span>
              <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white">in</span>
            </div>
            <button className="px-5 py-2 rounded-full bg-gradient-to-r from-[#95FB3F] to-[#46FC6D] text-gray-800 font-bold text-sm inline-flex items-center gap-2">
              Compartir <ArrowRight className="w-4 h-4" />
            </button>
            <div className="absolute bottom-2 right-2 text-5xl">🎁</div>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl overflow-hidden bg-[#0d1117] border border-[#3a3a4e] p-6 min-h-[260px] flex items-center justify-between">
            <div>
              <h4 className="text-white font-extrabold text-3xl mb-2">TIENES BONOS <br/> REDÍMELOS</h4>
              <p className="text-gray-300 mb-4 max-w-xs">Redime tus bonos y disfruta sus beneficios.</p>
              <button className="text-[#46FC6D] font-extrabold underline inline-flex items-center gap-2">Redimir <ArrowRight className="w-4 h-4" /></button>
            </div>
            <div className="text-6xl">🎁</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionsModal;