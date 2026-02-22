import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Safe from './screens/Safe';
import Look from './screens/Look';
import Listen from './screens/Listen';
import LinkScreen from './screens/Link';
import BreatheIntro from './screens/BreatheIntro';
import BreatheOrb from './screens/BreatheOrb';
import Ground from './screens/Ground';
import BodyScan from './screens/BodyScan';
import Visualise from './screens/Visualise';
import ACT from './screens/ACT';
import CBT from './screens/CBT';
import Affirmations from './screens/Affirmations';
import GodMenu from './screens/GodMenu';
import Patterns from './screens/Patterns';
import Tetris from './screens/Tetris';
import Signposting from './screens/Signposting';
import About from './screens/About';
import Donate from './screens/Donate';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/safe" replace />} />
        <Route path="/safe" element={<Safe />} />
        <Route path="/look" element={<Look />} />
        <Route path="/listen" element={<Listen />} />
        <Route path="/link" element={<LinkScreen />} />
        <Route path="/breathe-intro" element={<BreatheIntro />} />
        <Route path="/breathe-orb" element={<BreatheOrb />} />
        <Route path="/ground" element={<Ground />} />
        <Route path="/body-scan" element={<BodyScan />} />
        <Route path="/visualise" element={<Visualise />} />
        <Route path="/act" element={<ACT />} />
        <Route path="/cbt" element={<CBT />} />
        <Route path="/affirmations" element={<Affirmations />} />
        <Route path="/god-menu" element={<GodMenu />} />
        <Route path="/patterns" element={<Patterns />} />
        <Route path="/tetris" element={<Tetris />} />
        <Route path="/signposting" element={<Signposting />} />
        <Route path="/about" element={<About />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
