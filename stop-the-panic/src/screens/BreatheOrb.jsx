import ScreenLayout from '../components/ScreenLayout';
import { getScreenConfig } from '../config/screens';

export default function BreatheOrb() {
  const config = getScreenConfig('breatheOrb');
  return (
    <ScreenLayout {...config}>
      <div className="screen-placeholder">Breathe Orb</div>
    </ScreenLayout>
  );
}
