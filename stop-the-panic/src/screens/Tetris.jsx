import ScreenLayout from '../components/ScreenLayout';
import { getScreenConfig } from '../config/screens';

export default function Tetris() {
  const config = getScreenConfig('tetris');
  return (
    <ScreenLayout {...config}>
      <div className="screen-placeholder">Tetris</div>
    </ScreenLayout>
  );
}
