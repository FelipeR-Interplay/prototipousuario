import React, { useState } from 'react';
import { X, CreditCard, DollarSign, Check } from 'lucide-react';

interface DepositModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDeposit: (amount: number) => void;
}

const DepositModal: React.FC<DepositModalProps> = ({ isOpen, onClose, onDeposit }) => {
  const [amount, setAmount] = useState('');
  const [selectedMethod, setSelectedMethod] = useState<'card' | 'transfer'>('card');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const numAmount = parseFloat(amount);
    if (numAmount > 0) {
      onDeposit(numAmount);
      setAmount('');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-[#1E2930] rounded-2xl shadow-xl border border-[#0d1117] w-full max-w-md">
        <div className="flex items-center justify-between p-6 border-b border-[#2d3748]">
          <h2 className="text-xl font-bold text-white uppercase">DEPOSITAR FONDOS</h2>
          <button
            onClick={onClose}
            className="text-[#94a3b8] hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div>
            <label className="block text-[#94a3b8] text-sm font-medium mb-2">
              MONTO A DEPOSITAR
            </label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#94a3b8] w-5 h-5" />
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.00"
                className="w-full bg-[#0d1117] border border-[#2d3748] rounded-xl py-3 pl-10 pr-4 text-white placeholder-[#64748b] focus:outline-none focus:border-[#00B7E3] transition-colors"
                min="0"
                step="0.01"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-[#94a3b8] text-sm font-medium mb-3">
              MÉTODO DE PAGO
            </label>
            <div className="space-y-3">
              <button
                type="button"
                onClick={() => setSelectedMethod('card')}
                className={`w-full flex items-center justify-between p-4 rounded-xl border transition-colors ${
                  selectedMethod === 'card'
                    ? 'bg-[#00B7E3] bg-opacity-20 border-[#00B7E3]'
                    : 'bg-[#0d1117] border-[#2d3748] hover:border-[#4a5568]'
                }`}
              >
                <div className="flex items-center">
                  <CreditCard className="w-5 h-5 text-[#00B7E3] mr-3" />
                  <span className="text-white font-medium">Tarjeta de Crédito/Débito</span>
                </div>
                {selectedMethod === 'card' && (
                  <Check className="w-5 h-5 text-[#00B7E3]" />
                )}
              </button>

              <button
                type="button"
                onClick={() => setSelectedMethod('transfer')}
                className={`w-full flex items-center justify-between p-4 rounded-xl border transition-colors ${
                  selectedMethod === 'transfer'
                    ? 'bg-[#00B7E3] bg-opacity-20 border-[#00B7E3]'
                    : 'bg-[#0d1117] border-[#2d3748] hover:border-[#4a5568]'
                }`}
              >
                <div className="flex items-center">
                  <DollarSign className="w-5 h-5 text-[#00B7E3] mr-3" />
                  <span className="text-white font-medium">Transferencia Bancaria</span>
                </div>
                {selectedMethod === 'transfer' && (
                  <Check className="w-5 h-5 text-[#00B7E3]" />
                )}
              </button>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-[#2d3748] hover:bg-[#4a5568] text-white font-bold py-3 px-4 rounded-2xl transition-colors duration-200"
            >
              CANCELAR
            </button>
            <button
              type="submit"
              className="flex-1 bg-[#00B7E3] hover:bg-[#0099cc] text-white font-bold py-3 px-4 rounded-2xl transition-colors duration-200"
            >
              DEPOSITAR
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DepositModal; 