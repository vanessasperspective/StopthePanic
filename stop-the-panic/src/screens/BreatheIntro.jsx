import ScreenLayout from '../components/ScreenLayout';
import { getScreenConfig } from '../config/screens';

export default function BreatheIntro() {
  const config = getScreenConfig('breatheIntro');
  return (
    <ScreenLayout {...config}>
      <div className="screen-placeholder">Breathe Intro</div>
    </ScreenLayout>
  );
}
