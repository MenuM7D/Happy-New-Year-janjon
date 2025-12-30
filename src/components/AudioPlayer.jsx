import { useEffect, useRef, useState } from 'react';
import './AudioPlayer.css';

const AudioPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPrompt, setShowPrompt] = useState(true);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
          setShowPrompt(false);
        })
        .catch((error) => {
          console.log('Audio play failed:', error);
        });
    }
  };

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  useEffect(() => {
    // Try to autoplay with user interaction
    const handleFirstInteraction = () => {
      if (!isPlaying && audioRef.current) {
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
            setShowPrompt(false);
          })
          .catch(() => {});
      }
      document.removeEventListener('click', handleFirstInteraction);
    };

    document.addEventListener('click', handleFirstInteraction);

    return () => {
      document.removeEventListener('click', handleFirstInteraction);
    };
  }, [isPlaying]);

  return (
    <>
      <audio
        ref={audioRef}
        loop
        preload="auto"
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
      >
        <source src="https://upload.wikimedia.org/wikipedia/commons/2/29/Jingle_Bells_Synthesia.ogg" type="audio/ogg" />
      </audio>

      {showPrompt && (
        <div className="audio-prompt" onClick={handlePlay}>
          <div className="prompt-content">
            <span className="music-icon">🎵</span>
            <p>اضغط لتشغيل الموسيقى</p>
            <span className="music-icon">🎄</span>
          </div>
        </div>
      )}

      <button 
        className={`audio-toggle ${isPlaying ? 'playing' : ''}`}
        onClick={toggleAudio}
        title={isPlaying ? 'إيقاف الموسيقى' : 'تشغيل الموسيقى'}
      >
        {isPlaying ? '🔊' : '🔇'}
      </button>
    </>
  );
};

export default AudioPlayer;
