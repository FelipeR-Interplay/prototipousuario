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
  // Calcular progreso para la barra
  const progreso = Math.min((puntos / puntosRequeridos) * 100, 100);
  
  return (
    <div className="bg-[#1E2930] rounded-xl p-4 border border-[#1a1a2e] shadow-lg">
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 relative flex-shrink-0 overflow-hidden">
          <div className="w-full h-full rounded-full shadow-lg bg-[#00B7E3] flex items-center justify-center">
            <img src={avatarImage} alt="Avatar" className="w-12 h-12 object-cover rounded-full" />
          </div>
          <img 
            src={avatarMarco} 
            alt="Marco" 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 object-contain pointer-events-none" 
          />
        </div>
        <div className="flex-1">
          <h2 className="font-medium text-xs text-white font-['Poppins']">{userInfo.nombre} {userInfo.apellido}</h2>
          
          {/* VIP Classification Section */}
          <div className="mt-2">
            <div className="flex items-center space-x-2 mb-2">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-sm font-bold text-white">VIP PRO (XP)</span>
            </div>
            
            {/* Progress Bar Container */}
            <div className="bg-[#0d1117] rounded-lg p-2">
              <div className="w-full bg-gray-700 rounded-full h-2 mb-1">
                <div 
                  className="bg-gradient-to-r from-[#00B7E3] to-[#46FC6D] h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progreso}%` }}
                ></div>
              </div>
              
              {/* Progress Numbers */}
              <div className="flex justify-between text-xs text-gray-400">
                <span>{puntos.toLocaleString()}</span>
                <span>{puntosRequeridos.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvatarSection; 