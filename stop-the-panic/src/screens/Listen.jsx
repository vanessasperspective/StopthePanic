import ScreenLayout from '../components/ScreenLayout';
import { getScreenConfig } from '../config/screens';

export default function Listen() {
  const config = getScreenConfig('listen');
  return (
    <ScreenLayout {...config}>
      <div className="screen-placeholder">Listen</div>
    </ScreenLayout>
  );
}
