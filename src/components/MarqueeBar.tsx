import React from 'react';

interface MarqueeBarProps {
  messages?: string[];
  speedMs?: number; // duración del loop completo
}

const defaultMessages: string[] = [
  'Usuario X ganó L3,200 en Plinko',
  'Hay 5 freebets activas esta semana',
  'Ya van 30 inscritos en el torneo de fútbol',
  'Nuevo jackpot supera L50,000 ¡participa!',
  'Cashback VIP duplicado este fin de semana',
  'Activa tu KYC para retiros instantáneos',
];

function highlightNumbers(text: string): React.ReactNode[] {
  const parts = text.split(/(\d[\d.,]*)/g);
  return parts.map((part, idx) => {
    if (/^\d[\d.,]*$/.test(part)) {
      return (
        <span key={`n-${idx}`} className="mx-1 text-[#46FC6D] font-semibold">
          {part}
        </span>
      );
    }
    return <span key={`t-${idx}`}>{part}</span>;
  });
}

const MarqueeBar: React.FC<MarqueeBarProps> = ({ messages = defaultMessages, speedMs = 35000 }) => {
  const renderRow = () => (
    <span className="inline-flex items-center gap-6 pr-12">
      {messages.map((msg, i) => (
        <span key={i} className="inline-flex items-center">
          {highlightNumbers(msg)}
          {i < messages.length - 1 && <span className="opacity-60 mx-6 text-white">•</span>}
        </span>
      ))}
    </span>
  );

  return (
    <div className="w-full my-4">
      <div className="w-full rounded-2xl bg-[#0d1117]/60 backdrop-blur-sm h-8 md:h-9 flex items-center px-3 overflow-hidden text-white">
        <div className="relative marquee w-full" style={{ ['--marquee-duration' as any]: `${speedMs}ms` }}>
          <div className="marquee-content">{renderRow()}</div>
          <div className="marquee-content" aria-hidden>{renderRow()}</div>
        </div>
      </div>
    </div>
  );
};

export default MarqueeBar;