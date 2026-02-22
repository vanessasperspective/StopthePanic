import ScreenLayout from '../components/ScreenLayout';
import { getScreenConfig } from '../config/screens';

export default function CBT() {
  const config = getScreenConfig('cbt');
  return (
    <ScreenLayout {...config}>
      <div className="screen-placeholder">CBT</div>
    </ScreenLayout>
  );
}
