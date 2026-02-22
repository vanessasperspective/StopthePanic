import ScreenLayout from '../components/ScreenLayout';
import { getScreenConfig } from '../config/screens';

export default function BodyScan() {
  const config = getScreenConfig('bodyScan');
  return (
    <ScreenLayout {...config}>
      <div className="screen-placeholder">Body Scan</div>
    </ScreenLayout>
  );
}
