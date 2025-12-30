import { useEffect, useState, useCallback } from 'react';
import Fireworks from '../components/Fireworks';
import Snowfall from '../components/Snowfall';
import './CelebrationPage.css';

const CelebrationPage = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [showRedirect, setShowRedirect] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  
  const fullText = 'Happy New Year Together Ya Banoty';

  const typeText = useCallback(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
        setIsTypingComplete(true);
        setTimeout(() => {
          setShowRedirect(true);
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const cleanup = typeText();
    return cleanup;
  }, [typeText]);

  useEffect(() => {
    if (showRedirect) {
      const countdownInterval = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(countdownInterval);
            window.location.href = 'https://wa.me/201227156671';
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(countdownInterval);
    }
  }, [showRedirect]);

  return (
    <div className="celebration-page">
      <Fireworks />
      <Snowfall showHearts={true} showCandy={false} />

      <div className="celebration-content">
        <div className="stars-decoration">
          {[...Array(15)].map((_, i) => (
            <div 
              key={i} 
              className="star"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            >
              ⭐
            </div>
          ))}
        </div>

        <div className="main-celebration-text">
          <div className="text-wrapper">
            <span className="celebration-icon">🎆</span>
            <h1 className={`typewriter-title ${isTypingComplete ? 'complete' : ''}`}>
              {displayedText}
              <span className="cursor">|</span>
            </h1>
            <span className="celebration-icon">🎆</span>
          </div>
          
          <div className="subtitle-decoration">
            <span>💖</span>
            <span className="subtitle">كل سنة وانتي معايا يا قمري</span>
            <span>💖</span>
          </div>
        </div>

        <div className="celebration-emojis">
          <span className="emoji-float">🎉</span>
          <span className="emoji-float">🥳</span>
          <span className="emoji-float">🎊</span>
          <span className="emoji-float">💕</span>
          <span className="emoji-float">🎉</span>
        </div>

        {showRedirect && (
          <div className="redirect-notice">
            <div className="notice-card">
              <span className="notice-icon">💬</span>
              <p className="notice-text">جاري تحويلك للواتساب...</p>
              <div className="countdown-circle">
                <span>{countdown}</span>
              </div>
              <p className="notice-hint">استني ثواني وهتتحولي لشاتي تلقائي يا عيوني 💕</p>
            </div>
          </div>
        )}

        <div className="bottom-hearts">
          <span>❤️</span>
          <span>💖</span>
          <span>💕</span>
          <span>💗</span>
          <span>❤️</span>
        </div>
      </div>
    </div>
  );
};

export default CelebrationPage;
