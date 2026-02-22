import ScreenLayout from '../components/ScreenLayout';
import { getScreenConfig } from '../config/screens';

export default function Patterns() {
  const config = getScreenConfig('patterns');
  return (
    <ScreenLayout {...config}>
      <div className="screen-placeholder">Patterns</div>
    </ScreenLayout>
  );
}
