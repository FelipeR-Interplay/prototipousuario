import React, { useState } from 'react';
import { UserInfo } from '../../types/index';
import { Edit, Mail, Phone, Cake, Home, CreditCard, Save, Lock } from 'lucide-react';

interface EditPersonalInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (updatedInfo: UserInfo) => void;
  userInfo: UserInfo;
}

const EditPersonalInfoModal: React.FC<EditPersonalInfoModalProps> = ({ 
  isOpen, 
  onClose, 
  onSave, 
  userInfo 
}) => {
  const [formData, setFormData] = useState<UserInfo>(userInfo);

  if (!isOpen) return null;

  const handleInputChange = (field: keyof UserInfo, value: string) => {
    setFormData((prev: UserInfo) => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-[#1E2930] rounded-2xl p-6 w-full max-w-md border border-[#0d1117] max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-extrabold text-lg text-white uppercase flex items-center">
            <Edit className="mr-2 w-5 h-5" />
            EDITAR INFORMACIÓN
          </h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white">✕</button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center">
              <Mail className="mr-2 w-4 h-4" />
              Email
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="w-full bg-[#0d1117] border border-[#3a3a4e] rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-[#00B7E3] transition-colors"
              placeholder="tu@email.com"
            />
          </div>

          {/* Phone Field */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center">
              <Phone className="mr-2 w-4 h-4" />
              Teléfono
            </label>
            <input
              type="tel"
              value={formData.telefono}
              onChange={(e) => handleInputChange('telefono', e.target.value)}
              className="w-full bg-[#0d1117] border border-[#3a3a4e] rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-[#00B7E3] transition-colors"
              placeholder="+504 9999-9999"
            />
          </div>

          {/* Birth Date Field */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center">
              <Cake className="mr-2 w-4 h-4" />
              Fecha de nacimiento
            </label>
            <input
              type="date"
              value={formData.fechaNacimiento}
              onChange={(e) => handleInputChange('fechaNacimiento', e.target.value)}
              className="w-full bg-[#0d1117] border border-[#3a3a4e] rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-[#00B7E3] transition-colors"
            />
          </div>

          {/* Address Field */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center">
              <Home className="mr-2 w-4 h-4" />
              Dirección
            </label>
            <textarea
              value={formData.direccion}
              onChange={(e) => handleInputChange('direccion', e.target.value)}
              className="w-full bg-[#0d1117] border border-[#3a3a4e] rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-[#00B7E3] transition-colors resize-none"
              rows={3}
              placeholder="Ingresa tu dirección completa"
            />
          </div>

          {/* Document Field */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center">
              <CreditCard className="mr-2 w-4 h-4" />
              Documento de identidad
            </label>
            <input
              type="text"
              value={formData.documento}
              onChange={(e) => handleInputChange('documento', e.target.value)}
              className="w-full bg-[#0d1117] border border-[#3a3a4e] rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-[#00B7E3] transition-colors"
              placeholder="0801-1990-12345"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-4 rounded-full text-sm transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="flex-1 bg-[#00B7E3] hover:bg-[#0099cc] text-white font-bold py-3 px-4 rounded-full text-sm transition-colors flex items-center justify-center"
            >
              <Save className="w-4 h-4 mr-2" />
              Guardar Cambios
            </button>
          </div>
        </form>

        {/* Additional Info */}
        <div className="mt-4 p-3 bg-[#0d1117] rounded-lg border border-[#3a3a4e]">
          <p className="text-xs text-gray-400 text-center flex items-center justify-center">
            <Lock className="w-3 h-3 mr-1" />
            Tu información personal está protegida y solo se usa para verificar tu cuenta
          </p>
        </div>
      </div>
    </div>
  );
};

export default EditPersonalInfoModal; 