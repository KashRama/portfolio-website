import React, { useState, useEffect, useRef } from 'react';
import './AnimatedProfileImage.css';

const AnimatedProfileImage = ({ src, alt = "Profile Picture", animationType = "float" }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const imageRef = useRef(null);

  // Mouse tracking for tilt effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (imageRef.current && animationType === 'tilt') {
        const rect = imageRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        setMousePosition({
          x: (e.clientX - centerX) / (rect.width / 2),
          y: (e.clientY - centerY) / (rect.height / 2)
        });
      }
    };

    if (animationType === 'tilt') {
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [animationType]);

  const getImageStyle = () => {
    if (animationType === 'tilt' && isHovered) {
      return {
        transform: `perspective(1000px) rotateX(${mousePosition.y * -10}deg) rotateY(${mousePosition.x * 10}deg) scale(1.05)`
      };
    }
    return {};
  };

  const getAnimationClass = () => {
    const baseClass = 'animated-profile-image';
    const typeClass = `${baseClass}--${animationType}`;
    const hoverClass = isHovered ? `${baseClass}--hovered` : '';
    return `${baseClass} ${typeClass} ${hoverClass}`.trim();
  };

  return (
    <div className="profile-image-container">
      {/* Floating particles for particle effect */}
      {animationType === 'particles' && (
        <div className="particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className={`particle particle-${i}`}></div>
          ))}
        </div>
      )}
      
      {/* Geometric background for geometric effect */}
      {animationType === 'geometric' && (
        <div className="geometric-bg">
          <div className="geo-shape geo-shape-1"></div>
          <div className="geo-shape geo-shape-2"></div>
          <div className="geo-shape geo-shape-3"></div>
        </div>
      )}
      
      {/* Main image */}
      <div
        ref={imageRef}
        className={getAnimationClass()}
        style={getImageStyle()}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={src} alt={alt} />
        
        {/* Overlay effects */}
        <div className="image-overlay"></div>
        
        {/* Glitch layers for glitch effect */}
        {animationType === 'glitch' && (
          <>
            <div className="glitch-layer glitch-layer-1">
              <img src={src} alt={alt} />
            </div>
            <div className="glitch-layer glitch-layer-2">
              <img src={src} alt={alt} />
            </div>
          </>
        )}
        
        {/* Liquid blob for liquid effect */}
        {animationType === 'liquid' && (
          <svg className="liquid-mask" viewBox="0 0 200 200">
            <defs>
              <clipPath id="liquid-clip">
                <path className="liquid-path" d="M100,50 Q150,50 150,100 Q150,150 100,150 Q50,150 50,100 Q50,50 100,50 Z" />
              </clipPath>
            </defs>
          </svg>
        )}
      </div>
      
      {/* Ripple effect for ripple animation */}
      {animationType === 'ripple' && isHovered && (
        <div className="ripple-effect">
          <div className="ripple ripple-1"></div>
          <div className="ripple ripple-2"></div>
          <div className="ripple ripple-3"></div>
        </div>
      )}
    </div>
  );
};

export default AnimatedProfileImage;