import React from 'react';
import { UserProfile } from '../../types/index';
import walletImage from '../../images/wallet.webp';

interface AccountSummaryProps {
  userProfile: UserProfile;
  onDeposit: () => void;
  onWithdraw: () => void;
}

const AccountSummary: React.FC<AccountSummaryProps> = ({ 
  userProfile, 
  onDeposit, 
  onWithdraw 
}) => {
  return (
    <section className="bg-[#1E2930] rounded-2xl shadow-lg p-4 border border-[#0d1117]">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-extrabold text-base text-white uppercase">
          RESUMEN DE CUENTA
        </h3>
      </div>

      {/* Current Balance Display */}
      <div className="bg-gradient-to-r from-[#00B7E3] to-[#002663] rounded-xl p-4 text-white relative mb-4">
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
          <img 
            src={walletImage} 
            alt="Wallet" 
            className="w-16 h-16 object-contain" 
          />
        </div>
        <div className="flex items-center space-x-3">
          <div>
            <p className="text-sm opacity-90">Tu saldo actual</p>
            <p className="font-bold text-lg">{userProfile.saldo}</p>
          </div>
        </div>
      </div>

      <div className="flex gap-3">
        <button
          onClick={onDeposit}
          className="flex-1 bg-gradient-to-r from-[#95FB3F] to-[#46FC6D] hover:from-[#7ddb2f] hover:to-[#3ddb5a] text-gray-800 font-bold py-3 px-4 rounded-full transition-all duration-200"
        >
          DEPOSITAR
        </button>
        <button
          onClick={onWithdraw}
          className="flex-1 bg-[#2d3748] hover:bg-[#4a5568] text-white font-bold py-3 px-4 rounded-full transition-colors duration-200"
        >
          RETIRAR
        </button>
      </div>
    </section>
  );
};

export default AccountSummary; 