import ScreenLayout from '../components/ScreenLayout';
import { getScreenConfig } from '../config/screens';

export default function Safe() {
  const config = getScreenConfig('safe');
  return (
    <ScreenLayout {...config}>
      <div className="screen-placeholder">Safe</div>
    </ScreenLayout>
  );
}
