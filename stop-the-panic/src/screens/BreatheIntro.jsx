import { Link } from 'react-router-dom';
import ScreenLayout from '../components/ScreenLayout';
import { getScreenConfig } from '../config/screens';
import { primaryButton, secondaryButton } from '../styles/buttons';

export default function BreatheIntro() {
  const config = getScreenConfig('breatheIntro');
  return (
    <ScreenLayout {...config}>
      <div
        className="breathe-intro-screen"
        style={{ display: 'flex', flex: 1, flexDirection: 'column', width: '100%' }}
      >
        {/* Hero content */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h1
            className="font-heading breathe-intro-heading"
            style={{ color: 'white', fontWeight: 'bold', lineHeight: 1.2, maxWidth: '600px' }}
          >
            Let's slow your breath.
          </h1>
          <p
            className="font-body breathe-intro-body"
            style={{ color: '#C8E6D4', maxWidth: '560px', marginTop: '1.5rem' }}
          >
            Your breathing is shallow right now — that's feeding the panic. The orb will guide you. Follow it.
          </p>
        </div>

        {/* Escape link */}
        <div style={{ textAlign: 'center', paddingBottom: '1rem' }}>
          <Link
            to="/god-menu"
            style={{
              color: '#84B59F',
              fontSize: '0.75rem',
              fontStyle: 'italic',
              fontFamily: 'Inter, system-ui, sans-serif',
              textDecoration: 'none',
            }}
          >
            I feel better → menu
          </Link>
        </div>

        {/* Navigation buttons */}
        <div className="breathe-intro-nav-row">
          <Link to="/link" style={{ ...secondaryButton, display: 'inline-block' }}>
            ← Back
          </Link>
          <Link to="/breathe-orb" style={{ ...primaryButton, display: 'inline-block' }}>
            Begin →
          </Link>
        </div>
      </div>
    </ScreenLayout>
  );
}
