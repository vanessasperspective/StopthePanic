import ScreenLayout from '../components/ScreenLayout';
import { getScreenConfig } from '../config/screens';

export default function Look() {
  const config = getScreenConfig('look');
  return (
    <ScreenLayout {...config}>
      <div className="screen-placeholder">Look</div>
    </ScreenLayout>
  );
}
