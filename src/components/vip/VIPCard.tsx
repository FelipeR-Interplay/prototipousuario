import React from 'react';
import { VIPLevel } from '../../types/index';
import { Bell } from 'lucide-react';
import bgvipImage from '../../images/bgvip.webp';
import escudoImage from '../../images/escudo.webp';
import espadaImage from '../../images/espada.webp';
import diamante2Image from '../../images/diamante 2.webp';
import rayoImage from '../../images/rayo.webp';
import coronaImage from '../../images/corona.webp';

interface VIPCardProps {
  vipLevel: VIPLevel;
}

// Función para obtener la imagen correcta según el nivel VIP
const getVIPIcon = (vipLevel: VIPLevel) => {
  switch (vipLevel.nombre) {
    case 'START':
      return escudoImage;
    case 'BASIC':
      return espadaImage;
    case 'VIP PRO':
      return diamante2Image;
    case 'VIP ELITE':
      return rayoImage;
    case 'VIP MASTER':
      return coronaImage;
    default:
      return escudoImage;
  }
};

const VIPCard: React.FC<VIPCardProps> = ({ vipLevel }) => {
  const vipIcon = getVIPIcon(vipLevel);

  return (
    <div className="bg-[#1E2930] rounded-2xl shadow-lg border border-[#0d1117] overflow-hidden">
      {/* Top Section - Icon & Title */}
      <div 
        className="bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] p-4 text-center relative"
        style={{
          backgroundImage: `url(${bgvipImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="relative z-10">
          <div className="flex justify-center mb-2">
            <img 
              src={vipIcon} 
              alt={`${vipLevel.nombre} Icon`} 
              className="w-12 h-12 object-contain" 
            />
          </div>
          <h3 className="text-white font-bold text-lg uppercase mb-1">{vipLevel.nombre}</h3>
          <p className="text-gray-400 text-xs">14h 41m próxima actuación</p>
        </div>
      </div>
      
      {/* Middle Section - Requirements & Progress */}
      <div className="p-4 space-y-4">
        {/* Requirement Box */}
        <div className="bg-gradient-to-r from-[#EAFBFF] to-[#99E4F5] rounded-lg p-3 text-center">
          <div className="flex items-center justify-center space-x-2">
            <Bell className="w-5 h-5 text-[#0d1117]" />
            <span className="text-sm font-medium text-[#0d1117]">¡Requisito!</span>
          </div>
          <p className="text-xs mt-1 text-[#0d1117]">1 deposito + 1 Login</p>
        </div>
        
        {/* Progress Sections */}
        <div className="space-y-3">
          {/* Deportivas */}
          <div className="space-y-1">
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-300">Deportivas</span>
              <span className="text-xs text-[#00B7E3]">0.00%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div className="bg-[#00B7E3] h-2 rounded-full" style={{ width: '0%' }}></div>
            </div>
            <div className="text-right">
              <span className="text-xs text-gray-400">85.000/0</span>
            </div>
          </div>

          {/* Casino */}
          <div className="space-y-1">
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-300">Casino</span>
              <span className="text-xs text-green-400">0.00%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div className="bg-green-400 h-2 rounded-full" style={{ width: '0%' }}></div>
            </div>
            <div className="text-right">
              <span className="text-xs text-gray-400">85.000/0</span>
            </div>
          </div>

          {/* Depósito */}
          <div className="space-y-1">
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-300">Depósito</span>
              <span className="text-xs text-purple-400">0.00%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div className="bg-purple-400 h-2 rounded-full" style={{ width: '0%' }}></div>
            </div>
            <div className="text-right">
              <span className="text-xs text-gray-400">85.000/0</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Section - Action Buttons */}
      <div className="p-4 space-y-2">
        <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full text-sm transition-colors">
          Depósitar
        </button>
        <button className="w-full border border-[#00B7E3] text-[#00B7E3] bg-transparent hover:bg-[#00B7E3] hover:text-white font-bold py-2 px-4 rounded-full text-sm transition-colors">
          Juega
        </button>
        <button className="w-full bg-[#00B7E3] hover:bg-[#0099cc] text-white font-bold py-2 px-4 rounded-full text-sm transition-colors">
          Apuesta
        </button>
      </div>
    </div>
  );
};

export default VIPCard; 