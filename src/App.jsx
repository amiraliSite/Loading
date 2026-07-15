import React, { useEffect, useState } from 'react';

const UltraLoading3D = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div style={styles.container}>
      {/* Background Particles */}
      <div style={styles.particleContainer}>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            style={{
              ...styles.particle,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Main 3D Scene */}
      <div style={styles.scene}>
        {/* Outer Ring 1 */}
        <div style={styles.ringOuter1}>
          <div style={styles.ringOuter1Inner} />
        </div>

        {/* Outer Ring 2 */}
        <div style={styles.ringOuter2}>
          <div style={styles.ringOuter2Inner} />
        </div>

        {/* Middle Ring */}
        <div style={styles.ringMiddle}>
          <div style={styles.ringMiddleInner} />
        </div>

        {/* Inner Ring */}
        <div style={styles.ringInner}>
          <div style={styles.ringInnerInner} />
        </div>

        {/* Core Sphere */}
        <div style={styles.core}>
          <div style={styles.coreInner} />
          <div style={styles.coreGlow} />
        </div>

        {/* Orbiting Dots */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            style={{
              ...styles.orbitDot,
              animationDelay: `${i * 0.3}s`,
              transform: `rotateY(${i * 45}deg) translateZ(120px)`,
            }}
          />
        ))}

        {/* Floating Cubes */}
        {[...Array(6)].map((_, i) => (
          <div
            key={`cube-${i}`}
            style={{
              ...styles.cube,
              animationDelay: `${i * 0.5}s`,
              transform: `rotateX(${i * 60}deg) rotateY(${i * 60}deg) translateZ(${150 + i * 20}px)`,
            }}
          />
        ))}
      </div>

      {/* Loading Text */}
      <div style={styles.textContainer}>
        <div style={styles.loadingText}>
          {'LOADING'.split('').map((char, i) => (
            <span
              key={i}
              style={{
                ...styles.char,
                animationDelay: `${i * 0.1}s`,
              }}
            >
              {char}
            </span>
          ))}
        </div>
        <div style={styles.progressBar}>
          <div style={styles.progressFill} />
        </div>
        <div style={styles.percentage}>
          {[...Array(3)].map((_, i) => (
            <span key={i} style={styles.dot}>
              .
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes rotateX {
          0% { transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg); }
          100% { transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg); }
        }
        @keyframes rotateY {
          0% { transform: rotateY(0deg) rotateZ(0deg); }
          100% { transform: rotateY(360deg) rotateZ(360deg); }
        }
        @keyframes rotateZ {
          0% { transform: rotateZ(0deg) rotateX(0deg); }
          100% { transform: rotateZ(360deg) rotateX(360deg); }
        }
        @keyframes rotateReverse {
          0% { transform: rotateX(0deg) rotateY(0deg); }
          100% { transform: rotateX(-360deg) rotateY(-360deg); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.3); opacity: 0.7; }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px #00f5ff, 0 0 40px #00f5ff, 0 0 60px #00f5ff; }
          50% { box-shadow: 0 0 40px #ff00ff, 0 0 80px #ff00ff, 0 0 120px #ff00ff; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotateX(0deg) rotateY(0deg); }
          25% { transform: translateY(-20px) rotateX(90deg) rotateY(90deg); }
          50% { transform: translateY(0px) rotateX(180deg) rotateY(180deg); }
          75% { transform: translateY(20px) rotateX(270deg) rotateY(270deg); }
        }
        @keyframes orbit {
          0% { transform: rotateY(0deg) translateZ(120px) rotateY(0deg); }
          100% { transform: rotateY(360deg) translateZ(120px) rotateY(-360deg); }
        }
        @keyframes particleFloat {
          0%, 100% { transform: translateY(0) translateX(0) scale(1); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100vh) translateX(${Math.random() * 200 - 100}px) scale(0); opacity: 0; }
        }
        @keyframes textWave {
          0%, 100% { transform: translateY(0) rotateX(0deg); opacity: 1; }
          50% { transform: translateY(-15px) rotateX(360deg); opacity: 0.5; }
        }
        @keyframes progressFill {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        @keyframes dotBounce {
          0%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
        }
        @keyframes cubeRotate {
          0% { transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg) translateZ(150px); }
          100% { transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg) translateZ(150px); }
        }
        @keyframes ringPulse {
          0%, 100% { transform: rotateX(70deg) rotateZ(0deg) scale(1); }
          50% { transform: rotateX(70deg) rotateZ(180deg) scale(1.1); }
        }
        @keyframes coreGlow {
          0%, 100% { 
            box-shadow: 0 0 30px #00f5ff, 0 0 60px #00f5ff, 0 0 90px #00f5ff, inset 0 0 30px #00f5ff;
            background: radial-gradient(circle, #00f5ff, #0080ff);
          }
          33% { 
            box-shadow: 0 0 30px #ff00ff, 0 0 60px #ff00ff, 0 0 90px #ff00ff, inset 0 0 30px #ff00ff;
            background: radial-gradient(circle, #ff00ff, #8000ff);
          }
          66% { 
            box-shadow: 0 0 30px #ffff00, 0 0 60px #ffff00, 0 0 90px #ffff00, inset 0 0 30px #ffff00;
            background: radial-gradient(circle, #ffff00, #ff8000);
          }
        }
      `}</style>
    </div>
  );
};

const styles = {
  container: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #0a0a0f 0%, #1a0a2e 50%, #0a0a0f 100%)',
    overflow: 'hidden',
    position: 'relative',
    perspective: '1000px',
  },
  particleContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  particle: {
    position: 'absolute',
    width: '4px',
    height: '4px',
    background: '#00f5ff',
    borderRadius: '50%',
    animation: 'particleFloat 5s infinite ease-in-out',
    boxShadow: '0 0 10px #00f5ff',
  },
  scene: {
    width: '300px',
    height: '300px',
    position: 'relative',
    transformStyle: 'preserve-3d',
    perspective: '1000px',
  },
  ringOuter1: {
    position: 'absolute',
    width: '280px',
    height: '280px',
    top: '10px',
    left: '10px',
    borderRadius: '50%',
    border: '3px solid transparent',
    borderTop: '3px solid #00f5ff',
    borderBottom: '3px solid #ff00ff',
    transformStyle: 'preserve-3d',
    animation: 'rotateX 4s linear infinite',
    boxShadow: '0 0 20px rgba(0, 245, 255, 0.5)',
  },
  ringOuter1Inner: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    border: '2px solid transparent',
    borderLeft: '2px solid #ffff00',
    borderRight: '2px solid #00ff80',
    animation: 'rotateY 3s linear infinite',
  },
  ringOuter2: {
    position: 'absolute',
    width: '240px',
    height: '240px',
    top: '30px',
    left: '30px',
    borderRadius: '50%',
    border: '3px solid transparent',
    borderLeft: '3px solid #ff00ff',
    borderRight: '3px solid #00f5ff',
    transformStyle: 'preserve-3d',
    animation: 'rotateY 3s linear infinite reverse',
    boxShadow: '0 0 20px rgba(255, 0, 255, 0.5)',
  },
  ringOuter2Inner: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    border: '2px solid transparent',
    borderTop: '2px solid #00ff80',
    borderBottom: '2px solid #ffff00',
    animation: 'rotateZ 2.5s linear infinite',
  },
  ringMiddle: {
    position: 'absolute',
    width: '200px',
    height: '200px',
    top: '50px',
    left: '50px',
    borderRadius: '50%',
    border: '3px solid transparent',
    borderTop: '3px solid #00ff80',
    borderBottom: '3px solid #ffff00',
    transformStyle: 'preserve-3d',
    animation: 'rotateZ 2s linear infinite',
    boxShadow: '0 0 20px rgba(0, 255, 128, 0.5)',
  },
  ringMiddleInner: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    border: '2px solid transparent',
    borderLeft: '2px solid #ff00ff',
    borderRight: '2px solid #00f5ff',
    animation: 'rotateX 1.5s linear infinite reverse',
  },
  ringInner: {
    position: 'absolute',
    width: '160px',
    height: '160px',
    top: '70px',
    left: '70px',
    borderRadius: '50%',
    border: '3px solid transparent',
    borderLeft: '3px solid #ffff00',
    borderRight: '3px solid #ff00ff',
    transformStyle: 'preserve-3d',
    animation: 'rotateReverse 2.5s linear infinite',
    boxShadow: '0 0 20px rgba(255, 255, 0, 0.5)',
  },
  ringInnerInner: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    border: '2px solid transparent',
    borderTop: '2px solid #00f5ff',
    borderBottom: '2px solid #00ff80',
    animation: 'rotateY 2s linear infinite',
  },
  core: {
    position: 'absolute',
    width: '80px',
    height: '80px',
    top: '110px',
    left: '110px',
    borderRadius: '50%',
    transformStyle: 'preserve-3d',
    animation: 'pulse 2s ease-in-out infinite',
  },
  coreInner: {
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    background: 'radial-gradient(circle, #00f5ff, #0080ff)',
    animation: 'coreGlow 3s ease-in-out infinite',
  },
  coreGlow: {
    position: 'absolute',
    width: '120px',
    height: '120px',
    top: '-20px',
    left: '-20px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(0, 245, 255, 0.3), transparent)',
    animation: 'pulse 2s ease-in-out infinite',
  },
  orbitDot: {
    position: 'absolute',
    width: '12px',
    height: '12px',
    top: '144px',
    left: '144px',
    borderRadius: '50%',
    background: '#00f5ff',
    boxShadow: '0 0 15px #00f5ff, 0 0 30px #00f5ff',
    animation: 'orbit 3s linear infinite',
    transformStyle: 'preserve-3d',
  },
  cube: {
    position: 'absolute',
    width: '20px',
    height: '20px',
    top: '140px',
    left: '140px',
    background: 'linear-gradient(135deg, #ff00ff, #00f5ff)',
    animation: 'cubeRotate 4s linear infinite',
    transformStyle: 'preserve-3d',
    boxShadow: '0 0 10px #ff00ff',
  },
  textContainer: {
    marginTop: '60px',
    textAlign: 'center',
    perspective: '500px',
  },
  loadingText: {
    display: 'flex',
    gap: '5px',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  char: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#00f5ff',
    textShadow: '0 0 10px #00f5ff, 0 0 20px #00f5ff, 0 0 30px #00f5ff',
    animation: 'textWave 2s ease-in-out infinite',
    display: 'inline-block',
    transformStyle: 'preserve-3d',
  },
  progressBar: {
    width: '300px',
    height: '6px',
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '3px',
    overflow: 'hidden',
    margin: '0 auto',
    boxShadow: '0 0 10px rgba(0, 245, 255, 0.3)',
  },
  progressFill: {
    width: '0%',
    height: '100%',
    background: 'linear-gradient(90deg, #00f5ff, #ff00ff, #ffff00, #00ff80)',
    borderRadius: '3px',
    animation: 'progressFill 3s ease-in-out infinite',
    boxShadow: '0 0 10px #00f5ff',
  },
  percentage: {
    marginTop: '10px',
    display: 'flex',
    justifyContent: 'center',
    gap: '5px',
  },
  dot: {
    fontSize: '24px',
    color: '#00f5ff',
    animation: 'dotBounce 1.4s ease-in-out infinite',
    display: 'inline-block',
  },
};

export default UltraLoading3D;