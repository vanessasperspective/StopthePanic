import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScreenLayout from '../components/ScreenLayout';
import { getScreenConfig } from '../config/screens';
import { primaryButton, secondaryButton } from '../styles/buttons';

const MUSCLE_GROUPS = [
  { id: 'hands',     label: 'Hands',     instruction: 'Squeeze both fists as tight as you can. Hold... and release.' },
  { id: 'face',      label: 'Face',      instruction: 'Scrunch your whole face tight. Hold... and release.' },
  { id: 'shoulders', label: 'Shoulders', instruction: 'Raise your shoulders to your ears. Hold... and release.' },
  { id: 'chest',     label: 'Chest',     instruction: 'Take a deep breath and hold it, tensing your chest. Exhale slowly and release.' },
  { id: 'abdomen',   label: 'Abdomen',   instruction: 'Clench your stomach muscles tight. Hold... and release.' },
  { id: 'legs',      label: 'Legs',      instruction: 'Press both feet into the floor and tighten your thigh muscles. Hold... and release.' },
];

export default function BodyScan() {
  const config = getScreenConfig('bodyScan');
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % MUSCLE_GROUPS.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  function chipStyle(i) {
    if (i === activeIdx) return { backgroundColor: '#5C4F8A', color: 'white',    fontWeight: 700 };
    if (i < activeIdx)   return { backgroundColor: '#2C4A3E', color: '#84B59F',  fontWeight: 400 };
    return                      { backgroundColor: '#221840', color: '#9B8EC4',  fontWeight: 400 };
  }

  function chipPrefix(i) {
    if (i === activeIdx) return '▶ ';
    if (i < activeIdx)   return '✓ ';
    return                      '○ ';
  }

  return (
    <ScreenLayout {...config}>
      <div
        className="body-scan-screen"
        style={{ display: 'flex', flex: 1, flexDirection: 'column', width: '100%' }}
      >
        {/* Hero content */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h1
            className="font-heading body-scan-heading"
            style={{ color: 'white', fontWeight: 'bold', lineHeight: 1.2, maxWidth: '600px' }}
          >
            Release the tension.
          </h1>
          <p
            className="font-body body-scan-body"
            style={{ color: '#9B8EC4', maxWidth: '560px', marginTop: '1.5rem' }}
          >
            Tense each muscle group for 5 seconds — then let go completely. Feel the warmth of release spread through your body.
          </p>

          {/* Muscle group chips */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem',
              marginTop: '2rem',
            }}
          >
            {MUSCLE_GROUPS.map((group, i) => (
              <div
                key={group.id}
                style={{
                  ...chipStyle(i),
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: '0.85rem',
                  borderRadius: '999px',
                  padding: '0.4rem 1rem',
                }}
              >
                {chipPrefix(i)}{group.label}
              </div>
            ))}
          </div>

          {/* Active instruction */}
          <p
            style={{
              color: 'white',
              fontStyle: 'italic',
              fontSize: '1rem',
              fontFamily: 'Inter, system-ui, sans-serif',
              marginTop: '1.25rem',
              marginBottom: 0,
              maxWidth: '560px',
            }}
          >
            {MUSCLE_GROUPS[activeIdx].instruction}
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
        <div className="body-scan-nav-row">
          <Link to="/ground" style={{ ...secondaryButton, display: 'inline-block' }}>
            ← Back
          </Link>
          <Link to="/visualise" style={{ ...primaryButton, display: 'inline-block' }}>
            Next →
          </Link>
        </div>
      </div>
    </ScreenLayout>
  );
}
