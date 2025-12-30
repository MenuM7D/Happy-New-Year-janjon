import { useEffect, useState, useCallback, useMemo } from 'react';
import './Fireworks.css';

const Fireworks = () => {
  const [fireworks, setFireworks] = useState([]);

  const colors = useMemo(() => [
    '#ff0000', '#ffd700', '#ff69b4', '#00ff00', 
    '#00ffff', '#ff00ff', '#ffffff', '#ff6600'
  ], []);

  const createFirework = useCallback(() => {
    const id = Date.now() + Math.random();
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * (window.innerHeight * 0.6);
    const color = colors[Math.floor(Math.random() * colors.length)];
    const particles = [];

    // Create explosion particles
    for (let i = 0; i < 30; i++) {
      const angle = (i / 30) * Math.PI * 2;
      const velocity = 50 + Math.random() * 100;
      particles.push({
        id: `${id}-${i}`,
        angle,
        velocity,
        x: 0,
        y: 0,
      });
    }

    return { id, x, y, color, particles };
  }, [colors]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFireworks((prev) => {
        // Remove old fireworks
        const filtered = prev.filter((fw) => Date.now() - fw.id < 2000);
        // Add new firework
        if (filtered.length < 5) {
          return [...filtered, createFirework()];
        }
        return filtered;
      });
    }, 500);

    return () => clearInterval(interval);
  }, [createFirework]);

  return (
    <div className="fireworks-container">
      {fireworks.map((fw) => (
        <div
          key={fw.id}
          className="firework-group"
          style={{ left: fw.x, top: fw.y }}
        >
          {fw.particles.map((particle) => (
            <div
              key={particle.id}
              className="firework-particle"
              style={{
                '--angle': `${particle.angle}rad`,
                '--velocity': `${particle.velocity}px`,
                '--color': fw.color,
              }}
            />
          ))}
          <div 
            className="firework-glow"
            style={{ '--color': fw.color }}
          />
        </div>
      ))}
    </div>
  );
};

export default Fireworks;
