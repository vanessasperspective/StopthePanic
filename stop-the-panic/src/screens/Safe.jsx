import { Link } from 'react-router-dom';
import ScreenLayout from '../components/ScreenLayout';
import { getScreenConfig } from '../config/screens';

const CARDS = [
  'Your body is protecting you',
  'Panic always peaks and subsides',
  'You have survived every one so far',
];

export default function Safe() {
  const config = getScreenConfig('safe');
  return (
    <ScreenLayout {...config}>
      <div className="flex flex-1 flex-col min-h-0 w-full">
        <div className="flex flex-1 flex-col items-center justify-center px-4 text-center">
          <h1 className="font-heading font-bold text-white text-[42pt] leading-tight">
            You are safe.
          </h1>
          <p className="font-body text-sage text-[15pt] mt-4 max-w-xl">
            What you're feeling is a panic attack. It is not dangerous — and it will pass.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginTop: '2rem' }}>
            {CARDS.map((text) => (
              <div
                key={text}
                style={{
                  backgroundColor: 'rgba(26, 46, 37, 0.55)',
                  color: 'var(--color-accent-mint, #a8d5b5)',
                  fontSize: '11pt',
                  textAlign: 'center',
                  borderRadius: '0.5rem',
                  padding: '1rem 1.5rem',
                  minWidth: '200px',
                  maxWidth: '280px',
                }}
              >
                {text}
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-end p-6">
          <Link
            to="/look"
            className="font-body font-bold text-white bg-sage rounded-lg px-6 py-3 hover:opacity-90 transition-opacity"
          >
            I understand →
          </Link>
        </div>
      </div>
    </ScreenLayout>
  );
}
