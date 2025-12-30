import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Snowfall from '../components/Snowfall';
import './EnvelopePage.css';

const EnvelopePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const navigate = useNavigate();

  const handleEnvelopeClick = () => {
    if (!isOpen) {
      setIsOpen(true);
      setTimeout(() => {
        setShowMessage(true);
      }, 800);
    }
  };

  const handleNextPage = () => {
    navigate('/celebration');
  };

  const message = `كل سنه وانتي بخير يا جنجونتي وكل سنه وانتي معايا ممكن مبقلناش كتير مع بعض ومبنكلمش كتير بس بجد انتي غاليه ومعزتك كبيره عندي اوي فا بجد ربنا يخليكي ليا ونفضل مع بعض دايما ممكن مكنش عارف اصلا انتي بتحبيني ومتعلقه بيا زي مانا متعلق بيكي ولا لا بس بجد انا بحبك فوق متتوقعي ومعزتك عندي غاليه بشكل كبير فا ياريت يعني نبطل تقل ولو بتحبيني ومتعلقه بيا نفس التعلق بعد متشوفي الرساله دي تروحي وتقولي اي حاجه تطمنيني لحسن دماغي مش بتريحني والله وبس كدا حبيت اقولق ان كل سنه وانتي طيبه وكل سنه وانتي معايا يا احلي جنجون في الدنيا وربنا يخلينا لبعض بقا وكدا اه صح لما تخلصي قراية الرساله دوسي علي الزرار الي تحت`;

  return (
    <div className="envelope-page">
      <Snowfall showHearts={true} showCandy={false} />

      {!showMessage ? (
        <div className="envelope-section">
          <h2 className="envelope-title">💌 رساله صغيره كدا من قلبي عشانك 💌</h2>
          <p className="envelope-subtitle">دوسي ع الظرف هيتفتح</p>
          
          <div 
            className={`envelope-wrapper ${isOpen ? 'open' : ''}`}
            onClick={handleEnvelopeClick}
          >
            <div className="envelope">
              <div className="envelope-flap"></div>
              <div className="envelope-body">
                <div className="envelope-letter">
                  <span>💕</span>
                </div>
              </div>
              <div className="envelope-heart">❤️</div>
            </div>
            
            <div className="envelope-decorations">
              <span className="decoration">🎄</span>
              <span className="decoration">⭐</span>
              <span className="decoration">🎁</span>
            </div>
          </div>

          <div className="click-hint">
            <span className="hint-arrow">👆</span>
            <span>دوسي هنا</span>
          </div>
        </div>
      ) : (
        <div className="message-section">
          <div className="message-card-wrapper">
            <div className="card-decorations top">
              <span>💕</span>
              <span>🌹</span>
              <span>💕</span>
            </div>
            
            <div className="message-card">
              <div className="card-header">
                <span className="header-icon">💌</span>
                <h3>كل سنه وانتي معايا</h3>
                <span className="header-icon">💌</span>
              </div>
              
              <div className="message-content">
                <p className="message-text">{message}</p>
              </div>

              <div className="card-footer">
                <span>❤️</span>
                <span>من قلبي الرساله دي ها</span>
                <span>❤️</span>
              </div>
            </div>

            <div className="card-decorations bottom">
              <span>🌹</span>
              <span>💖</span>
              <span>🌹</span>
            </div>
          </div>

          <button className="romantic-button next-button" onClick={handleNextPage}>
            <span>✨</span>
            دوسي هنا يا عيوني عشان تكملي
            <span>✨</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default EnvelopePage;
