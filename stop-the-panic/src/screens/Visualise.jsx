import ScreenLayout from '../components/ScreenLayout';
import { getScreenConfig } from '../config/screens';

export default function Visualise() {
  const config = getScreenConfig('visualise');
  return (
    <ScreenLayout {...config}>
      <div className="screen-placeholder">Visualise</div>
    </ScreenLayout>
  );
}
