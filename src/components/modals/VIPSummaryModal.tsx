import React from 'react';
import { VIPLevel } from '../../types';
import { Crown, Target } from 'lucide-react';
import diamanteImage from '../../images/diamante.webp';

interface VIPSummaryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onViewFullSystem: () => void;
  currentLevel: VIPLevel;
  allLevels: VIPLevel[];
}

// Función para renderizar el icono del VIP PRO con la imagen del diamante
const renderVIPIcon = (vipLevel: VIPLevel, size: 'small' | 'large' = 'large') => {
  if (vipLevel.nombre === 'VIP PRO') {
    const sizeClasses = size === 'large' ? 'w-24 h-24' : 'w-12 h-12';
    const positionClasses = size === 'large' ? '-right-6 -top-3' : '-right-2 -top-1';
    return (
      <div className={`absolute ${positionClasses} z-10`}>
        <img 
          src={diamanteImage} 
          alt="Diamante VIP" 
          className={`${sizeClasses} object-contain`} 
        />
      </div>
    );
  }
  return null;
};

const VIPSummaryModal: React.FC<VIPSummaryModalProps> = ({ 
  isOpen, 
  onClose, 
  onViewFullSystem, 
  currentLevel, 
  allLevels 
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-[#1E2930] rounded-2xl p-6 w-full max-w-md border border-[#0d1117] max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-extrabold text-lg text-white uppercase flex items-center">
            <Crown className="mr-2 w-5 h-5 text-yellow-400" />
            SISTEMA VIP
          </h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white">✕</button>
        </div>

        <div className="space-y-4">
          {/* Current Level Highlight */}
          <div className="bg-gradient-to-r from-[#00B7E3] to-[#002663] rounded-xl p-4 text-white relative">
            {renderVIPIcon(currentLevel, 'large')}
            <div className="text-center">
              <div className="text-3xl mb-2">{currentLevel.icon !== '💎' ? currentLevel.icon : ''}</div>
              <h4 className="font-bold text-lg mb-1">Tu Nivel Actual</h4>
              <p className="text-xl font-extrabold">{currentLevel.nombre}</p>
            </div>
          </div>

          {/* Progress Summary */}
          <div className="bg-[#0d1117] rounded-xl p-4 border border-[#3a3a4e]">
            <h5 className="text-sm font-medium text-white mb-3">Información del Nivel</h5>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-400">Nivel:</span>
                <span className="text-xs text-[#00B7E3] font-bold">
                  {currentLevel.nivel}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-400">Puntos Requeridos:</span>
                <span className="text-xs text-green-400 font-bold">
                  {currentLevel.puntosRequeridos}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-400">Beneficios:</span>
                <span className="text-xs text-purple-400 font-bold">
                  {currentLevel.beneficios.length}
                </span>
              </div>
            </div>
          </div>

          {/* Next Level Preview */}
          <div className="bg-[#0d1117] rounded-xl p-4 border border-[#3a3a4e] relative">
            <h5 className="text-sm font-medium text-white mb-3">Próximo Nivel</h5>
            <div className="flex items-center space-x-3">
              {(() => {
                const nextLevel = allLevels.find(level => level.id === currentLevel.id + 1);
                if (nextLevel) {
                  return (
                    <>
                      {renderVIPIcon(nextLevel, 'small')}
                      <div className="text-2xl">{nextLevel.icon !== '💎' ? nextLevel.icon : ''}</div>
                    </>
                  );
                }
                return <Target className="w-6 h-6" />;
              })()}
              <div>
                <p className="text-sm font-medium text-white">
                  {allLevels.find(level => level.id === currentLevel.id + 1)?.nombre || 'Máximo nivel alcanzado'}
                </p>
                <p className="text-xs text-gray-400">Continúa progresando para subir</p>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-[#0d1117] rounded-xl p-4 border border-[#3a3a4e]">
            <h5 className="text-sm font-medium text-white mb-3">Beneficios Actuales</h5>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span className="text-green-400">✓</span>
                <span className="text-xs text-gray-300">Cashback exclusivo</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-400">✓</span>
                <span className="text-xs text-gray-300">Soporte prioritario</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-400">✓</span>
                <span className="text-xs text-gray-300">Bonos especiales</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 pt-2">
            <button 
              onClick={onViewFullSystem}
              className="w-full bg-[#00B7E3] hover:bg-[#0099cc] text-white font-bold py-3 px-4 rounded-full text-sm transition-colors flex items-center justify-center"
            >
              <Crown className="w-4 h-4 mr-2" />
              Ver Sistema VIP Completo
            </button>
            <button 
              onClick={onClose}
              className="w-full bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-4 rounded-full text-sm transition-colors"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VIPSummaryModal; 