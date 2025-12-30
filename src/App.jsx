import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EnvelopePage from './pages/EnvelopePage';
import CelebrationPage from './pages/CelebrationPage';
import AudioPlayer from './components/AudioPlayer';
import './styles/global.css';

function App() {
  return (
    <Router>
      <AudioPlayer />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/envelope" element={<EnvelopePage />} />
        <Route path="/celebration" element={<CelebrationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
