import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ScreenLayout from '../components/ScreenLayout';
import { getScreenConfig } from '../config/screens';
import { primaryButton, secondaryButton } from '../styles/buttons';

const DOTS = [1, 2, 3, 4, 5, 6, 7];

const PATTERNS = [
  { id: 'box',  label: 'Box (4-4-4-4)',      description: 'Inhale 4 · Hold 4 · Exhale 4 · Hold 4' },
  { id: '478',  label: '4-7-8',              description: 'Inhale 4 · Hold 7 · Exhale 8' },
  { id: 'phys', label: 'Physiological sigh', description: 'Double inhale · Exhale long' },
];

// Box breathing: 4-4-4-4
const BOX_PHASES = [
  { name: 'inhale',      duration: 4000, scale: 1.28, pulse: false, label: 'Inhale...' },
  { name: 'hold-top',    duration: 4000, scale: 1.28, pulse: true,  label: 'Hold...'   },
  { name: 'exhale',      duration: 4000, scale: 1.0,  pulse: false, label: 'Exhale...' },
  { name: 'hold-bottom', duration: 4000, scale: 1.0,  pulse: true,  label: 'Hold...'   },
];

// Colours outside → inside; sizes as % of container
const ORB_LAYERS = [
  { pct: 100, color: '#3C2E60' },
  { pct: 89,  color: '#4A3A75' },
  { pct: 79,  color: '#5C4F8A' },
  { pct: 68,  color: '#7A6AAA' },
  { pct: 57,  color: '#9B8EC4' },
  { pct: 46,  color: '#C5BBE8' },
  { pct: 36,  color: 'white'   },
];

export default function BreatheOrb() {
  const config = getScreenConfig('breatheOrb');
  const [activePattern, setActivePattern] = useState('box');
  const pattern = PATTERNS.find((p) => p.id === activePattern);

  // Animation state
  const [phaseIdx, setPhaseIdx] = useState(0);
  const [orbScale, setOrbScale] = useState(1.0);

  // Check once on mount — ref so it's readable in both render and effect
  const reducedMotion = useRef(
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false
  );

  useEffect(() => {
    const rm = reducedMotion.current;
    let timerId;

    function runPhase(idx) {
      const phase = BOX_PHASES[idx % 4];
      setPhaseIdx(idx % 4);
      if (!rm) setOrbScale(phase.scale);
      timerId = setTimeout(() => runPhase(idx + 1), phase.duration);
    }

    // Small delay so the browser paints scale(1.0) before we animate to 1.28
    timerId = setTimeout(() => runPhase(0), 50);

    return () => clearTimeout(timerId);
  }, []);

  const currentPhase = BOX_PHASES[phaseIdx];
  const rm = reducedMotion.current;

  const orbTransition = !rm && !currentPhase.pulse
    ? 'transform 4000ms ease-in-out'
    : 'none';

  const orbAnimation = !rm && currentPhase.pulse
    ? 'orb-pulse 2s ease-in-out infinite'
    : 'none';

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
              <div key={i} style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#84B59F' }} />
            ) : (
              <div key={i} style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'transparent', border: '2px solid white' }} />
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

        {/* Orb + description */}
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
          {/* Animated orb — scales as one unit */}
          <div
            style={{
              position: 'relative',
              // min(280px, 55vw) keeps the orb from overflowing on narrow screens
              width: 'min(280px, 55vw)',
              height: 'min(280px, 55vw)',
              transform: `scale(${orbScale})`,
              transition: orbTransition,
              animation: orbAnimation,
            }}
          >
            {/* Concentric rings, % of container so they stay proportional */}
            {ORB_LAYERS.map((layer) => (
              <div
                key={layer.pct}
                style={{
                  position: 'absolute',
                  width: `${layer.pct}%`,
                  height: `${layer.pct}%`,
                  borderRadius: '50%',
                  backgroundColor: layer.color,
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              />
            ))}

            {/* Phase label — sits over innermost circle */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 10,
                textAlign: 'center',
                pointerEvents: 'none',
                width: '36%',
              }}
            >
              <span
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  color: '#1E1830',
                  whiteSpace: 'nowrap',
                }}
              >
                {currentPhase.label}
              </span>
            </div>
          </div>

          {/* Breathing pattern description */}
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
