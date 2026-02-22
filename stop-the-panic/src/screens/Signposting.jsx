import ScreenLayout from '../components/ScreenLayout';
import { getScreenConfig } from '../config/screens';

export default function Signposting() {
  const config = getScreenConfig('signposting');
  return (
    <ScreenLayout {...config}>
      <div className="screen-placeholder">Signposting</div>
    </ScreenLayout>
  );
}
