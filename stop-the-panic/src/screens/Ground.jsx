import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ScreenLayout from '../components/ScreenLayout';
import { getScreenConfig } from '../config/screens';
import { primaryButton, secondaryButton } from '../styles/buttons';

const SENSES = [
  { id: 'see',   emoji: '👁',  label: 'NAME 5 THINGS YOU CAN SEE',   sub: 'Name five now.',  bg: '#2C4A3E' },
  { id: 'hear',  emoji: '👂',  label: 'NAME 4 THINGS YOU CAN HEAR',  sub: 'Name four now.',  bg: '#3A6652' },
  { id: 'touch', emoji: '✋',  label: 'NAME 3 THINGS YOU CAN TOUCH', sub: 'Name three now.', bg: '#5C4F8A' },
  { id: 'smell', emoji: '👃',  label: 'NAME 2 THINGS YOU CAN SMELL', sub: 'Name two now.',   bg: '#4A3A60' },
  { id: 'taste', emoji: '👅',  label: 'NAME 1 THING YOU CAN TASTE',  sub: 'Name one now.',   bg: '#2E5A48' },
];

export default function Ground() {
  const config = getScreenConfig('ground');
  const columnsRef = useRef(null);
  const [activeDot, setActiveDot] = useState(0);

  useEffect(() => {
    const el = columnsRef.current;
    if (!el) return;
    const handleScroll = () => {
      const scrollRange = el.scrollWidth - el.clientWidth;
      if (scrollRange <= 0) return;
      const idx = Math.round((el.scrollLeft / scrollRange) * (SENSES.length - 1));
      setActiveDot(idx);
    };
    el.addEventListener('scroll', handleScroll, { passive: true });
    return () => el.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ScreenLayout {...config}>
      <div
        style={{
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          width: '100%',
          padding: '1.25rem 1rem',
        }}
      >
        {/* Five sense columns */}
        <div className="ground-columns" ref={columnsRef}>
          {SENSES.map((sense) => (
            <div
              key={sense.id}
              className="ground-column"
              style={{ backgroundColor: sense.bg }}
            >
              <span style={{ fontSize: '2rem', lineHeight: 1 }}>{sense.emoji}</span>
              <p
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  color: 'white',
                  textAlign: 'center',
                  textTransform: 'uppercase',
                  marginTop: '0.75rem',
                  marginBottom: 0,
                  lineHeight: 1.3,
                }}
              >
                {sense.label}
              </p>
              <p
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontWeight: 400,
                  fontStyle: 'italic',
                  fontSize: '0.8rem',
                  color: '#C8E6D4',
                  textAlign: 'center',
                  marginTop: '0.5rem',
                  marginBottom: 0,
                }}
              >
                {sense.sub}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile swipe indicator dots */}
        <div className="ground-swipe-dots">
          {SENSES.map((_, i) => (
            <div
              key={i}
              style={{
                width: i === activeDot ? '10px' : '7px',
                height: i === activeDot ? '10px' : '7px',
                borderRadius: '50%',
                backgroundColor: i === activeDot ? '#84B59F' : 'rgba(255, 255, 255, 0.4)',
                transition: 'all 0.2s ease',
              }}
            />
          ))}
        </div>

        {/* Escape link */}
        <div style={{ textAlign: 'center', padding: '0.75rem 0' }}>
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
          <Link to="/breathe-orb" style={{ ...secondaryButton, display: 'inline-block' }}>
            ← Back
          </Link>
          <Link to="/body-scan" style={{ ...primaryButton, display: 'inline-block' }}>
            Next →
          </Link>
        </div>
      </div>
    </ScreenLayout>
  );
}
