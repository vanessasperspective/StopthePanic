import { Link } from 'react-router-dom';
import ScreenLayout from '../components/ScreenLayout';
import { getScreenConfig } from '../config/screens';
import { primaryButton } from '../styles/buttons';

const CARDS = [
  'Your body is protecting you',
  'Panic always peaks and subsides',
  'You have survived every one so far',
];

export default function Safe() {
  const config = getScreenConfig('safe');
  return (
    <ScreenLayout {...config}>
      <div style={{ display: 'flex', flex: 1, flexDirection: 'column', minHeight: 0, width: '100%' }}>
        <div style={{ display: 'flex', flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', paddingTop: '3rem' }}>
          <h1 className="font-heading safe-heading" style={{ fontWeight: 'bold', color: 'white', lineHeight: 1.2 }}>
            You are safe.
          </h1>
          <p className="font-body safe-subcopy" style={{ color: 'var(--color-sage)', marginTop: '1rem', maxWidth: '36rem' }}>
            What you're feeling is a panic attack. It is not dangerous — and it will pass.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginTop: '2rem' }}>
            {CARDS.map((text) => (
              <div
                key={text}
                className="safe-card"
                style={{
                  backgroundColor: 'rgba(26, 46, 37, 0.55)',
                  color: 'var(--color-accent-mint, #C8E6D4)',
                  fontSize: '0.95rem',
                  textAlign: 'center',
                  borderRadius: '0.5rem',
                  padding: '1rem 1.5rem',
                }}
              >
                {text}
              </div>
            ))}
          </div>
        </div>
        <div className="safe-button-row">
          <Link to="/look" style={{ ...primaryButton, display: 'inline-block' }}>
            Start →
          </Link>
        </div>
      </div>
    </ScreenLayout>
  );
}
