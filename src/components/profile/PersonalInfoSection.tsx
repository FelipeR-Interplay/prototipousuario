import React, { useState } from 'react';
import { UserInfo } from '../../types';
import { Mail, Phone, Cake, Home, CreditCard, FileText, Lock } from 'lucide-react';

interface PersonalInfoSectionProps {
  userInfo: UserInfo;
  onEditInfo: () => void;
}

const PersonalInfoSection: React.FC<PersonalInfoSectionProps> = ({ userInfo, onEditInfo }) => {
  const [showAll, setShowAll] = useState(false);

  const personalData = [
    { icon: Mail, label: 'Email', value: userInfo.email },
    { icon: Phone, label: 'Teléfono', value: userInfo.telefono },
    { icon: Cake, label: 'Fecha de nacimiento', value: userInfo.fechaNacimiento },
    { icon: Home, label: 'Dirección', value: userInfo.direccion },
    { icon: CreditCard, label: 'Documento', value: userInfo.documento }
  ];

  const displayedData = showAll ? personalData : personalData.slice(0, 2);

  return (
    <section className="bg-[#1E2930] rounded-2xl shadow-lg p-4 border border-[#0d1117]">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-extrabold text-base text-white uppercase">
          INFORMACIÓN PERSONAL
        </h3>
      </div>
      
      <div className="flex flex-col gap-4">
        {displayedData.map((item, index) => (
          <div key={index} className="bg-[#0d1117] rounded-xl p-3 border border-[#3a3a4e]">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-[#00B7E3]/20 rounded-lg flex items-center justify-center">
                <item.icon className="text-[#00B7E3] w-4 h-4" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-gray-400 mb-1">{item.label}</p>
                <p className="text-sm text-white font-medium">{item.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="mt-4 pt-4 border-t border-[#3a3a4e]">
        <div className="flex space-x-2">
          <button 
            onClick={onEditInfo}
            className="flex-1 bg-gradient-to-r from-[#95FB3F] to-[#46FC6D] hover:from-[#7ddb2f] hover:to-[#3ddb5a] text-gray-800 font-bold py-2 px-3 rounded-full text-xs transition-all duration-200 flex items-center justify-center"
          >
            <FileText className="w-3 h-3 mr-1" />
            Editar
          </button>
          <button 
            onClick={() => setShowAll(!showAll)}
            className="flex-1 bg-[#2d3748] hover:bg-[#4a5568] text-white font-bold py-2 px-3 rounded-full text-xs transition-colors duration-200 flex items-center justify-center"
          >
            <Lock className="w-3 h-3 mr-1" />
            {showAll ? 'Mostrar menos' : 'Mostrar más'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default PersonalInfoSection; 