import ScreenLayout from '../components/ScreenLayout';
import { getScreenConfig } from '../config/screens';

export default function GodMenu() {
  const config = getScreenConfig('godMenu');
  return (
    <ScreenLayout {...config}>
      <div className="screen-placeholder">God Menu</div>
    </ScreenLayout>
  );
}
