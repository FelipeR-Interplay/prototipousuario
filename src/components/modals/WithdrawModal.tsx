import React, { useState } from 'react';

interface WithdrawModalProps {
  isOpen: boolean;
  onClose: () => void;
  onWithdraw: (amount: number) => void;
  currentBalance: string;
}

const WithdrawModal: React.FC<WithdrawModalProps> = ({ isOpen, onClose, onWithdraw, currentBalance }) => {
  const [amount, setAmount] = useState('');

  const handleSubmit = () => {
    const numAmount = parseFloat(amount);
    if (numAmount > 0) {
      onWithdraw(numAmount);
      setAmount('');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-[#1E2930] rounded-2xl p-6 w-full max-w-sm border border-[#0d1117]">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-extrabold text-lg text-white uppercase">💸 RETIRAR FONDOS</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white">✕</button>
        </div>
        <div className="space-y-4">
          <div className="mb-4">
            <p className="text-gray-300 text-sm">Saldo disponible:</p>
            <p className="text-[#95FB3F] font-bold text-lg">{currentBalance}</p>
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-2">Monto a retirar</label>
            <input 
              type="number" 
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="L500"
              className="w-full bg-[#0d1117] border border-[#3a3a4e] rounded-lg px-4 py-3 text-white text-lg focus:outline-none focus:ring-2 focus:ring-[#00B7E3] focus:border-transparent"
              min="1"
              step="0.01"
            />
          </div>
          <div className="flex space-x-3">
            <button 
              onClick={onClose}
              className="flex-1 bg-gray-600 text-white font-bold py-3 px-4 rounded-full text-sm hover:bg-gray-700 transition-colors"
            >
              Cancelar
            </button>
            <button 
              onClick={handleSubmit}
              className="flex-1 bg-[#002663] text-white font-bold py-3 px-4 rounded-full text-sm hover:bg-[#001a4a] transition-colors"
            >
              Retirar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithdrawModal; 