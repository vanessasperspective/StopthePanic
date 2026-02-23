import { Link } from 'react-router-dom';
import ScreenLayout from '../components/ScreenLayout';
import { getScreenConfig } from '../config/screens';

export default function Look() {
  const config = getScreenConfig('look');
  return (
    <ScreenLayout {...config}>
      <div
        className="look-screen"
        style={{ display: 'flex', flex: 1, flexDirection: 'column', width: '100%' }}
      >
        {/* Top row: PFA badge + music tooltip */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2.5rem' }}>
          <div
            style={{
              backgroundColor: '#4A8070',
              color: 'white',
              fontFamily: 'var(--font-body)',
              fontWeight: 'bold',
              fontSize: '8.5pt',
              padding: '0.3rem 0.75rem',
              borderRadius: '4px',
            }}
          >
            LOOK · Step 1 of 3
          </div>
          <div
            style={{
              backgroundColor: '#3C2870',
              color: 'white',
              fontFamily: 'var(--font-body)',
              fontWeight: 'bold',
              fontSize: '8pt',
              padding: '0.4rem 0.9rem',
              borderRadius: '4px',
            }}
          >
            ♪ Tap for calming music
          </div>
        </div>

        {/* Hero content */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h1
            className="font-heading look-heading"
            style={{ color: 'white', fontWeight: 'bold', lineHeight: 1.2, maxWidth: '600px' }}
          >
            Find somewhere that feels safe.
          </h1>
          <p
            className="font-body look-body"
            style={{ color: '#C8E6D4', maxWidth: '560px', marginTop: '1.5rem' }}
          >
            Sit down if you can. Plant both feet on the floor. If you can't move right now — that's fine. You are safe here.
          </p>
        </div>

        {/* Navigation buttons */}
        <div className="look-nav-row">
          <Link
            to="/safe"
            className="font-body"
            style={{
              fontWeight: 'bold',
              color: '#84B59F',
              backgroundColor: 'white',
              border: '2px solid #84B59F',
              borderRadius: '0.5rem',
              padding: '0.75rem 1.5rem',
              textDecoration: 'none',
              display: 'inline-block',
            }}
          >
            ← Back
          </Link>
          <Link
            to="/listen"
            className="font-body"
            style={{
              fontWeight: 'bold',
              color: 'white',
              backgroundColor: 'var(--color-sage)',
              borderRadius: '0.5rem',
              padding: '0.75rem 1.5rem',
              textDecoration: 'none',
              display: 'inline-block',
            }}
          >
            Next →
          </Link>
        </div>
      </div>
    </ScreenLayout>
  );
}
