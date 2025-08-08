import React from 'react';
import { VIPLevel } from '../../types';
import VIPCard from './VIPCard';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import { Crown, Bell } from 'lucide-react';
import bgvipImage from '../../images/bgvip.webp';

interface VIPFullSystemProps {
  vipLevels: VIPLevel[];
  onBack: () => void;
}

const VIPFullSystem: React.FC<VIPFullSystemProps> = ({ vipLevels, onBack }) => {
  return (
    <div className="bg-[#11181C] min-h-screen">
      <div className="max-w-7xl mx-auto p-4">
        <Header 
          title="Sistema VIP Completo" 
          onBack={onBack} 
        />
        
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white mb-2 text-center flex items-center justify-center">
            <Crown className="mr-3 w-8 h-8 text-yellow-400" />
            Sistema VIP
          </h2>
          <p className="text-gray-400 text-center">Progresiona a través de los niveles para desbloquear beneficios exclusivos</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {vipLevels.map((vipLevel) => (
            <div key={vipLevel.id} className="w-full">
              <VIPCard vipLevel={vipLevel} />
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-8 bg-[#1E2930] rounded-2xl p-6 border border-[#1a1a2e]">
          <h3 className="font-bold text-white mb-4 text-center">¿Cómo funciona el Sistema VIP?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Bell className="w-8 h-8 text-[#00B7E3]" />
              </div>
              <h4 className="font-semibold text-white mb-2">Cumple Objetivos</h4>
              <p className="text-gray-400">Completa las metas en deportivas, casino y depósitos</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Crown className="w-8 h-8 text-[#00B7E3]" />
              </div>
              <h4 className="font-semibold text-white mb-2">Sube de Nivel</h4>
              <p className="text-gray-400">Progresiona a través de los 5 niveles VIP</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Bell className="w-8 h-8 text-[#00B7E3]" />
              </div>
              <h4 className="font-semibold text-white mb-2">Disfruta Beneficios</h4>
              <p className="text-gray-400">Accede a cashback, bonos y soporte exclusivo</p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default VIPFullSystem; 