import ScreenLayout from '../components/ScreenLayout';
import { getScreenConfig } from '../config/screens';

export default function ACT() {
  const config = getScreenConfig('act');
  return (
    <ScreenLayout {...config}>
      <div className="screen-placeholder">ACT</div>
    </ScreenLayout>
  );
}
