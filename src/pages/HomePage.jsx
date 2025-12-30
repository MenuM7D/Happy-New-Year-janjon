import { useNavigate } from 'react-router-dom';
import Snowfall from '../components/Snowfall';
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/envelope');
  };

  return (
    <div className="home-page">
      <Snowfall showHearts={true} showCandy={true} />
      
      <div className="background-decorations">
        <div className="christmas-lights">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="light" style={{ animationDelay: `${i * 0.2}s` }} />
          ))}
        </div>
      </div>

      <div className="content-wrapper">
        <div className="main-title-container">
          <div className="sparkle sparkle-1">✨</div>
          <div className="sparkle sparkle-2">⭐</div>
          <div className="sparkle sparkle-3">✨</div>
          
          <h1 className="main-title">
            <span className="title-line">Happy New Year</span>
            <span className="title-line together">Together</span>
            <span className="title-line name">Jojty</span>
          </h1>

          <div className="sparkle sparkle-4">⭐</div>
          <div className="sparkle sparkle-5">✨</div>
          <div className="sparkle sparkle-6">⭐</div>
        </div>

        <div className="decorative-hearts">
          <span className="heart-float">💕</span>
          <span className="heart-float">❤️</span>
          <span className="heart-float">💖</span>
        </div>

        <button className="christmas-button main-button" onClick={handleClick}>
          <span className="button-snow">❄️</span>
          دوسي هنا يا قلبي
          <span className="button-snow">❄️</span>
        </button>

        <div className="bottom-decoration">
          <span>🎄</span>
          <span>🎁</span>
          <span>⭐</span>
          <span>🎁</span>
          <span>🎄</span>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
