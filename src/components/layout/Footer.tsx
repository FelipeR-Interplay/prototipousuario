import React from 'react';
import lempiVideo from '../../images/lempidominadas.webm';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#11181C]/20 backdrop-blur-sm text-center py-4 relative overflow-hidden">
      {/* Clip-path background */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          clipPath: 'polygon(0 60%, 100% 40%, 100% 100%, 0% 100%)',
          background: 'linear-gradient(45deg, #00B7E3, #46FC6D)'
        }}
      ></div>
      
      <div className="text-xs text-gray-500 mb-4 relative z-10">
        <p>Copyright © 2025 Interplay.tech</p>
        <p>Todos los derechos reservados</p>
      </div>
      <div className="w-full flex justify-center relative z-10">
        <video 
          src={lempiVideo} 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full max-w-[420px] h-auto object-contain"
        />
      </div>
    </footer>
  );
};

export default Footer; 