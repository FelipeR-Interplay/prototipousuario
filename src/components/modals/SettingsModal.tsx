import React, { useState } from 'react';
import { Settings, Lock, Globe, Bell, ShieldCheck, X } from 'lucide-react';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose }) => {
  const [language, setLanguage] = useState('es');
  const [notify, setNotify] = useState(true);
  const [kycStatus] = useState<'verificado' | 'pendiente' | 'rechazado'>('pendiente');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/50">
      <div className="w-full max-w-xl md:max-w-3xl bg-[#1E2930] rounded-2xl border border-[#0d1117] p-5 md:p-8">
        <div className="flex items-center justify-between mb-4 md:mb-6">
          <h3 className="text-white font-extrabold uppercase text-base md:text-lg flex items-center gap-2">
            <Settings className="w-5 h-5 text-[#00B7E3]" />
            Configuración
          </h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white" aria-label="Cerrar">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="space-y-4">
            <label className="flex items-center gap-2 text-xs text-gray-400">
              <Lock className="w-4 h-4" /> Cambiar contraseña
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg bg-[#0d1117] border border-[#3a3a4e] p-2 md:p-3 text-white text-sm"
              placeholder="Nueva contraseña"
            />
            <input
              type="password"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              className="w-full rounded-lg bg-[#0d1117] border border-[#3a3a4e] p-2 md:p-3 text-white text-sm"
              placeholder="Confirmar contraseña"
            />
          </div>

          <div className="space-y-4">
            <div>
              <label className="flex items-center gap-2 text-xs text-gray-400 mb-1">
                <Globe className="w-4 h-4" /> Idioma
              </label>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="w-full rounded-lg bg-[#0d1117] border border-[#3a3a4e] p-2 md:p-3 text-white text-sm"
              >
                <option value="es">Español</option>
                <option value="en">English</option>
              </select>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-white inline-flex items-center gap-2">
                <Bell className="w-4 h-4" /> Notificaciones
              </span>
              <button
                onClick={() => setNotify(!notify)}
                className={`w-12 h-6 rounded-full transition-colors ${notify ? 'bg-green-500' : 'bg-gray-600'}`}
                aria-pressed={notify}
              >
                <span className={`block h-6 w-6 rounded-full bg-white transform transition-transform ${notify ? 'translate-x-6' : ''}`}></span>
              </button>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-white inline-flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-green-400" /> Estado KYC
              </span>
              <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                kycStatus === 'verificado' ? 'bg-green-600 text-green-100' : kycStatus === 'rechazado' ? 'bg-red-600 text-red-100' : 'bg-yellow-600 text-yellow-100'
              }`}>
                {kycStatus.toUpperCase()}
              </span>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-2 mt-5">
          <button onClick={onClose} className="px-4 py-2 md:px-5 md:py-2.5 rounded-full bg-[#2d3748] text-white text-sm">Cerrar</button>
          <button onClick={onClose} className="px-4 py-2 md:px-5 md:py-2.5 rounded-full bg-gradient-to-r from-[#95FB3F] to-[#46FC6D] text-gray-800 font-bold text-sm">Guardar</button>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;