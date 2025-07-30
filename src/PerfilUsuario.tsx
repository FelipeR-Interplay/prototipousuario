import React, { useState } from 'react';
import avatarImage from './images/avatar.png';
import avatarMarco from './images/avatarmarco.png';
import lempiGif from './images/lempidominadas.gif';

const PerfilUsuario: React.FC = () => {
  const [showReferralCode, setShowReferralCode] = useState(false);
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [currentView, setCurrentView] = useState('main'); // main, historial, apuestas, rendimiento, informacion-personal, etc.
  const [showPersonalInfo, setShowPersonalInfo] = useState(false);
  const [showRecargarModal, setShowRecargarModal] = useState(false);
  const [showRetirarModal, setShowRetirarModal] = useState(false);
  const [showLealtadModal, setShowLealtadModal] = useState(false);
  const [showBonoModal, setShowBonoModal] = useState(false);
  const [showCompartirModal, setShowCompartirModal] = useState(false);
  const [showNotificaciones, setShowNotificaciones] = useState(false);
  const [notificaciones, setNotificaciones] = useState([
    { id: 1, titulo: '¡Apuesta ganada!', mensaje: 'Has ganado L750 en Real Madrid vs Barcelona', tiempo: '2 min', leida: false },
    { id: 2, titulo: 'Bono disponible', mensaje: 'Tienes L200 disponibles en Tigo Money', tiempo: '1 hora', leida: false },
    { id: 3, titulo: 'Nivel actualizado', mensaje: 'Has subido al nivel Oro Maya', tiempo: '3 horas', leida: true }
  ]);
  const [personalInfo, setPersonalInfo] = useState({
    nombre: 'Juan Carlos',
    apellido: 'Hernández',
    email: 'juan.hernandez@email.com',
    telefono: '+504 9999-8888',
    fechaNacimiento: '15-03-1990',
    direccion: 'Tegucigalpa, Honduras',
    documento: '0801-1990-12345'
  });

  // Datos simulados para las diferentes vistas
  const historialData = [
    { id: 1, fecha: '2025-01-15', evento: 'Real Madrid vs Barcelona', apuesta: 'L500', resultado: 'Ganada', ganancia: '+L750' },
    { id: 2, fecha: '2025-01-14', evento: 'PSG vs Bayern', apuesta: 'L300', resultado: 'Perdida', ganancia: '-L300' },
    { id: 3, fecha: '2025-01-13', evento: 'Manchester City vs Liverpool', apuesta: 'L200', resultado: 'Ganada', ganancia: '+L320' },
    { id: 4, fecha: '2025-01-12', evento: 'Juventus vs Inter', apuesta: 'L400', resultado: 'Empate', ganancia: '+L400' },
    { id: 5, fecha: '2025-01-11', evento: 'Arsenal vs Chelsea', apuesta: 'L250', resultado: 'Ganada', ganancia: '+L425' }
  ];

  const apuestasEnCurso = [
    { id: 1, evento: 'Bayern vs Dortmund', apuesta: 'L300', cuota: '2.15', posibleGanancia: 'L645', estado: 'En curso' },
    { id: 2, evento: 'Atlético Madrid vs Sevilla', apuesta: 'L200', cuota: '1.85', posibleGanancia: 'L370', estado: 'En curso' },
    { id: 3, evento: 'AC Milan vs Roma', apuesta: 'L150', cuota: '2.50', posibleGanancia: 'L375', estado: 'En curso' }
  ];

  const rendimientoData = {
    totalApuestas: 45,
    ganadas: 28,
    perdidas: 12,
    empates: 5,
    porcentajeExito: 62.2,
    gananciaTotal: '+L2,450',
    perdidaTotal: '-L1,200',
    balance: '+L1,250'
  };

  const lealtadData = {
    nivelActual: 'Oro Maya',
    nivelSiguiente: 'Platino Maya',
    progreso: 75,
    puntosActuales: 750,
    puntosSiguiente: 1000,
    beneficios: [
      'Cashback del 5% mensual',
      'Bonos exclusivos VIP',
      'Soporte prioritario 24/7',
      'Retiros sin comisión',
      'Eventos especiales'
    ],
    insignias: [
      { nombre: 'Ganador', descripcion: '10 apuestas ganadas', desbloqueada: true },
      { nombre: 'Leal', descripcion: '30 días consecutivos', desbloqueada: true },
      { nombre: 'Máximo', descripcion: 'Apuesta de L1000+', desbloqueada: false },
      { nombre: 'Leyenda', descripcion: '100 apuestas ganadas', desbloqueada: false }
    ]
  };

  const handleKeyPress = (event: React.KeyboardEvent, action: () => void) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      action();
    }
  };

  const renderMainView = () => (
    <>
      {/* Modal de información del usuario organizado horizontalmente */}
      <div className="bg-[#0f1416]/90 backdrop-blur-sm rounded-xl p-4 border border-[#1a1a2e] shadow-lg mb-4">
        <div className="flex items-center space-x-4">
          {/* Avatar con marco */}
          <div className="w-14 h-14 relative flex-shrink-0">
            <div className="w-full h-full rounded-full shadow-lg bg-[#00B7E3] flex items-center justify-center">
              <img 
                src={avatarImage} 
                alt="Avatar del usuario" 
                className="w-12 h-12 object-cover rounded-full"
              />
            </div>
            <img 
              src={avatarMarco} 
              alt="Marco del avatar" 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 object-contain"
            />
          </div>
          
          {/* Información del usuario */}
          <div className="flex-1">
            <h2 className="font-bold text-base text-white">{personalInfo.nombre} {personalInfo.apellido}</h2>
            <div className="flex items-center space-x-2 mt-1">
              <span className="text-sm font-medium text-[#00B7E3]">Oro Maya</span>
              <span className="text-xs bg-yellow-600 text-yellow-100 px-2 py-1 rounded-full font-semibold">VIP</span>
            </div>
          </div>
        </div>
      </div>

      {/* Información Personal - Vista Simplificada */}
      <section className="bg-[#1E2930] rounded-2xl shadow-lg p-4 border border-[#1a1a2e]">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-extrabold text-base text-white flex items-center uppercase" style={{ fontFamily: 'Poppins', fontSize: '16px' }}>
            <span className="mr-2">👤</span>
            Información Personal
          </h3>
          <button 
            onClick={() => setCurrentView('informacion-personal')}
            className="text-[#00B7E3] hover:text-[#0099cc] transition-colors focus:outline-none focus:ring-2 focus:ring-[#00B7E3] focus:ring-offset-2 focus:ring-offset-[#1E2930] p-2 rounded-lg"
            aria-label="Ver información completa"
          >
            →
          </button>
        </div>
        
        <div className="space-y-3">
          <div className="bg-[#0d1117] rounded-xl p-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-xs text-gray-400 mb-1">Nombre completo</p>
                <p className="text-sm font-medium text-white">{personalInfo.nombre} {personalInfo.apellido}</p>
              </div>
              <span className="text-[#00B7E3] text-lg">👤</span>
            </div>
          </div>
          
          <div className="bg-[#0d1117] rounded-xl p-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-xs text-gray-400 mb-1">Correo electrónico</p>
                <p className="text-sm font-medium text-white">{personalInfo.email}</p>
              </div>
              <span className="text-[#00B7E3] text-lg">📧</span>
            </div>
          </div>
          
          <div className="bg-[#0d1117] rounded-xl p-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-xs text-gray-400 mb-1">Teléfono</p>
                <p className="text-sm font-medium text-white">{personalInfo.telefono}</p>
              </div>
              <span className="text-[#00B7E3] text-lg">📱</span>
            </div>
          </div>
        </div>
      </section>

      {/* Resumen de cuenta */}
      <section className="bg-[#1E2930] rounded-2xl shadow-lg p-4 border border-[#1a1a2e]">
                  <h3 className="font-extrabold text-base text-white mb-3 uppercase" style={{ fontFamily: 'Poppins', fontSize: '16px' }}>Mi Cuenta</h3>
        <div className="bg-gradient-to-r from-[#002663] to-[#00B7E3] rounded-xl p-4 text-white mb-4 shadow-lg">
          <p className="text-sm font-medium opacity-90">Saldo Disponible</p>
          <p className="font-extrabold text-2xl text-white">L1,235</p>
        </div>
        <div className="flex space-x-3">
          <button 
            onClick={() => setShowRecargarModal(true)}
            className="flex-1 bg-[#00B7E3] text-white font-bold py-3 px-4 rounded-full text-sm hover:bg-[#0099cc] transition-colors focus:outline-none focus:ring-2 focus:ring-[#00B7E3] focus:ring-offset-2 focus:ring-offset-[#1a1a2e]"
            aria-label="Recargar cuenta"
          >
            💰 Recargar
          </button>
          <button 
            onClick={() => setShowRetirarModal(true)}
            className="flex-1 bg-[#002663] text-white font-bold py-3 px-4 rounded-full text-sm hover:bg-[#001a4a] transition-colors focus:outline-none focus:ring-2 focus:ring-[#00B7E3] focus:ring-offset-2 focus:ring-offset-[#1a1a2e]"
            aria-label="Retirar fondos"
          >
            💸 Retirar
          </button>
        </div>
      </section>

      {/* Actividad de apuestas */}
      <section className="bg-[#1E2930] rounded-2xl shadow-lg p-4 border border-[#1a1a2e]">
                  <h3 className="font-extrabold text-base text-white mb-3 uppercase" style={{ fontFamily: 'Poppins', fontSize: '16px' }}>Actividad</h3>
        <div className="space-y-3">
          <button 
            onClick={() => setCurrentView('historial')}
            className="w-full flex items-center justify-between p-3 bg-[#0d1117] rounded-xl hover:bg-[#3a3a4e] transition-colors focus:outline-none focus:ring-2 focus:ring-[#00B7E3] focus:ring-offset-2 focus:ring-offset-[#1a1a2e]"
            aria-label="Ver historial completo"
          >
            <div className="flex items-center space-x-3">
              <span className="text-xl" aria-hidden="true">📊</span>
              <span className="text-sm font-medium text-white">Historial</span>
            </div>
            <span className="text-xs text-gray-400">Ver todo →</span>
          </button>
          <button 
            onClick={() => setCurrentView('apuestas')}
            className="w-full flex items-center justify-between p-3 bg-[#0d1117] rounded-xl hover:bg-[#3a3a4e] transition-colors focus:outline-none focus:ring-2 focus:ring-[#00B7E3] focus:ring-offset-2 focus:ring-offset-[#1a1a2e]"
            aria-label="Ver apuestas en curso"
          >
            <div className="flex items-center space-x-3">
              <span className="text-xl" aria-hidden="true">⚽</span>
              <span className="text-sm font-medium text-white">Apuestas en curso</span>
            </div>
            <span className="bg-[#00B7E3] text-white text-xs px-2 py-1 rounded-full font-semibold">3</span>
          </button>
          <button 
            onClick={() => setCurrentView('rendimiento')}
            className="w-full flex items-center justify-between p-3 bg-[#0d1117] rounded-xl hover:bg-[#3a3a4e] transition-colors focus:outline-none focus:ring-2 focus:ring-[#00B7E3] focus:ring-offset-2 focus:ring-offset-[#1a1a2e]"
            aria-label="Ver rendimiento detallado"
          >
            <div className="flex items-center space-x-3">
              <span className="text-xl" aria-hidden="true">📈</span>
              <span className="text-sm font-medium text-white">Rendimiento</span>
            </div>
                          <span className="text-xs text-[#95FB3F] font-bold">+15.2%</span>
          </button>
        </div>
      </section>

      {/* Lealtad */}
      <section className="bg-[#1a1a2e] rounded-2xl shadow-lg p-4 border border-[#1a1a2e]">
        <button 
          onClick={() => setShowLealtadModal(true)}
          className="w-full text-left"
          aria-label="Ver programa de lealtad completo"
        >
          <h3 className="font-extrabold text-base text-white mb-3 uppercase" style={{ fontFamily: 'Poppins', fontSize: '16px' }}>Programa de Lealtad</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-white">Nivel Oro Maya</span>
                <span className="text-xs text-gray-400">75%</span>
              </div>
              <div className="w-full bg-[#1a1a2e] rounded-full h-3" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>
                <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 h-3 rounded-full transition-all duration-300" style={{ width: '75%' }}></div>
              </div>
            </div>
                         <div className="bg-gradient-to-r from-[#002663] to-[#00B7E3] rounded-xl p-3 text-white shadow-lg">
              <p className="text-sm font-medium">Cashback este mes</p>
              <p className="font-extrabold text-xl text-white">L175</p>
            </div>
                         <div className="bg-[#1a1a2e] rounded-xl p-3 border border-[#3a3a4e]">
              <p className="text-sm font-medium text-white mb-2">🏆 Insignias Desbloqueadas</p>
              <div className="flex space-x-2">
                <span className="text-xs bg-yellow-600 text-yellow-100 px-2 py-1 rounded-full font-semibold">Ganador</span>
                <span className="text-xs bg-blue-600 text-blue-100 px-2 py-1 rounded-full font-semibold">Leal</span>
                <span className="text-xs bg-gradient-to-r from-[#95FB3F] to-[#46FC6D] text-white px-2 py-1 rounded-full font-semibold">+10</span>
              </div>
            </div>
          </div>
        </button>
      </section>

      {/* Promociones */}
      <section className="bg-[#1E2930] rounded-2xl shadow-lg p-4 border border-[#1a1a2e]">
                  <h3 className="font-extrabold text-base text-white mb-3 uppercase" style={{ fontFamily: 'Poppins', fontSize: '16px' }}>Promociones</h3>
        <div className="bg-gradient-to-r from-[#00B7E3] to-[#002663] rounded-xl p-4 text-white shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-bold text-base text-white">¡Bono Tigo Money!</p>
              <p className="text-sm opacity-90">L200 disponibles</p>
            </div>
            <span className="text-2xl" aria-hidden="true">🎁</span>
          </div>
                      <button 
              onClick={() => setShowBonoModal(true)}
              className="w-full bg-white text-[#002663] font-bold py-2 px-4 rounded-full mt-3 text-sm hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#00B7E3]"
              aria-label="Reclamar bono Tigo Money"
            >
              Reclamar Ahora
            </button>
        </div>
      </section>

      {/* Referidos */}
      <section className="bg-[#1E2930] rounded-2xl shadow-lg p-4 border border-[#1a1a2e]">
                  <h3 className="font-extrabold text-base text-white mb-3 uppercase" style={{ fontFamily: 'Poppins', fontSize: '16px' }}>Programa de Referidos</h3>
        <div className="space-y-3">
          <div className="bg-[#0d1117] rounded-xl p-4 border border-[#3a3a4e]">
            <p className="text-xs text-gray-400 mb-2">Tu código de referido</p>
            <div className="flex items-center justify-between">
              <code className="font-mono text-lg font-bold text-white bg-[#1a1a2e] px-3 py-2 rounded-lg">HONDULX</code>
              <button 
                onClick={() => setShowReferralCode(!showReferralCode)}
                onKeyPress={(e) => handleKeyPress(e, () => setShowReferralCode(!showReferralCode))}
                className="text-[#00B7E3] text-sm font-medium hover:text-[#0099cc] transition-colors focus:outline-none focus:ring-2 focus:ring-[#00B7E3] focus:ring-offset-2 focus:ring-offset-[#0d1117]"
                aria-label={`${showReferralCode ? 'Ocultar' : 'Mostrar'} código de referido`}
                tabIndex={0}
              >
                {showReferralCode ? 'Ocultar' : 'Mostrar'}
              </button>
            </div>
          </div>
                      <button 
              onClick={() => setShowCompartirModal(true)}
              className="w-full bg-[#002663] text-white font-bold py-3 px-4 rounded-full text-sm hover:bg-[#001a4a] transition-colors focus:outline-none focus:ring-2 focus:ring-[#00B7E3] focus:ring-offset-2 focus:ring-offset-[#1a1a2e]"
              aria-label="Compartir código de referido"
            >
              📤 Compartir Código
            </button>
        </div>
      </section>

      {/* Seguridad y configuración */}
      <section className="bg-[#1E2930] rounded-2xl shadow-lg p-4 border border-[#1a1a2e]">
                  <h3 className="font-extrabold text-base text-white mb-3 uppercase" style={{ fontFamily: 'Poppins', fontSize: '16px' }}>Configuración</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-gradient-to-r from-[#95FB3F]/20 to-[#46FC6D]/20 rounded-xl border border-[#95FB3F]/30">
            <div className="flex items-center space-x-3">
              <span className="text-xl" aria-hidden="true">✅</span>
              <span className="text-sm font-medium text-white">Verificación KYC</span>
            </div>
            <span className="text-xs text-green-400 font-bold">Verificado</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-[#0d1117] rounded-xl hover:bg-[#3a3a4e] transition-colors">
            <div className="flex items-center space-x-3">
              <span className="text-xl" aria-hidden="true">🔒</span>
              <span className="text-sm font-medium text-white">Cambiar contraseña</span>
            </div>
            <span className="text-xs text-gray-400">→</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-[#0d1117] rounded-xl hover:bg-[#3a3a4e] transition-colors">
            <div className="flex items-center space-x-3">
              <span className="text-xl" aria-hidden="true">🌍</span>
              <span className="text-sm font-medium text-white">Idioma</span>
            </div>
            <span className="text-xs text-[#00B7E3] font-bold">Español</span>
          </div>
                      <button 
              onClick={() => setShowNotificaciones(!showNotificaciones)}
              className="w-full flex items-center justify-between p-3 bg-[#1a1a2e] rounded-full hover:bg-[#3a3a4e] transition-colors focus:outline-none focus:ring-2 focus:ring-[#00B7E3] focus:ring-offset-2 focus:ring-offset-[#1a1a2e]"
              aria-label="Ver notificaciones"
            >
              <div className="flex items-center space-x-3">
                <span className="text-xl" aria-hidden="true">🔔</span>
                <span className="text-sm font-medium text-white">Notificaciones</span>
                {notificaciones.filter(n => !n.leida).length > 0 && (
                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                    {notificaciones.filter(n => !n.leida).length}
                  </span>
                )}
              </div>
              <div className="w-12 h-6 bg-[#00B7E3] rounded-full relative cursor-pointer" role="switch" aria-checked="true" tabIndex={0}>
                <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5 transition-transform"></div>
              </div>
            </button>
        </div>
      </section>

              {/* Notificaciones */}
        {showNotificaciones && (
          <section className="bg-[#1E2930] rounded-2xl shadow-lg p-4 border border-[#1a1a2e]">
            <div className="flex items-center justify-between mb-3">
                              <h3 className="font-extrabold text-base text-white uppercase" style={{ fontFamily: 'Poppins', fontSize: '16px' }}>Notificaciones</h3>
              <button 
                onClick={() => setShowNotificaciones(false)}
                className="text-[#00B7E3] hover:text-[#0099cc] transition-colors"
                aria-label="Cerrar notificaciones"
              >
                ✕
              </button>
            </div>
            <div className="space-y-3">
              {notificaciones.map((notif) => (
                                 <div key={notif.id} className={`p-3 rounded-xl border ${notif.leida ? 'bg-[#1a1a2e] border-[#3a3a4e]' : 'bg-[#3a3a4e] border-[#00B7E3]'}`}>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h4 className={`text-sm font-medium ${notif.leida ? 'text-gray-400' : 'text-white'}`}>{notif.titulo}</h4>
                      <p className="text-xs text-gray-500 mt-1">{notif.mensaje}</p>
                    </div>
                    <span className="text-xs text-gray-400">{notif.tiempo}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

      </>
    );

    // Modales
    const renderModals = () => (
      <>
                 {/* Modal de Recargar */}
         {showRecargarModal && (
           <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
             <div className="bg-[#1E2930] rounded-2xl p-6 w-full max-w-sm border border-[#0d1117]">
              <div className="flex items-center justify-between mb-4">
                                  <h3 className="font-extrabold text-lg text-white uppercase" style={{ fontFamily: 'Poppins', fontSize: '16px' }}>💰 Recargar Cuenta</h3>
                <button 
                  onClick={() => setShowRecargarModal(false)}
                  className="text-gray-400 hover:text-white"
                  aria-label="Cerrar modal"
                >
                  ✕
                </button>
              </div>
              <div className="space-y-4">
                                 <div>
                   <label className="block text-sm text-gray-400 mb-2">Monto a recargar</label>
                   <input 
                     type="number" 
                     placeholder="L500"
                     className="w-full bg-[#0d1117] border border-[#3a3a4e] rounded-lg px-4 py-3 text-white text-lg focus:outline-none focus:ring-2 focus:ring-[#00B7E3] focus:border-transparent"
                   />
                 </div>
                                 <div>
                   <label className="block text-sm text-gray-400 mb-2">Método de pago</label>
                   <select className="w-full bg-[#0d1117] border border-[#3a3a4e] rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#00B7E3] focus:border-transparent">
                     <option>Tigo Money</option>
                     <option>Claro Money</option>
                     <option>Transferencia bancaria</option>
                   </select>
                 </div>
                <div className="flex space-x-3">
                  <button 
                    onClick={() => setShowRecargarModal(false)}
                    className="flex-1 bg-gray-600 text-white font-bold py-3 px-4 rounded-full text-sm hover:bg-gray-700 transition-colors"
                  >
                    Cancelar
                  </button>
                  <button 
                    onClick={() => setShowRecargarModal(false)}
                    className="flex-1 bg-[#00B7E3] text-white font-bold py-3 px-4 rounded-full text-sm hover:bg-[#0099cc] transition-colors"
                  >
                    Recargar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

                 {/* Modal de Retirar */}
         {showRetirarModal && (
           <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
             <div className="bg-[#1E2930] rounded-2xl p-6 w-full max-w-sm border border-[#0d1117]">
              <div className="flex items-center justify-between mb-4">
                                  <h3 className="font-extrabold text-lg text-white uppercase" style={{ fontFamily: 'Poppins', fontSize: '16px' }}>💸 Retirar Fondos</h3>
                <button 
                  onClick={() => setShowRetirarModal(false)}
                  className="text-gray-400 hover:text-white"
                  aria-label="Cerrar modal"
                >
                  ✕
                </button>
              </div>
              <div className="space-y-4">
                                 <div>
                   <label className="block text-sm text-gray-400 mb-2">Monto a retirar</label>
                   <input 
                     type="number" 
                     placeholder="L500"
                     className="w-full bg-[#0d1117] border border-[#3a3a4e] rounded-lg px-4 py-3 text-white text-lg focus:outline-none focus:ring-2 focus:ring-[#00B7E3] focus:border-transparent"
                   />
                 </div>
                                 <div>
                   <label className="block text-sm text-gray-400 mb-2">Método de retiro</label>
                   <select className="w-full bg-[#0d1117] border border-[#3a3a4e] rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#00B7E3] focus:border-transparent">
                     <option>Tigo Money</option>
                     <option>Claro Money</option>
                     <option>Transferencia bancaria</option>
                   </select>
                 </div>
                <div className="flex space-x-3">
                  <button 
                    onClick={() => setShowRetirarModal(false)}
                    className="flex-1 bg-gray-600 text-white font-bold py-3 px-4 rounded-full text-sm hover:bg-gray-700 transition-colors"
                  >
                    Cancelar
                  </button>
                  <button 
                    onClick={() => setShowRetirarModal(false)}
                    className="flex-1 bg-[#002663] text-white font-bold py-3 px-4 rounded-full text-sm hover:bg-[#001a4a] transition-colors"
                  >
                    Retirar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

                 {/* Modal de Programa de Lealtad */}
         {showLealtadModal && (
           <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
             <div className="bg-[#1E2930] rounded-2xl p-6 w-full max-w-sm border border-[#0d1117] max-h-[80vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-4">
                                  <h3 className="font-extrabold text-lg text-white uppercase" style={{ fontFamily: 'Poppins', fontSize: '16px' }}>🏆 Programa de Lealtad</h3>
                <button 
                  onClick={() => setShowLealtadModal(false)}
                  className="text-gray-400 hover:text-white"
                  aria-label="Cerrar modal"
                >
                  ✕
                </button>
              </div>
              <div className="space-y-4">
                {/* Nivel actual */}
                                 <div className="bg-gradient-to-r from-[#002663] to-[#00B7E3] rounded-xl p-4 text-white">
                  <h4 className="font-bold text-lg mb-2">{lealtadData.nivelActual}</h4>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm opacity-90">Progreso al siguiente nivel</span>
                    <span className="text-sm font-bold">{lealtadData.progreso}%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-3">
                    <div className="bg-white h-3 rounded-full transition-all duration-300" style={{ width: `${lealtadData.progreso}%` }}></div>
                  </div>
                  <div className="flex justify-between items-center mt-2 text-sm">
                    <span>{lealtadData.puntosActuales} pts</span>
                    <span>{lealtadData.puntosSiguiente} pts</span>
                  </div>
                </div>

                                 {/* Beneficios */}
                 <div className="bg-[#0d1117] rounded-xl p-4 border border-[#3a3a4e]">
                  <h4 className="font-bold text-white mb-3">Beneficios actuales</h4>
                  <div className="space-y-2">
                    {lealtadData.beneficios.map((beneficio, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <span className="text-green-400">✓</span>
                        <span className="text-sm text-white">{beneficio}</span>
                      </div>
                    ))}
                  </div>
                </div>

                                 {/* Insignias */}
                 <div className="bg-[#0d1117] rounded-xl p-4 border border-[#3a3a4e]">
                  <h4 className="font-bold text-white mb-3">Insignias</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {lealtadData.insignias.map((insignia, index) => (
                      <div key={index} className={`p-3 rounded-xl text-center ${insignia.desbloqueada ? 'bg-green-900/20 border border-green-700/30' : 'bg-gray-800/50 border border-gray-700/30'}`}>
                        <div className={`text-lg mb-1 ${insignia.desbloqueada ? 'text-green-400' : 'text-gray-500'}`}>
                          {insignia.desbloqueada ? '🏆' : '🔒'}
                        </div>
                        <div className={`text-xs font-bold ${insignia.desbloqueada ? 'text-white' : 'text-gray-500'}`}>
                          {insignia.nombre}
                        </div>
                        <div className={`text-xs ${insignia.desbloqueada ? 'text-gray-300' : 'text-gray-600'}`}>
                          {insignia.descripcion}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

                 {/* Modal de Bono */}
         {showBonoModal && (
           <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
             <div className="bg-[#1E2930] rounded-2xl p-6 w-full max-w-sm border border-[#0d1117]">
              <div className="flex items-center justify-between mb-4">
                                  <h3 className="font-extrabold text-lg text-white uppercase" style={{ fontFamily: 'Poppins', fontSize: '16px' }}>🎁 Bono Tigo Money</h3>
                <button 
                  onClick={() => setShowBonoModal(false)}
                  className="text-gray-400 hover:text-white"
                  aria-label="Cerrar modal"
                >
                  ✕
                </button>
              </div>
              <div className="space-y-4">
                                 <div className="bg-gradient-to-r from-[#00B7E3] to-[#002663] rounded-xl p-4 text-white text-center">
                  <div className="text-3xl mb-2">🎁</div>
                  <h4 className="font-bold text-lg mb-1">¡Bono Tigo Money!</h4>
                  <p className="text-sm opacity-90">L200 disponibles</p>
                </div>
                                 <div className="bg-[#0d1117] rounded-xl p-4 border border-[#3a3a4e]">
                  <h5 className="font-bold text-white mb-2">Términos y condiciones:</h5>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Depósito mínimo de L100</li>
                    <li>• Rollover de 5x</li>
                    <li>• Válido por 7 días</li>
                    <li>• Solo para nuevos usuarios</li>
                  </ul>
                </div>
                <div className="flex space-x-3">
                  <button 
                    onClick={() => setShowBonoModal(false)}
                    className="flex-1 bg-gray-600 text-white font-bold py-3 px-4 rounded-full text-sm hover:bg-gray-700 transition-colors"
                  >
                    Cancelar
                  </button>
                  <button 
                    onClick={() => setShowBonoModal(false)}
                    className="flex-1 bg-[#00B7E3] text-white font-bold py-3 px-4 rounded-full text-sm hover:bg-[#0099cc] transition-colors"
                  >
                    Reclamar Bono
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

                 {/* Modal de Compartir Código */}
         {showCompartirModal && (
           <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
             <div className="bg-[#1E2930] rounded-2xl p-6 w-full max-w-sm border border-[#0d1117]">
              <div className="flex items-center justify-between mb-4">
                                  <h3 className="font-extrabold text-lg text-white uppercase" style={{ fontFamily: 'Poppins', fontSize: '16px' }}>📤 Compartir Código</h3>
                <button 
                  onClick={() => setShowCompartirModal(false)}
                  className="text-gray-400 hover:text-white"
                  aria-label="Cerrar modal"
                >
                  ✕
                </button>
              </div>
              <div className="space-y-4">
                                 <div className="bg-[#0d1117] rounded-xl p-4 border border-[#3a3a4e] text-center">
                  <p className="text-sm text-gray-400 mb-2">Tu código de referido</p>
                                     <div className="bg-[#1a1a2e] rounded-xl p-3 mb-3">
                    <code className="font-mono text-2xl font-bold text-white">HONDULX</code>
                  </div>
                  <p className="text-xs text-gray-500">Comparte este código con amigos y ambos recibirán bonos</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <button className="bg-green-600 text-white font-bold py-3 px-4 rounded-full text-sm hover:bg-green-700 transition-colors">
                    📱 WhatsApp
                  </button>
                  <button className="bg-blue-600 text-white font-bold py-3 px-4 rounded-full text-sm hover:bg-blue-700 transition-colors">
                    📧 Email
                  </button>
                </div>
                <button 
                  onClick={() => setShowCompartirModal(false)}
                  className="w-full bg-[#002663] text-white font-bold py-3 px-4 rounded-full text-sm hover:bg-[#001a4a] transition-colors"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    );

      const renderHistorialView = () => (
      <>
        <section className="bg-[#1E2930] rounded-2xl shadow-lg p-4 border border-[#0d1117]">
        <div className="flex items-center justify-between mb-4">
                      <h3 className="font-extrabold text-base text-white flex items-center uppercase" style={{ fontFamily: 'Poppins', fontSize: '16px' }}>
              <span className="mr-2">📊</span>
              Historial de Apuestas
            </h3>
          <button 
            onClick={() => setCurrentView('main')}
            className="text-[#00B7E3] hover:text-[#0099cc] transition-colors focus:outline-none focus:ring-2 focus:ring-[#00B7E3] focus:ring-offset-2 focus:ring-offset-[#1a1a2e] p-2 rounded-lg"
            aria-label="Volver al perfil"
          >
            ← Volver
          </button>
        </div>
        
        <div className="space-y-3">
          {historialData.map((apuesta) => (
            <div key={apuesta.id} className="bg-[#0d1117] rounded-xl p-4 border border-[#3a3a4e]">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-sm font-medium text-white">{apuesta.evento}</h4>
                <span className={`text-xs px-2 py-1 rounded-full font-semibold ${
                  apuesta.resultado === 'Ganada' ? 'bg-green-600 text-green-100' :
                  apuesta.resultado === 'Perdida' ? 'bg-red-600 text-red-100' :
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
    </>
  );

      const renderApuestasView = () => (
      <>
        <section className="bg-[#1E2930] rounded-2xl shadow-lg p-4 border border-[#0d1117]">
        <div className="flex items-center justify-between mb-4">
                      <h3 className="font-extrabold text-base text-white flex items-center uppercase" style={{ fontFamily: 'Poppins', fontSize: '16px' }}>
              <span className="mr-2">⚽</span>
              Apuestas en Curso
            </h3>
          <button 
            onClick={() => setCurrentView('main')}
            className="text-[#00B7E3] hover:text-[#0099cc] transition-colors focus:outline-none focus:ring-2 focus:ring-[#00B7E3] focus:ring-offset-2 focus:ring-offset-[#1a1a2e] p-2 rounded-lg"
            aria-label="Volver al perfil"
          >
            ← Volver
          </button>
        </div>
        
        <div className="space-y-3">
          {apuestasEnCurso.map((apuesta) => (
            <div key={apuesta.id} className="bg-[#0d1117] rounded-xl p-4 border border-[#3a3a4e]">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-sm font-medium text-white">{apuesta.evento}</h4>
                <span className="bg-[#00B7E3] text-white text-xs px-2 py-1 rounded-full font-semibold">
                  {apuesta.estado}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-gray-400">Apuesta:</span>
                  <span className="text-white font-medium ml-1">{apuesta.apuesta}</span>
                </div>
                <div>
                  <span className="text-gray-400">Cuota:</span>
                  <span className="text-white font-medium ml-1">{apuesta.cuota}</span>
                </div>
                <div className="col-span-2">
                  <span className="text-gray-400">Posible ganancia:</span>
                  <span className="text-green-400 font-bold ml-1">{apuesta.posibleGanancia}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );

        const renderInformacionPersonalView = () => (
    <>
      <section className="bg-[#1E2930] rounded-2xl shadow-lg p-4 border border-[#0d1117]">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-extrabold text-base text-white flex items-center uppercase" style={{ fontFamily: 'Poppins', fontSize: '16px' }}>
            <span className="mr-2">👤</span>
            Información Personal Completa
          </h3>
          <button 
            onClick={() => setCurrentView('main')}
            className="text-[#00B7E3] hover:text-[#0099cc] transition-colors focus:outline-none focus:ring-2 focus:ring-[#00B7E3] focus:ring-offset-2 focus:ring-offset-[#1a1a2e] p-2 rounded-lg"
            aria-label="Volver al perfil"
          >
            ← Volver
          </button>
        </div>
        
        <div className="space-y-4">
          {!isEditingProfile ? (
            // Vista de solo lectura
            <div className="grid grid-cols-1 gap-3">
              <div className="bg-[#0d1117] rounded-xl p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Nombre completo</p>
                    <p className="text-sm font-medium text-white">{personalInfo.nombre} {personalInfo.apellido}</p>
                  </div>
                  <span className="text-[#00B7E3] text-lg">👤</span>
                </div>
              </div>
              
              <div className="bg-[#0d1117] rounded-xl p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Correo electrónico</p>
                    <p className="text-sm font-medium text-white">{personalInfo.email}</p>
                  </div>
                  <span className="text-[#00B7E3] text-lg">📧</span>
                </div>
              </div>
              
              <div className="bg-[#0d1117] rounded-xl p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Teléfono</p>
                    <p className="text-sm font-medium text-white">{personalInfo.telefono}</p>
                  </div>
                  <span className="text-[#00B7E3] text-lg">📱</span>
                </div>
              </div>
              
              <div className="bg-[#0d1117] rounded-xl p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Fecha de nacimiento</p>
                    <p className="text-sm font-medium text-white">{personalInfo.fechaNacimiento}</p>
                  </div>
                  <span className="text-[#00B7E3] text-lg">🎂</span>
                </div>
              </div>
              
              <div className="bg-[#0d1117] rounded-xl p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Dirección</p>
                    <p className="text-sm font-medium text-white">{personalInfo.direccion}</p>
                  </div>
                  <span className="text-[#00B7E3] text-lg">📍</span>
                </div>
              </div>
              
              <div className="bg-[#0d1117] rounded-xl p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Documento de identidad</p>
                    <p className="text-sm font-medium text-white">{personalInfo.documento}</p>
                  </div>
                  <span className="text-[#00B7E3] text-lg">🆔</span>
                </div>
              </div>
              
              <button 
                onClick={() => setIsEditingProfile(true)}
                className="w-full bg-[#00B7E3] text-white font-bold py-3 px-4 rounded-full text-sm hover:bg-[#0099cc] transition-colors focus:outline-none focus:ring-2 focus:ring-[#00B7E3] focus:ring-offset-2 focus:ring-offset-[#1E2930]"
                aria-label="Editar información"
              >
                ✏️ Editar Información
              </button>
            </div>
          ) : (
            // Modo de edición
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-gray-400 mb-2">Nombre</label>
                  <input 
                    type="text" 
                    value={personalInfo.nombre}
                    onChange={(e) => setPersonalInfo({...personalInfo, nombre: e.target.value})}
                    className="w-full bg-[#0d1117] border border-[#3a3a4e] rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#00B7E3] focus:border-transparent"
                    placeholder="Nombre"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-2">Apellido</label>
                  <input 
                    type="text" 
                    value={personalInfo.apellido}
                    onChange={(e) => setPersonalInfo({...personalInfo, apellido: e.target.value})}
                    className="w-full bg-[#0d1117] border border-[#3a3a4e] rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#00B7E3] focus:border-transparent"
                    placeholder="Apellido"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-xs text-gray-400 mb-2">Correo electrónico</label>
                <input 
                  type="email" 
                  value={personalInfo.email}
                  onChange={(e) => setPersonalInfo({...personalInfo, email: e.target.value})}
                  className="w-full bg-[#0d1117] border border-[#3a3a4e] rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#00B7E3] focus:border-transparent"
                  placeholder="correo@ejemplo.com"
                />
              </div>
              
              <div>
                <label className="block text-xs text-gray-400 mb-2">Teléfono</label>
                <input 
                  type="tel" 
                  value={personalInfo.telefono}
                  onChange={(e) => setPersonalInfo({...personalInfo, telefono: e.target.value})}
                  className="w-full bg-[#0d1117] border border-[#3a3a4e] rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#00B7E3] focus:border-transparent"
                  placeholder="+504 9999-8888"
                />
              </div>
              
              <div>
                <label className="block text-xs text-gray-400 mb-2">Fecha de nacimiento</label>
                <input 
                  type="date" 
                  value={personalInfo.fechaNacimiento.split('-').reverse().join('-')}
                  onChange={(e) => {
                    const date = e.target.value.split('-').reverse().join('-');
                    setPersonalInfo({...personalInfo, fechaNacimiento: date});
                  }}
                  className="w-full bg-[#0d1117] border border-[#3a3a4e] rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#00B7E3] focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-xs text-gray-400 mb-2">Dirección</label>
                <input 
                  type="text" 
                  value={personalInfo.direccion}
                  onChange={(e) => setPersonalInfo({...personalInfo, direccion: e.target.value})}
                  className="w-full bg-[#0d1117] border border-[#3a3a4e] rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#00B7E3] focus:border-transparent"
                  placeholder="Ciudad, País"
                />
              </div>
              
              <div>
                <label className="block text-xs text-gray-400 mb-2">Documento de identidad</label>
                <input 
                  type="text" 
                  value={personalInfo.documento}
                  onChange={(e) => setPersonalInfo({...personalInfo, documento: e.target.value})}
                  className="w-full bg-[#0d1117] border border-[#3a3a4e] rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#00B7E3] focus:border-transparent"
                  placeholder="0801-1990-12345"
                />
              </div>
              
              <div className="flex space-x-3 pt-2">
                <button 
                  onClick={() => setIsEditingProfile(false)}
                  className="flex-1 bg-gray-600 text-white font-bold py-3 px-4 rounded-full text-sm hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-[#1E2930]"
                  aria-label="Cancelar cambios"
                >
                  Cancelar
                </button>
                <button 
                  onClick={() => setIsEditingProfile(false)}
                  className="flex-1 bg-[#00B7E3] text-white font-bold py-3 px-4 rounded-full text-sm hover:bg-[#0099cc] transition-colors focus:outline-none focus:ring-2 focus:ring-[#00B7E3] focus:ring-offset-2 focus:ring-offset-[#1E2930]"
                  aria-label="Guardar cambios"
                >
                  Guardar
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );

  const renderRendimientoView = () => (
    <>
      <section className="bg-[#1E2930] rounded-2xl shadow-lg p-4 border border-[#0d1117]">
        <div className="flex items-center justify-between mb-4">
                      <h3 className="font-extrabold text-base text-white flex items-center uppercase" style={{ fontFamily: 'Poppins', fontSize: '16px' }}>
              <span className="mr-2">📈</span>
              Rendimiento Detallado
            </h3>
          <button 
            onClick={() => setCurrentView('main')}
            className="text-[#00B7E3] hover:text-[#0099cc] transition-colors focus:outline-none focus:ring-2 focus:ring-[#00B7E3] focus:ring-offset-2 focus:ring-offset-[#1a1a2e] p-2 rounded-lg"
            aria-label="Volver al perfil"
          >
            ← Volver
          </button>
        </div>
        
        <div className="space-y-4">
          {/* Estadísticas principales */}
          <div className="bg-gradient-to-r from-[#002663] to-[#00B7E3] rounded-xl p-4 text-white">
            <h4 className="text-sm font-medium mb-2">Resumen General</h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="opacity-90">Total apuestas:</span>
                <span className="font-bold ml-1">{rendimientoData.totalApuestas}</span>
              </div>
              <div>
                <span className="opacity-90">Éxito:</span>
                <span className="font-bold ml-1">{rendimientoData.porcentajeExito}%</span>
              </div>
            </div>
          </div>

          {/* Desglose de resultados */}
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-green-900/20 rounded-xl p-3 border border-green-700/30 text-center">
              <div className="text-green-400 font-bold text-lg">{rendimientoData.ganadas}</div>
              <div className="text-xs text-gray-400">Ganadas</div>
            </div>
            <div className="bg-red-900/20 rounded-xl p-3 border border-red-700/30 text-center">
              <div className="text-red-400 font-bold text-lg">{rendimientoData.perdidas}</div>
              <div className="text-xs text-gray-400">Perdidas</div>
            </div>
            <div className="bg-yellow-900/20 rounded-xl p-3 border border-yellow-700/30 text-center">
              <div className="text-yellow-400 font-bold text-lg">{rendimientoData.empates}</div>
              <div className="text-xs text-gray-400">Empates</div>
            </div>
          </div>

          {/* Balance financiero */}
          <div className="bg-[#0d1117] rounded-xl p-4 border border-[#3a3a4e]">
            <h4 className="text-sm font-medium text-white mb-3">Balance Financiero</h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">Ganancias totales:</span>
                <span className="text-sm font-bold text-green-400">{rendimientoData.gananciaTotal}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">Pérdidas totales:</span>
                <span className="text-sm font-bold text-red-400">{rendimientoData.perdidaTotal}</span>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-[#3a3a4e]">
                <span className="text-sm font-medium text-white">Balance neto:</span>
                <span className="text-sm font-bold text-green-400">{rendimientoData.balance}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );

  return (
    <div className="bg-[#11181C] min-h-screen" style={{ margin: 0, padding: 0 }}>
      <div className="max-w-sm mx-auto p-4 overflow-y-auto">
        {/* Header superior */}
        <header className="p-4 mb-4 flex items-center justify-between">
          <button 
            className="w-12 h-12 bg-green-500 hover:bg-green-600 text-white font-bold rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 flex items-center justify-center"
            aria-label="Volver atrás"
            tabIndex={0}
            onKeyPress={(e) => handleKeyPress(e, () => console.log('Volver'))}
          >
            ←
          </button>
          <h1 className="font-extrabold text-lg text-white">Mi Perfil</h1>
          <div className="w-12" aria-hidden="true"></div>
        </header>

        <main className="space-y-4">
          {currentView === 'main' && renderMainView()}
          {currentView === 'historial' && renderHistorialView()}
          {currentView === 'apuestas' && renderApuestasView()}
          {currentView === 'rendimiento' && renderRendimientoView()}
          {currentView === 'informacion-personal' && renderInformacionPersonalView()}
        </main>
        {renderModals()}
      </div>
      
      {/* Footer con GIF de Lempira - Full Width */}
      <footer className="w-full bg-[#11181C] text-center py-4" style={{ marginBottom: 0, paddingBottom: 0 }}>
        <p className="text-xs text-gray-500 mb-4">Hondubet.com © 2025</p>
        <div className="w-full" style={{ marginBottom: 0, paddingBottom: 0 }}>
          <img 
            src={lempiGif} 
            alt="Lempira haciendo dominadas" 
            className="w-full h-auto object-contain"
            style={{ marginBottom: 0, paddingBottom: 0, display: 'block' }}
          />
        </div>
      </footer>
    </div>
  );
};

export default PerfilUsuario; 