import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './AnimatedProfileImage.css';

const AnimatedProfileImage = ({ 
  src, 
  backSrc = null, 
  alt = "Profile Picture", 
  animationType = "float",
  showClickText = false,
  backText = null,
  enableBoomerang = true
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isBoomeranging, setIsBoomeranging] = useState(false);
  
  const imageRef = useRef(null);
  const controls = useAnimation();

  // Mouse tracking for tilt effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (imageRef.current && animationType === 'tilt' && !isDragging && !isBoomeranging) {
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
  }, [animationType, isDragging, isBoomeranging]);

  const handleImageClick = (event) => {
    if (isDragging || isBoomeranging) return;
    
    if (backSrc) {
      setIsFlipped(!isFlipped);
    }
  };

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = async (event, info) => {
    setIsDragging(false);
    
    if (!enableBoomerang) {
      await controls.start({
        x: 0,
        y: 0,
        transition: { type: "spring", stiffness: 300, damping: 30 }
      });
      return;
    }
    
    const minSpeed = 1000;
    const { velocity } = info;
    let speed = Math.sqrt(velocity.x ** 2 + velocity.y ** 2);
    if (speed < minSpeed) speed = minSpeed; // enforce minimum

    setIsBoomeranging(true);

    const moveDistance = 800;
    const normalizedVelX = velocity.x / (speed || 1); // avoid divide by zero
    const normalizedVelY = velocity.y / (speed || 1);

    // Bounce 1: throw direction (fast, ease-in)
    await controls.start({
      x: normalizedVelX * moveDistance,
      y: normalizedVelY * moveDistance,
      rotate: 360,
      transition: { duration: 0.3, ease: "easeIn" }
    });
    
    // Bounce 2: opposite direction (fast, ease-out)
    await controls.start({
      x: -normalizedVelX * moveDistance,
      y: -normalizedVelY * moveDistance,
      rotate: 270,
      transition: { duration: 0.35, ease: "easeOut" }
    });
    
    // Bounce 3: throw direction, half distance
    await controls.start({
      x: normalizedVelX * moveDistance * 0.5,
      y: normalizedVelY * moveDistance * 0.5,
      rotate: 180,
      transition: { duration: 0.5, ease: "easeIn" }
    });
    
    // Bounce 4: opposite direction, half distance
    await controls.start({
      x: -normalizedVelX * moveDistance * 0.5,
      y: -normalizedVelY * moveDistance * 0.5,
      rotate: 90,
      transition: { duration: 0.75, ease: "easeOut" }
    });
    
    // Return home (smooth, spring)
    await controls.start({
      x: 0,
      y: 0,
      rotate: 0,
      transition: { type: "spring", stiffness: 100, damping: 50 }
    });
    
    setIsBoomeranging(false);
  };

  const getImageStyle = () => {
    let baseStyle = {};
    
    if (animationType === 'tilt' && isHovered && !isDragging && !isBoomeranging) {
      baseStyle = {
        transform: `perspective(1000px) rotateX(${mousePosition.y * -10}deg) rotateY(${mousePosition.x * 10}deg) scale(1.05)`
      };
    }
    
    return baseStyle;
  };

  const getAnimationClass = () => {
    const baseClass = 'animated-profile-image';
    const typeClass = `${baseClass}--${animationType}`;
    const hoverClass = isHovered && !isDragging && !isBoomeranging ? `${baseClass}--hovered` : '';
    const flipClass = showClickText && backSrc ? `${baseClass}--flippable` : '';
    const flippedClass = isFlipped ? `${baseClass}--flipped` : '';
    const draggingClass = isDragging ? `${baseClass}--dragging` : '';
    const boomerangClass = isBoomeranging ? `${baseClass}--boomeranging` : '';
    return `${baseClass} ${typeClass} ${hoverClass} ${flipClass} ${flippedClass} ${draggingClass} ${boomerangClass}`.trim();
  };

  return (
    <div className="profile-image-container">
      {/* Floating particles for particle effect */}
      {animationType === 'particles' && !isDragging && !isBoomeranging && (
        <div className="particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className={`particle particle-${i}`}></div>
          ))}
        </div>
      )}
      
      {/* Geometric background for geometric effect */}
      {animationType === 'geometric' && !isDragging && !isBoomeranging && (
        <div className="geometric-bg">
          <div className="geo-shape geo-shape-1"></div>
          <div className="geo-shape geo-shape-2"></div>
          <div className="geo-shape geo-shape-3"></div>
        </div>
      )}
      
      {/* Main image with motion */}
      <motion.div
        ref={imageRef}
        className={getAnimationClass()}
        style={{
          ...getImageStyle(),
          cursor: isDragging ? "grabbing" : (enableBoomerang ? "grab" : "pointer")
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleImageClick}
        drag={enableBoomerang}
        dragMomentum={false}
        dragElastic={0.2}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        animate={controls}
        whileDrag={{ 
          scale: 1.1, 
          zIndex: 1000
        }}
      >
        {/* Image container with flip functionality */}
        <div className="image-flip-container">
          {/* Front side */}
          <div className="image-side image-front">
            <img src={src} alt={alt} />
          </div>
          
          {/* Back side */}
          {backSrc && (
            <div className="image-side image-back">
              <img src={backSrc} alt={`${alt} - Back`} />
              {/* Custom text overlay for back image */}
              {backText && (
                <div className="back-text-overlay back-text-center">
                  <span className="back-text">{backText}</span>
                </div>
              )}
            </div>
          )}
        </div>
        
        {/* Overlay effects */}
        <div className="image-overlay"></div>
        
        {/* Glitch layers for glitch effect */}
        {animationType === 'glitch' && (
          <>
            <div className="glitch-layer glitch-layer-1">
              <img src={isFlipped && backSrc ? backSrc : src} alt={alt} />
            </div>
            <div className="glitch-layer glitch-layer-2">
              <img src={isFlipped && backSrc ? backSrc : src} alt={alt} />
            </div>
          </>
        )}
      </motion.div>
      
      {/* Ripple effect for ripple animation */}
      {animationType === 'ripple' && isHovered && !isDragging && !isBoomeranging && (
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