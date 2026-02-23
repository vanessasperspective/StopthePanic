import { useState } from 'react';
import { Link } from 'react-router-dom';
import ScreenLayout from '../components/ScreenLayout';
import { getScreenConfig } from '../config/screens';
import { primaryButton, secondaryButton } from '../styles/buttons';

const DOTS = [1, 2, 3, 4, 5, 6, 7];

const PATTERNS = [
  { id: 'box',  label: 'Box (4-4-4-4)',       description: 'Inhale 4 · Hold 4 · Exhale 4 · Hold 4' },
  { id: '478',  label: '4-7-8',               description: 'Inhale 4 · Hold 7 · Exhale 8' },
  { id: 'phys', label: 'Physiological sigh',  description: 'Double inhale · Exhale long' },
];

export default function BreatheOrb() {
  const config = getScreenConfig('breatheOrb');
  const [activePattern, setActivePattern] = useState('box');
  const pattern = PATTERNS.find((p) => p.id === activePattern);

  return (
    <ScreenLayout {...config}>
      <div
        style={{
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          width: '100%',
          padding: '1.25rem 2rem',
        }}
      >
        {/* Progress dots */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '0.5rem',
            marginBottom: '1.5rem',
          }}
        >
          {DOTS.map((i) =>
            i === 1 ? (
              <div
                key={i}
                style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#84B59F' }}
              />
            ) : (
              <div
                key={i}
                style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'transparent', border: '2px solid white' }}
              />
            )
          )}
        </div>

        {/* Pattern tabs */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.5rem',
            marginBottom: '2rem',
            flexWrap: 'wrap',
          }}
        >
          {PATTERNS.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setActivePattern(p.id)}
              style={{
                backgroundColor: activePattern === p.id ? '#5C4F8A' : '#352855',
                color: activePattern === p.id ? 'white' : '#9B8EC4',
                fontFamily: 'Inter, system-ui, sans-serif',
                fontWeight: activePattern === p.id ? 700 : 400,
                fontSize: '0.85rem',
                padding: '0.4rem 0.9rem',
                borderRadius: '4px',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              {p.label}
            </button>
          ))}
        </div>

        {/* Orb + label */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.5rem',
          }}
        >
          <div
            style={{
              width: '280px',
              height: '280px',
              borderRadius: '50%',
              backgroundColor: '#5C4F8A',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: 700,
                fontSize: '1.5rem',
                color: 'white',
              }}
            >
              Inhale...
            </span>
          </div>

          <p
            style={{
              color: '#9B8EC4',
              fontSize: '0.9rem',
              fontFamily: 'Inter, system-ui, sans-serif',
              textAlign: 'center',
              margin: 0,
            }}
          >
            {pattern.description}
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
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link to="/breathe-intro" style={{ ...secondaryButton, display: 'inline-block' }}>
            ← Back
          </Link>
          <Link to="/ground" style={{ ...primaryButton, display: 'inline-block' }}>
            Next →
          </Link>
        </div>
      </div>
    </ScreenLayout>
  );
}
