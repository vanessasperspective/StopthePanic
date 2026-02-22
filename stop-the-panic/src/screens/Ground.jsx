import ScreenLayout from '../components/ScreenLayout';
import { getScreenConfig } from '../config/screens';

export default function Ground() {
  const config = getScreenConfig('ground');
  return (
    <ScreenLayout {...config}>
      <div className="screen-placeholder">Ground</div>
    </ScreenLayout>
  );
}
