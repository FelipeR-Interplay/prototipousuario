import React from 'react';
import historialImage from '../../images/historial.webp';
import livebetImage from '../../images/livebet.webp';

interface ActivitySectionProps {
  onHistorial: () => void;
  onApuestas: () => void;
  apuestasCount: number;
}

const ActivitySection: React.FC<ActivitySectionProps> = ({
  onHistorial,
  onApuestas,
  apuestasCount
}) => {
  return (
    <section className="bg-[#1E2930] rounded-2xl shadow-lg p-4 border border-[#0d1117]">
      <h3 className="font-extrabold text-base text-white mb-4 uppercase">ACTIVIDAD</h3>

      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={onHistorial}
          className="bg-[#0d1117] rounded-xl p-4 border border-[#3a3a4e] hover:border-[#00B7E3] transition-colors group"
        >
          <div className="text-center">
            <div className="flex justify-center mb-2">
              <img 
                src={historialImage} 
                alt="Historial" 
                className="w-12 h-12 object-contain group-hover:scale-110 transition-transform" 
              />
            </div>
            <p className="text-sm font-medium text-white">Historial</p>
          </div>
        </button>

        <button
          onClick={onApuestas}
          className="bg-[#0d1117] rounded-xl p-4 border border-[#3a3a4e] hover:border-[#00B7E3] transition-colors group relative"
        >
          <div className="text-center">
            <div className="flex justify-center mb-2">
              <img 
                src={livebetImage} 
                alt="En Curso" 
                className="w-12 h-12 object-contain group-hover:scale-110 transition-transform" 
              />
            </div>
            <p className="text-sm font-medium text-white">En Curso</p>
          </div>
          {apuestasCount > 0 && (
            <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {apuestasCount}
            </div>
          )}
        </button>
      </div>
    </section>
  );
};

export default ActivitySection; 