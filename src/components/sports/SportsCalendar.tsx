import React, { useMemo, useState, useRef, useEffect } from 'react';
import { CalendarDays, Clock, ArrowRight, Calendar as CalendarIcon, Trophy, Zap, Gift, Star, Gamepad2 } from 'lucide-react';
import calendarImg from '../../images/calendar.webp';
import interVsMilanBg from '../../images/intervsmilan.png';

interface SportsEvent {
  id: string;
  title: string;
  type: 'match' | 'tournament' | 'jackpot' | 'promo' | 'special';
  dateISO: string; // YYYY-MM-DD
  kickoff: string; // HH:mm
  countdown: string; // e.g., "133h - 23m - 02s"
  icon?: string; // Para diferentes iconos según el tipo
}

const sampleEvents: SportsEvent[] = [
  // Miércoles 17/09
  { id: 'e1', title: 'Real Madrid Vs Barcelona', type: 'match', dateISO: '2025-09-17', kickoff: '18:30', countdown: '205h - 10m - 12s' },
  { id: 'e2', title: 'Jackpot Mega Slots L850,000', type: 'jackpot', dateISO: '2025-09-17', kickoff: '20:00', countdown: '206h - 40m - 12s', icon: '💰' },
  
  // Jueves 18/09
  { id: 'e3', title: 'Copa Champions League - Inicio', type: 'tournament', dateISO: '2025-09-18', kickoff: '14:00', countdown: '181h - 00m - 12s', icon: '🏆' },
  { id: 'e4', title: 'PSG Vs Bayern Munich', type: 'match', dateISO: '2025-09-18', kickoff: '21:00', countdown: '183h - 40m - 12s' },
  
  // Viernes 19/09
  { id: 'e5', title: 'Inter Vs Milan', type: 'match', dateISO: '2025-09-19', kickoff: '19:45', countdown: '157h - 55m - 12s' },
  { id: 'e6', title: 'Torneo de Poker Texas Hold\'em', type: 'tournament', dateISO: '2025-09-19', kickoff: '22:00', countdown: '160h - 20m - 12s', icon: '♠️' },
  
  // Sábado 20/09
  { id: 'e7', title: 'Arsenal Vs Chelsea', type: 'match', dateISO: '2025-09-20', kickoff: '16:30', countdown: '133h - 23m - 02s' },
  { id: 'e8', title: 'Super Bingo L500,000', type: 'special', dateISO: '2025-09-20', kickoff: '20:00', countdown: '136h - 53m - 02s', icon: '🎱' },
  
  // Domingo 21/09
  { id: 'e9', title: 'Man City Vs Liverpool', type: 'match', dateISO: '2025-09-21', kickoff: '17:15', countdown: '109h - 12m - 42s' },
  { id: 'e10', title: 'Promoción: Triple Puntos VIP', type: 'promo', dateISO: '2025-09-21', kickoff: '00:00', countdown: '96h - 00m - 00s', icon: '⭐' },
  
  // Lunes 22/09
  { id: 'e11', title: 'Napoli Vs Roma', type: 'match', dateISO: '2025-09-22', kickoff: '20:00', countdown: '85h - 00m - 42s' },
  { id: 'e12', title: 'Mega Jackpot Ruleta L1,200,000', type: 'jackpot', dateISO: '2025-09-22', kickoff: '23:59', countdown: '88h - 59m - 42s', icon: '🎰' },
  
  // Martes 23/09
  { id: 'e13', title: 'Atleti Vs Sevilla', type: 'match', dateISO: '2025-09-23', kickoff: '20:30', countdown: '60h - 35m - 42s' },
  { id: 'e14', title: 'Torneo FIFA 24 - Final', type: 'tournament', dateISO: '2025-09-23', kickoff: '18:00', countdown: '58h - 05m - 42s', icon: '🎮' },
];

// Función para obtener icono y colores según el tipo de evento
function getEventStyle(event: SportsEvent) {
  switch (event.type) {
    case 'match':
      return {
        icon: CalendarDays,
        bgColor: 'bg-[#27C9E7]',
        textColor: 'text-[#0b1b22]'
      };
    case 'tournament':
      return {
        icon: Trophy,
        bgColor: 'bg-gradient-to-br from-[#FFD700] to-[#FFA500]',
        textColor: 'text-[#8B4513]'
      };
    case 'jackpot':
      return {
        icon: Zap,
        bgColor: 'bg-gradient-to-br from-[#46FC6D] to-[#00C851]',
        textColor: 'text-[#0d3417]'
      };
    case 'promo':
      return {
        icon: Star,
        bgColor: 'bg-gradient-to-br from-[#FF6B9D] to-[#C44569]',
        textColor: 'text-white'
      };
    case 'special':
      return {
        icon: Gift,
        bgColor: 'bg-gradient-to-br from-[#A55EEA] to-[#7B68EE]',
        textColor: 'text-white'
      };
    default:
      return {
        icon: CalendarDays,
        bgColor: 'bg-[#27C9E7]',
        textColor: 'text-[#0b1b22]'
      };
  }
}

function buildWeek(ref = new Date()): { label: string; sub: string; dateISO: string }[] {
  const start = new Date(ref);
  const day = start.getDay();
  const diff = (day === 0 ? -6 : 1) - day;
  start.setDate(start.getDate() + diff);
  return Array.from({ length: 7 }).map((_, i) => {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    const n = d.getDate();
    const weekdays = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];
    return { label: String(n), sub: weekdays[i], dateISO: d.toISOString().slice(0, 10) };
  });
}

const SportsCalendar: React.FC = () => {
  const week = useMemo(() => buildWeek(new Date('2025-09-18')), []);
  const [active, setActive] = useState(3);
  const [indicatorStyle, setIndicatorStyle] = useState({ width: 0, left: 0 });
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const activeDateISO = week[active]?.dateISO;
  const filtered = useMemo(() => sampleEvents.filter((e) => e.dateISO === activeDateISO), [activeDateISO]);

  // Actualizar posición y forma del indicador cuando cambie el día activo
  useEffect(() => {
    const updateIndicator = () => {
      const activeButton = buttonRefs.current[active];
      if (activeButton && containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const buttonRect = activeButton.getBoundingClientRect();
        
        setIndicatorStyle({
          width: buttonRect.width,
          left: buttonRect.left - containerRect.left
        });
      }
    };

    // Pequeño delay para asegurar que el DOM está actualizado
    const timer = setTimeout(updateIndicator, 50);
    
    // Recalcular en resize para responsive
    window.addEventListener('resize', updateIndicator);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateIndicator);
    };
  }, [active]);

  const handleDayClick = (index: number) => {
    if (index !== active) {
      setIsTransitioning(true);
      setActive(index);
      
      // Reset animation state
      setTimeout(() => {
        setIsTransitioning(false);
      }, 400);
    }
  };

  return (
    <section className="bg-transparent rounded-2xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <img src={calendarImg} alt="Calendario" className="w-6 h-6" />
          <h3 className="font-extrabold text-base text-white uppercase">Calendario</h3>
        </div>
        <button className="text-[#46FC6D] text-sm font-extrabold inline-flex items-center gap-1">
          Ver todos <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <div className="bg-[#1E2930] rounded-2xl p-3 md:p-4 border border-[#0d1117]">
        {/* Días */}
        <div 
          ref={containerRef}
          className="relative flex items-center gap-3 md:gap-5 overflow-x-auto no-scrollbar pb-2 md:pb-3"
        >
          {/* Indicador animado de fondo que se transforma */}
          <div
            className={`absolute top-0 bg-[#27C9E7] shadow-md z-0 h-20 md:h-24 ${
              isTransitioning ? 'morph-transform' : ''
            }`}
            style={{
              width: `${indicatorStyle.width}px`,
              left: `${indicatorStyle.left}px`,
              borderRadius: '24px',
              transform: 'translateZ(0)',
              transition: isTransitioning 
                ? 'left 400ms cubic-bezier(0.4, 0, 0.2, 1), width 400ms cubic-bezier(0.4, 0, 0.2, 1)'
                : 'all 400ms cubic-bezier(0.4, 0, 0.2, 1)',
              transformOrigin: 'center',
            }}
          />
          
          {week.map((d, idx) => (
            <button
              key={d.dateISO}
              ref={(el) => (buttonRefs.current[idx] = el)}
              onClick={() => handleDayClick(idx)}
              className={
                'relative flex flex-col items-center justify-center rounded-3xl z-10 ' +
                'transition-all duration-400 ease-out transform ' +
                (idx === active
                  ? 'text-[#0b1b22] w-12 h-20 md:w-14 md:h-24 scale-105'
                  : 'text-white w-10 h-20 md:w-14 md:h-24 hover:text-[#27C9E7] hover:scale-105 scale-95')
              }
              style={{
                transition: 'all 400ms cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              <span className="text-xl md:text-2xl font-extrabold leading-none">{d.label}</span>
              <span className={"text-[10px] md:text-[12px] mt-1 transition-colors duration-300 " + (idx === active ? 'text-[#0b1b22]/90' : 'text-white/70')}>{d.sub}</span>
              {idx === active && <span className="absolute bottom-2 w-1 h-1 rounded-full bg-[#0b1b22] transition-all duration-300" />}
            </button>
          ))}
        </div>

        {/* Subtítulo */}
        <h4 className="mt-1 mb-2 md:mb-3 text-[13px] md:text-sm text-white/90 font-semibold">Eventos de la semana</h4>

        {/* Eventos */}
        <div className="space-y-2.5 md:space-y-3">
          {filtered.map((ev, i) => {
            const isInterVsMilan = ev.title === 'Inter Vs Milan';
            const eventStyle = getEventStyle(ev);
            const IconComponent = eventStyle.icon;
            
            return (
              <div
                key={ev.id}
                className={
                  'flex items-center gap-3 md:gap-4 rounded-2xl p-3 md:p-4 transition-all duration-500 ease-out transform relative overflow-hidden ' +
                  'animate-in slide-in-from-right-5 fade-in-0 bg-[#0f1419] ' +
                  (ev.type === 'jackpot' ? 'jackpot-shimmer' : 'border border-[#121922]')
                }
                style={{
                  animationDelay: `${i * 100}ms`,
                  animationFillMode: 'both',
                  ...(isInterVsMilan && {
                    backgroundImage: `url(${interVsMilanBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  })
                }}
              >
                {/* Overlay para el evento Inter vs Milan */}
                {isInterVsMilan && (
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0f1419]/90 via-[#0f1419]/70 to-transparent rounded-2xl" />
                )}
                
                {/* Icono dinámico según el tipo de evento */}
                <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl ${eventStyle.bgColor} flex items-center justify-center ${eventStyle.textColor} relative z-20`}>
                  <IconComponent className="w-6 h-6 md:w-7 md:h-7" />
                </div>
                
                <div className="flex-1 relative z-20">
                  <div className="flex items-center gap-2">
                    <p className="text-[12px] md:text-base font-normal md:font-semibold text-white leading-snug md:leading-tight">{ev.title}</p>
                    {/* Badge de tipo para eventos especiales */}
                    {ev.type !== 'match' && (
                      <span className={`px-2 py-1 rounded-full text-[8px] md:text-[10px] font-bold uppercase ${
                        ev.type === 'jackpot' ? 'bg-[#46FC6D]/20 text-[#46FC6D]' :
                        ev.type === 'tournament' ? 'bg-[#FFD700]/20 text-[#FFD700]' :
                        ev.type === 'promo' ? 'bg-[#FF6B9D]/20 text-[#FF6B9D]' :
                        'bg-[#A55EEA]/20 text-[#A55EEA]'
                      }`}>
                        {ev.type === 'jackpot' ? 'JACKPOT' :
                         ev.type === 'tournament' ? 'TORNEO' :
                         ev.type === 'promo' ? 'PROMO' : 'ESPECIAL'}
                      </span>
                    )}
                  </div>
                  <div className="mt-1.5 md:mt-2 flex items-center gap-4 md:gap-6 text-[13.33px] md:text-sm text-white/85 font-medium">
                    <span className="inline-flex items-center gap-2">
                      <CalendarIcon className="w-[18px] h-[18px] md:w-6 md:h-6" />
                      {new Date(ev.dateISO).toLocaleDateString('es-ES')}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <Clock className="w-[18px] h-[18px] md:w-6 md:h-6" />
                      {ev.countdown}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SportsCalendar;