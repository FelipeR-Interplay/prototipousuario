import { UserInfo, UserProfile, BettingHistory, ActiveBet, PerformanceData, VIPLevel, Notification } from '../types';

export const mockUserInfo: UserInfo = {
  nombre: 'Juan Carlos',
  apellido: 'Hernández',
  email: 'juan.hernandez@email.com',
  telefono: '+504 9999-8888',
  fechaNacimiento: '15-03-1990',
  direccion: 'Tegucigalpa, Honduras',
  documento: '0801-1990-12345',
  password: '********'
};

export const mockUserProfile: UserProfile = {
  nivel: 'Oro Maya',
  saldo: 'L1,235',
  puntos: 2300,
  apuestasTotales: 45,
  gananciasTotales: 'L2,450',
  perdidasTotales: 'L1,200'
};

export const mockBettingHistory: BettingHistory[] = [
  { id: '1', fecha: '2025-01-15', deporte: 'Fútbol', evento: 'Real Madrid vs Barcelona', apuesta: 'Victoria Real Madrid', monto: 'L500', resultado: 'ganada', ganancia: '+L750' },
  { id: '2', fecha: '2025-01-14', deporte: 'Fútbol', evento: 'PSG vs Bayern', apuesta: 'Victoria PSG', monto: 'L300', resultado: 'perdida', ganancia: '-L300' },
  { id: '3', fecha: '2025-01-13', deporte: 'Fútbol', evento: 'Manchester City vs Liverpool', apuesta: 'Más de 2.5 goles', monto: 'L200', resultado: 'ganada', ganancia: '+L320' },
  { id: '4', fecha: '2025-01-12', deporte: 'Fútbol', evento: 'Juventus vs Inter', apuesta: 'Empate', monto: 'L400', resultado: 'pendiente', ganancia: '+L400' },
  { id: '5', fecha: '2025-01-11', deporte: 'Fútbol', evento: 'Arsenal vs Chelsea', apuesta: 'Victoria Arsenal', monto: 'L250', resultado: 'ganada', ganancia: '+L425' }
];

export const mockActiveBets: ActiveBet[] = [
  { id: '1', fecha: '2025-01-16', deporte: 'Fútbol', evento: 'Bayern vs Dortmund', apuesta: 'Victoria Bayern', monto: 'L300', cuota: '2.15', gananciaPotencial: 'L645' },
  { id: '2', fecha: '2025-01-16', deporte: 'Fútbol', evento: 'Atlético Madrid vs Sevilla', apuesta: 'Menos de 2.5 goles', monto: 'L200', cuota: '1.85', gananciaPotencial: 'L370' },
  { id: '3', fecha: '2025-01-16', deporte: 'Fútbol', evento: 'AC Milan vs Roma', apuesta: 'Victoria AC Milan', monto: 'L150', cuota: '2.50', gananciaPotencial: 'L375' }
];

export const mockPerformanceData: PerformanceData = {
  periodo: 'Último mes',
  apuestas: 45,
  ganadas: 28,
  perdidas: 12,
  ganancia: '+L1,250',
  porcentajeExito: 62.2
};

export const mockVIPLevels: VIPLevel[] = [
  {
    id: '1',
    nombre: 'START',
    nivel: 1,
    puntosRequeridos: 0,
    beneficios: ['Acceso básico', 'Soporte por email'],
    color: '#CD7F32',
    icon: '🛡️'
  },
  {
    id: '2',
    nombre: 'BASIC',
    nivel: 2,
    puntosRequeridos: 100,
    beneficios: ['Cashback 2%', 'Soporte prioritario', 'Bonos especiales'],
    color: '#C0C0C0',
    icon: '⚔️'
  },
  {
    id: '3',
    nombre: 'VIP PRO',
    nivel: 3,
    puntosRequeridos: 10000,
    beneficios: ['Cashback 5%', 'Soporte VIP', 'Bonos exclusivos', 'Retiros prioritarios'],
    color: '#00B7E3',
    icon: '💎'
  },
  {
    id: '4',
    nombre: 'VIP ELITE',
    nivel: 4,
    puntosRequeridos: 1000,
    beneficios: ['Cashback 8%', 'Soporte personal', 'Bonos premium', 'Retiros instantáneos'],
    color: '#8A2BE2',
    icon: '⚡'
  },
  {
    id: '5',
    nombre: 'VIP MASTER',
    nivel: 5,
    puntosRequeridos: 2000,
    beneficios: ['Cashback 10%', 'Soporte 24/7', 'Bonos máximos', 'Retiros instantáneos', 'Gestor personal'],
    color: '#FFD700',
    icon: '👑'
  }
];

export const mockNotifications: Notification[] = [
  { id: '1', titulo: '¡Apuesta ganada!', mensaje: 'Has ganado L750 en Real Madrid vs Barcelona', fecha: '2025-01-15', leida: false, tipo: 'success' },
  { id: '2', titulo: 'Bono disponible', mensaje: 'Tienes L200 disponibles en Tigo Money', fecha: '2025-01-15', leida: false, tipo: 'info' },
  { id: '3', titulo: 'Nivel actualizado', mensaje: 'Has subido al nivel Oro Maya', fecha: '2025-01-14', leida: true, tipo: 'success' }
]; 