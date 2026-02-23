import { useState } from 'react';
import { Link } from 'react-router-dom';
import ScreenLayout from '../components/ScreenLayout';
import { getScreenConfig } from '../config/screens';
import { primaryButton, secondaryButton } from '../styles/buttons';

const CIRCUMFERENCE = 2 * Math.PI * 60; // ≈ 376.99

export default function Visualise() {
  const config = getScreenConfig('visualise');
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerDone, setTimerDone] = useState(false);

  function startTimer() {
    if (timerStarted) return;
    setTimerStarted(true);
    setTimeout(() => setTimerDone(true), 60000);
  }

  return (
    <ScreenLayout {...config}>
      <div
        className="visualise-screen"
        style={{ display: 'flex', flex: 1, flexDirection: 'column', width: '100%' }}
      >
        {/* Hero content */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h1
            className="font-heading visualise-heading"
            style={{ color: 'white', fontWeight: 'bold', lineHeight: 1.2, maxWidth: '600px' }}
          >
            Close your eyes.
          </h1>
          <p
            className="font-body visualise-body"
            style={{ color: '#84B59F', maxWidth: '560px', marginTop: '1.5rem' }}
          >
            Breathe the cool air. Feel the ground beneath you. You are safe here. You can always return to this place.
          </p>

          {/* Music prompt */}
          <p
            style={{
              color: '#84B59F',
              fontSize: '0.85rem',
              fontStyle: 'italic',
              fontFamily: 'Inter, system-ui, sans-serif',
              textAlign: 'center',
              marginTop: '1.5rem',
              marginBottom: 0,
            }}
          >
            ♪ For a deeper experience, tap the music note above
          </p>

          {/* Timer trigger buttons */}
          {!timerStarted && (
            <div
              style={{
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap',
                justifyContent: 'center',
                marginTop: '1.5rem',
              }}
            >
              <button type="button" onClick={startTimer} style={primaryButton}>
                🎵 Listen for 60 seconds
              </button>
              <button type="button" onClick={startTimer} style={secondaryButton}>
                Be still for 60 seconds
              </button>
            </div>
          )}

          {/* Circular countdown timer */}
          {timerStarted && (
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
              <svg width="150" height="150" viewBox="0 0 150 150">
                {/* Track */}
                <circle
                  cx="75"
                  cy="75"
                  r="60"
                  fill="none"
                  stroke="rgba(132, 181, 159, 0.25)"
                  strokeWidth="3"
                />
                {/* Animated progress arc — drains over 60 seconds */}
                <circle
                  cx="75"
                  cy="75"
                  r="60"
                  fill="none"
                  stroke="#84B59F"
                  strokeWidth="3"
                  strokeDasharray={CIRCUMFERENCE}
                  strokeDashoffset="0"
                  strokeLinecap="round"
                  transform="rotate(-90 75 75)"
                  style={{ animation: 'timer-drain 60s linear forwards' }}
                />
              </svg>
            </div>
          )}
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
        <div className="visualise-nav-row">
          <Link to="/body-scan" style={{ ...secondaryButton, display: 'inline-block' }}>
            ← Back
          </Link>
          <Link
            to="/act"
            style={{
              ...primaryButton,
              display: 'inline-block',
              ...(timerDone ? { animation: 'next-pulse 1.5s ease-in-out infinite' } : {}),
            }}
          >
            Next →
          </Link>
        </div>
      </div>
    </ScreenLayout>
  );
}
