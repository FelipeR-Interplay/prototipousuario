import React, { useState } from 'react';
import { SubViewType, UserProfile } from './types/index';
import { UserInfo } from './types/index';
import { BarChart3, CircleDot, Settings, Megaphone } from 'lucide-react';
import { 
  mockUserInfo, 
  mockUserProfile, 
  mockBettingHistory, 
  mockActiveBets, 
  mockVIPLevels
} from './data/mockData';

// Layout Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Profile Components
import AvatarSection from './components/profile/AvatarSection';
import AccountSummary from './components/profile/AccountSummary';
import ActivitySection from './components/profile/ActivitySection';
import PersonalInfoSection from './components/profile/PersonalInfoSection';

// VIP Components
import VIPPreview from './components/vip/VIPPreview';
import VIPFullSystem from './components/vip/VIPFullSystem';

// Modal Components
import DepositModal from './components/modals/DepositModal';
import WithdrawModal from './components/modals/WithdrawModal';
import VIPSummaryModal from './components/modals/VIPSummaryModal';
import EditPersonalInfoModal from './components/modals/EditPersonalInfoModal';
import PromotionsModal from './components/modals/PromotionsModal';
import ReferralsModal from './components/modals/ReferralsModal';
import SettingsModal from './components/modals/SettingsModal';
import ReferralsCard from './components/referrals/ReferralsCard';

// Animated Background Component
const AnimatedBackground: React.FC = () => {
  return (
    <div className="animated-background">
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>
    </div>
  );
};

const PerfilUsuario: React.FC = () => {
  const [subView, setSubView] = useState<SubViewType>('main');
  const [showDepositModal, setShowDepositModal] = useState(false);
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);
  const [showVIPSummaryModal, setShowVIPSummaryModal] = useState(false);
  const [showVIPFullSystem, setShowVIPFullSystem] = useState(false);
  const [showEditInfoModal, setShowEditInfoModal] = useState(false);
  const [showPromotionsModal, setShowPromotionsModal] = useState(false);
  const [showReferralsModal, setShowReferralsModal] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [userProfile, setUserProfile] = useState<UserProfile>(mockUserProfile);
  const [userInfo, setUserInfo] = useState(mockUserInfo);

  const handleDeposit = (amount: number) => {
    const currentBalance = parseFloat(userProfile.saldo.replace('L', '').replace(',', ''));
    const newBalance = currentBalance + amount;
    setUserProfile((prev: UserProfile) => ({ ...prev, saldo: `L${newBalance.toLocaleString()}` }));
    setShowDepositModal(false);
  };

  const handleWithdraw = (amount: number) => {
    const currentBalance = parseFloat(userProfile.saldo.replace('L', '').replace(',', ''));
    const newBalance = Math.max(0, currentBalance - amount);
    setUserProfile((prev: UserProfile) => ({ ...prev, saldo: `L${newBalance.toLocaleString()}` }));
    setShowWithdrawModal(false);
  };

  const handleEditInfo = () => {
    setShowEditInfoModal(true);
  };

  const handleSaveInfo = (updatedInfo: UserInfo) => {
    setUserInfo(updatedInfo);
  };

  const renderHistorialView = () => (
    <section className="bg-[#1E2930] rounded-2xl shadow-lg p-4 border border-[#0d1117]">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-extrabold text-base text-white flex items-center uppercase">
          <BarChart3 className="mr-2 w-5 h-5" />
          HISTORIAL DE APUESTAS
        </h3>
        <button 
          onClick={() => setSubView('main')}
          className="text-[#00B7E3] hover:text-[#0099cc] transition-colors p-2 rounded-full"
        >
          ← Volver
        </button>
      </div>
      
      <div className="flex flex-col gap-3">
        {mockBettingHistory.map((apuesta) => (
          <div key={apuesta.id} className="bg-[#0d1117] rounded-xl p-4 border border-[#3a3a4e]">
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-sm font-medium text-white">{apuesta.evento}</h4>
              <span className={`text-xs px-2 py-1 rounded-full font-semibold ${
                apuesta.resultado === 'ganada' ? 'bg-green-600 text-green-100' :
                apuesta.resultado === 'perdida' ? 'bg-red-600 text-red-100' :
                'bg-yellow-600 text-yellow-100'
              }`}>
                {apuesta.resultado}
              </span>
            </div>
            <div className="flex justify-between items-center text-xs text-gray-400">
              <span>Apuesta: {apuesta.apuesta}</span>
              <span className={`font-bold ${
                apuesta.ganancia.startsWith('+') ? 'text-green-400' : 'text-red-400'
              }`}>
                {apuesta.ganancia}
              </span>
            </div>
            <div className="text-xs text-gray-500 mt-1">
              {apuesta.fecha}
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  const renderApuestasView = () => (
    <section className="bg-[#1E2930] rounded-2xl shadow-lg p-4 border border-[#0d1117]">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-extrabold text-base text-white flex items-center uppercase">
          <CircleDot className="mr-2 w-5 h-5" />
          APUESTAS EN CURSO
        </h3>
        <button 
          onClick={() => setSubView('main')}
          className="text-[#00B7E3] hover:text-[#0099cc] transition-colors p-2 rounded-full"
        >
          ← Volver
        </button>
      </div>
      
      <div className="flex flex-col gap-3">
        {mockActiveBets.map((apuesta) => (
          <div key={apuesta.id} className="bg-[#0d1117] rounded-xl p-4 border border-[#3a3a4e]">
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-sm font-medium text-white">{apuesta.evento}</h4>
              <span className="bg-[#00B7E3] text-white text-xs px-2 py-1 rounded-full font-semibold">
                En Curso
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div>
                <span className="text-gray-400">Apuesta:</span>
                <span className="text-white font-medium ml-1">{apuesta.apuesta}</span>
              </div>
              <div>
                <span className="text-gray-400">Monto:</span>
                <span className="text-white font-medium ml-1">{apuesta.monto}</span>
              </div>
              <div>
                <span className="text-gray-400">Cuota:</span>
                <span className="text-white font-medium ml-1">{apuesta.cuota}</span>
              </div>
              <div className="col-span-2">
                <span className="text-gray-400">Posible ganancia:</span>
                <span className="text-green-400 font-bold ml-1">{apuesta.gananciaPotencial}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  // Si se está mostrando el sistema VIP completo
  if (showVIPFullSystem) {
    return (
      <VIPFullSystem 
        vipLevels={mockVIPLevels}
        onBack={() => setShowVIPFullSystem(false)}
      />
    );
  }

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <div className="max-w-7xl mx-auto p-4 relative z-10">
        <Header 
          title="Mi Perfil" 
          onBack={() => {}} 
          showBackButton={false}
        />

        <main className="masonry-layout max-w-7xl mx-auto">
          {subView === 'main' && (
            <>
              {/* Avatar Section */}
              <div className="masonry-item">
                <AvatarSection 
                  userInfo={mockUserInfo} 
                  nivel={userProfile.nivel}
                  puntos={userProfile.puntos}
                  nivelActual={mockVIPLevels[2].nivel}
                  puntosRequeridos={mockVIPLevels[2].puntosRequeridos}
                />
              </div>

              {/* Account Summary */}
              <div className="masonry-item">
                <AccountSummary 
                  userProfile={userProfile}
                  onDeposit={() => setShowDepositModal(true)}
                  onWithdraw={() => setShowWithdrawModal(true)}
                />
              </div>

              {/* Activity Section */}
              <div className="masonry-item">
                <ActivitySection 
                  onHistorial={() => setSubView('historial')}
                  onApuestas={() => setSubView('apuestas')}
                  apuestasCount={mockActiveBets.length}
                />
              </div>

              {/* VIP Preview */}
              <div className="masonry-item">
                <VIPPreview 
                  currentLevel={mockVIPLevels[2]} // VIP PRO como nivel actual
                  onViewSummary={() => setShowVIPSummaryModal(true)}
                />
              </div>

              {/* Personal Info Section */}
              <div className="masonry-item">
                <PersonalInfoSection userInfo={userInfo} onEditInfo={handleEditInfo} />
              </div>

              {/* Referidos (tarjeta incrustada) */}
              <div className="masonry-item">
                <ReferralsCard />
              </div>

              {/* Tarjetas disparadoras de modales */}
              <div className="masonry-item">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button
                    aria-label="Abrir configuración"
                    onClick={() => setShowSettingsModal(true)}
                    className="w-full h-full bg-[#1E2930] rounded-2xl border border-[#0d1117] px-4 py-3 md:px-5 md:py-4 text-left hover:border-[#00B7E3] transition-colors flex items-center gap-3 md:gap-3"
                  >
                    <Settings className="w-5 h-5 md:w-6 md:h-6 text-[#00B7E3] flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-white font-bold leading-tight">Configuración</p>
                      <p className="text-xs md:text-sm text-gray-400 leading-tight">Contraseña, idioma y notificaciones</p>
                    </div>
                  </button>

                  <button
                    aria-label="Abrir promociones"
                    onClick={() => setShowPromotionsModal(true)}
                    className="w-full h-full bg-[#1E2930] rounded-2xl border border-[#0d1117] px-4 py-3 md:px-5 md:py-4 text-left hover:border-[#00B7E3] transition-colors flex items-center gap-3 md:gap-3"
                  >
                    <Megaphone className="w-5 h-5 md:w-6 md:h-6 text-[#00B7E3] flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-white font-bold leading-tight">Promociones</p>
                      <p className="text-xs md:text-sm text-gray-400 leading-tight">Bonos disponibles para redimir</p>
                    </div>
                  </button>
                </div>
              </div>
            </>
          )}
          {subView === 'historial' && (
            <div className="masonry-item">
              {renderHistorialView()}
            </div>
          )}
          {subView === 'apuestas' && (
            <div className="masonry-item">
              {renderApuestasView()}
            </div>
          )}
        </main>
        
        <Footer />
      </div>

      <DepositModal 
        isOpen={showDepositModal}
        onClose={() => setShowDepositModal(false)}
        onDeposit={handleDeposit}
      />

      <WithdrawModal 
        isOpen={showWithdrawModal}
        onClose={() => setShowWithdrawModal(false)}
        onWithdraw={handleWithdraw}
        currentBalance={userProfile.saldo}
      />

      <VIPSummaryModal 
        isOpen={showVIPSummaryModal}
        onClose={() => setShowVIPSummaryModal(false)}
        onViewFullSystem={() => {
          setShowVIPSummaryModal(false);
          setShowVIPFullSystem(true);
        }}
        allLevels={mockVIPLevels}
        currentLevel={mockVIPLevels[2]}
      />

      <EditPersonalInfoModal 
        isOpen={showEditInfoModal}
        onClose={() => setShowEditInfoModal(false)}
        onSave={handleSaveInfo}
        userInfo={userInfo}
      />

      <SettingsModal 
        isOpen={showSettingsModal}
        onClose={() => setShowSettingsModal(false)}
      />

      <PromotionsModal 
        isOpen={showPromotionsModal}
        onClose={() => setShowPromotionsModal(false)}
      />

      <ReferralsModal 
        isOpen={showReferralsModal}
        onClose={() => setShowReferralsModal(false)}
      />
    </div>
  );
};

export default PerfilUsuario; 