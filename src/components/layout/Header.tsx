import React from 'react';

interface HeaderProps {
  title: string;
  onBack: () => void;
  showBackButton?: boolean;
}

const Header: React.FC<HeaderProps> = ({ title, onBack, showBackButton = true }) => {
  return (
    <header className="p-4 mb-4 flex items-center justify-between">
      {showBackButton ? (
        <button 
          onClick={onBack}
          className="w-12 h-12 rounded-full transition-transform active:scale-95 bg-gradient-to-r from-[#00B7E3] to-[#73FFFF] text-[#0b1b22] font-extrabold shadow-md"
          aria-label="Atrás"
        >
          ←
        </button>
      ) : (
        <div className="w-12"></div>
      )}
      <h1 className="font-extrabold text-lg text-white">{title}</h1>
      <div className="w-12"></div>
    </header>
  );
};

export default Header; 