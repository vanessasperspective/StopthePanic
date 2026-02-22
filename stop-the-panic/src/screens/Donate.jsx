import ScreenLayout from '../components/ScreenLayout';
import { getScreenConfig } from '../config/screens';

export default function Donate() {
  const config = getScreenConfig('donate');
  return (
    <ScreenLayout {...config}>
      <div className="screen-placeholder">Donate</div>
    </ScreenLayout>
  );
}
