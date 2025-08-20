import React from 'react';
import heroBg from '../images/bg-01-profile.webp';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="animated-background">
      {/* Stadium top background with fade-out */}
      <div
        className="hero-image-bg"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Blobs */}
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>
    </div>
  );
};

export default AnimatedBackground; 