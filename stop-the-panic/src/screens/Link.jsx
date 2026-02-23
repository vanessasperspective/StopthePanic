import { Link as RouterLink } from 'react-router-dom';
import ScreenLayout from '../components/ScreenLayout';
import { getScreenConfig } from '../config/screens';
import { primaryButton, secondaryButton } from '../styles/buttons';

export default function Link() {
  const config = getScreenConfig('link');
  return (
    <ScreenLayout {...config}>
      <div
        className="link-screen"
        style={{ display: 'flex', flex: 1, flexDirection: 'column', width: '100%' }}
      >
        {/* PFA badge */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div
            style={{
              backgroundColor: '#5C4F8A',
              color: 'white',
              fontFamily: 'Inter, system-ui, sans-serif',
              fontWeight: 700,
              fontSize: '8.5pt',
              padding: '0.3rem 0.75rem',
              borderRadius: '4px',
              display: 'inline-block',
            }}
          >
            LINK · Step 3 of 3
          </div>
        </div>

        {/* Hero content */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h1
            className="font-heading link-heading"
            style={{ color: 'white', fontWeight: 'bold', lineHeight: 1.2, maxWidth: '600px' }}
          >
            You're not alone in this.
          </h1>
          <p
            className="font-body link-body"
            style={{ color: '#C8E6D4', maxWidth: '560px', marginTop: '1.5rem' }}
          >
            Millions of people experience panic attacks. This tool will guide you through — step by step. At the end, we'll help you find ongoing support.
          </p>
        </div>

        {/* Navigation buttons */}
        <div className="link-nav-row">
          <RouterLink to="/listen" style={{ ...secondaryButton, display: 'inline-block' }}>
            ← Back
          </RouterLink>
          <RouterLink to="/breathe-intro" style={{ ...primaryButton, display: 'inline-block' }}>
            Next →
          </RouterLink>
        </div>
      </div>
    </ScreenLayout>
  );
}
