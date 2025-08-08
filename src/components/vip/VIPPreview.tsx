import React from 'react';
import { VIPLevel } from '../../types/index';
import { Crown } from 'lucide-react';
import diamanteImage from '../../images/diamante.webp';

interface VIPPreviewProps {
  currentLevel: VIPLevel;
  onViewSummary: () => void;
}

const VIPPreview: React.FC<VIPPreviewProps> = ({ currentLevel, onViewSummary }) => {
  return (
    <section className="bg-[#1E2930] rounded-2xl shadow-lg p-4 border border-[#1a1a2e] relative">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-extrabold text-base text-white uppercase flex items-center">
          <Crown className="mr-2 w-5 h-5 text-yellow-400" />
          SISTEMA VIP
        </h3>
        <button 
          onClick={onViewSummary}
          className="text-[#00B7E3] hover:text-[#0099cc] transition-colors text-sm font-medium"
        >
          Ver más →
        </button>
      </div>

      <div className="flex flex-col gap-4">
        {/* Current Level Display */}
        <div className="bg-gradient-to-r from-[#00B7E3] to-[#002663] rounded-xl p-4 text-white relative">
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
            <img 
              src={diamanteImage} 
              alt="Diamante VIP" 
              className="w-20 h-20 object-contain" 
            />
          </div>
          <div className="flex items-center space-x-3">
            <div className="text-2xl">{currentLevel.icon !== '💎' ? currentLevel.icon : ''}</div>
            <div>
              <p className="text-sm opacity-90">Tu nivel actual</p>
              <p className="font-bold text-lg">{currentLevel.nombre}</p>
            </div>
          </div>
        </div>

        {/* Progress Overview */}
        <div className="grid grid-cols-3 gap-3">
          <div className="text-center">
            <div className="text-sm text-gray-400 mb-1">Puntos</div>
            <div className="text-base font-bold text-[#00B7E3]">
              {currentLevel.puntosRequeridos}
            </div>
          </div>
          <div className="text-center">
            <div className="text-sm text-gray-400 mb-1">Nivel</div>
            <div className="text-base font-bold text-green-400">
              {currentLevel.nivel}
            </div>
          </div>
          <div className="text-center">
            <div className="text-sm text-gray-400 mb-1">Beneficios</div>
            <div className="text-base font-bold text-purple-400">
              {currentLevel.beneficios.length}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex space-x-2">
          <button className="flex-1 bg-gradient-to-r from-[#95FB3F] to-[#46FC6D] hover:from-[#7ddb2f] hover:to-[#3ddb5a] text-gray-800 font-bold py-2 px-3 rounded-full text-xs transition-all duration-200">
            Depositar
          </button>
          <button className="flex-1 bg-[#2d3748] hover:bg-[#4a5568] text-white font-bold py-2 px-3 rounded-full text-xs transition-colors duration-200">
            Jugar
          </button>
        </div>
      </div>
    </section>
  );
};

export default VIPPreview; 