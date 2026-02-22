import ScreenLayout from '../components/ScreenLayout';
import { getScreenConfig } from '../config/screens';

export default function Link() {
  const config = getScreenConfig('link');
  return (
    <ScreenLayout {...config}>
      <div className="screen-placeholder">Link</div>
    </ScreenLayout>
  );
}
