export type SubViewType = 'main' | 'historial' | 'apuestas' | 'rendimiento';

export interface UserInfo {
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  fechaNacimiento: string;
  direccion: string;
  documento: string;
  password: string;
}

export interface UserProfile {
  saldo: string;
  nivel: string;
  puntos: number;
  apuestasTotales: number;
  gananciasTotales: string;
  perdidasTotales: string;
}

export interface BettingHistory {
  id: string;
  fecha: string;
  deporte: string;
  evento: string;
  apuesta: string;
  monto: string;
  resultado: 'ganada' | 'perdida' | 'pendiente';
  ganancia: string;
}

export interface ActiveBet {
  id: string;
  fecha: string;
  deporte: string;
  evento: string;
  apuesta: string;
  monto: string;
  cuota: string;
  gananciaPotencial: string;
}

export interface PerformanceData {
  periodo: string;
  apuestas: number;
  ganadas: number;
  perdidas: number;
  ganancia: string;
  porcentajeExito: number;
}

export interface VIPLevel {
  id: string;
  nombre: string;
  nivel: number;
  puntosRequeridos: number;
  beneficios: string[];
  color: string;
  icon: string;
}

export interface Notification {
  id: string;
  titulo: string;
  mensaje: string;
  fecha: string;
  leida: boolean;
  tipo: 'info' | 'success' | 'warning' | 'error';
} 