import { Link } from 'react-router-dom';
import ScreenLayout from '../components/ScreenLayout';
import { getScreenConfig } from '../config/screens';
import { primaryButton, secondaryButton } from '../styles/buttons';

export default function Listen() {
  const config = getScreenConfig('listen');
  return (
    <ScreenLayout {...config}>
      <div
        className="listen-screen"
        style={{ display: 'flex', flex: 1, flexDirection: 'column', width: '100%' }}
      >
        {/* PFA badge */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div
            style={{
              backgroundColor: '#9B8EC4',
              color: 'white',
              fontFamily: 'Inter, system-ui, sans-serif',
              fontWeight: 700,
              fontSize: '0.75rem',
              padding: '0.3rem 0.75rem',
              borderRadius: '4px',
              display: 'inline-block',
            }}
          >
            LISTEN · Step 2 of 3
          </div>
        </div>

        {/* Hero content */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h1
            className="font-heading listen-heading"
            style={{ color: 'white', fontWeight: 'bold', lineHeight: 1.2, maxWidth: '600px' }}
          >
            Tune in to your body.
          </h1>
          <p
            className="font-body listen-body"
            style={{ color: '#C8E6D4', maxWidth: '560px', marginTop: '1.5rem' }}
          >
            Notice what you feel — without judgment. A racing heart. A tight chest. These sensations are real. They are not danger.
          </p>
        </div>

        {/* Navigation buttons */}
        <div className="listen-nav-row">
          <Link to="/look" style={{ ...secondaryButton, display: 'inline-block' }}>
            ← Back
          </Link>
          <Link to="/link" style={{ ...primaryButton, display: 'inline-block' }}>
            Next →
          </Link>
        </div>
      </div>
    </ScreenLayout>
  );
}
