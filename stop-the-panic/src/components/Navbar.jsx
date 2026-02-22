import { NavLink, useLocation } from 'react-router-dom';

const INTERVENTION_PATHS = ['/safe', '/look', '/listen', '/link', '/breathe-intro', '/breathe-orb', '/ground', '/body-scan', '/visualise', '/act', '/cbt', '/affirmations', '/god-menu', '/patterns', '/tetris'];

export default function Navbar() {
  const location = useLocation();
  const isInterventionsActive = INTERVENTION_PATHS.some((path) => location.pathname === path || location.pathname.startsWith(path + '/'));

  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-logo" end>
        Stop the Panic
      </NavLink>
      <div className="navbar-links">
        <NavLink to="/safe" className={isInterventionsActive ? 'active' : ''}>
          Interventions
        </NavLink>
        <NavLink to="/signposting" className={({ isActive }) => (isActive ? 'active' : '')}>
          Signposting
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
          About
        </NavLink>
        <NavLink to="/donate" className={({ isActive }) => (isActive ? 'active' : '')}>
          Donate
        </NavLink>
      </div>
      <button type="button" className="navbar-music" aria-label="Toggle music">
        <span className="navbar-music-icon" aria-hidden>♪</span>
      </button>
    </nav>
  );
}
