export default function Footer({ screenNumber, totalScreens, screenName, photoCredit }) {
  return (
    <footer className="footer">
      <div className="footer-left">
        Need urgent support? 116 123 (Samaritans, free, 24/7)
      </div>
      <div className="footer-right">
        {screenNumber != null && totalScreens != null && (
          <span className="footer-counter">
            {String(screenNumber).padStart(2, '0')} / {String(totalScreens).padStart(2, '0')}
          </span>
        )}
        {screenName && <span className="footer-screen-name">{screenName}</span>}
        {photoCredit && (
          <span className="footer-credit">Photo: {photoCredit}</span>
        )}
      </div>
    </footer>
  );
}
