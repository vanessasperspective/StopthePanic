import { Link } from 'react-router-dom';
import ScreenLayout from '../components/ScreenLayout';
import { getScreenConfig } from '../config/screens';
import { primaryButton, secondaryButton } from '../styles/buttons';

const DOTS = [1, 2, 3, 4, 5, 6, 7];

export default function BreatheIntro() {
  const config = getScreenConfig('breatheIntro');
  return (
    <ScreenLayout {...config}>
      <div
        className="breathe-intro-screen"
        style={{ display: 'flex', flex: 1, flexDirection: 'column', width: '100%' }}
      >
        {/* Progress dots */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '0.5rem',
            marginBottom: '2rem',
          }}
        >
          {DOTS.map((i) =>
            i === 1 ? (
              <div
                key={i}
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  backgroundColor: '#84B59F',
                }}
              />
            ) : (
              <div
                key={i}
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: 'transparent',
                  border: '2px solid white',
                }}
              />
            )
          )}
        </div>

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
              fontSize: '8.5pt',
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
