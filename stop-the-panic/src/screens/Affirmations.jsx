import ScreenLayout from '../components/ScreenLayout';
import { getScreenConfig } from '../config/screens';

export default function Affirmations() {
  const config = getScreenConfig('affirmations');
  return (
    <ScreenLayout {...config}>
      <div className="screen-placeholder">Affirmations</div>
    </ScreenLayout>
  );
}
