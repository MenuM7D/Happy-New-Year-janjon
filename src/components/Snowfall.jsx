import { useEffect, useState, useMemo } from 'react';
import './Snowfall.css';

const Snowfall = ({ showHearts = true, showCandy = true }) => {
  const [particles, setParticles] = useState([]);

  const candyEmojis = useMemo(() => ['🍬', '🍭', '🎄', '⭐', '🎁'], []);

  useEffect(() => {
    const createParticles = () => {
      const newParticles = [];
      const particleCount = 50;

      for (let i = 0; i < particleCount; i++) {
        const types = ['snowflake'];
        if (showHearts) types.push('heart');
        if (showCandy) types.push('candy');
        
        const type = types[Math.floor(Math.random() * types.length)];
        const candyIndex = Math.floor(Math.random() * candyEmojis.length);
        
        newParticles.push({
          id: i,
          type,
          left: Math.random() * 100,
          delay: Math.random() * 5,
          duration: 5 + Math.random() * 10,
          size: type === 'snowflake' ? 10 + Math.random() * 20 : 15 + Math.random() * 15,
          candyIndex,
        });
      }
      setParticles(newParticles);
    };

    createParticles();
  }, [showHearts, showCandy, candyEmojis]);

  const getParticleContent = (particle) => {
    switch (particle.type) {
      case 'heart':
        return '❤️';
      case 'candy':
        return candyEmojis[particle.candyIndex];
      default:
        return '❄️';
    }
  };

  return (
    <div className="snowfall-container">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={`particle ${particle.type}`}
          style={{
            left: `${particle.left}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
            fontSize: `${particle.size}px`,
          }}
        >
          {getParticleContent(particle)}
        </div>
      ))}
    </div>
  );
};

export default Snowfall;
