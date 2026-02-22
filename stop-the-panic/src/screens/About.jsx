import ScreenLayout from '../components/ScreenLayout';
import { getScreenConfig } from '../config/screens';

export default function About() {
  const config = getScreenConfig('about');
  return (
    <ScreenLayout {...config}>
      <div className="screen-placeholder">About</div>
    </ScreenLayout>
  );
}
