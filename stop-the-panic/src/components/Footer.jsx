export default function Footer({ screenNumber, totalScreens, screenName, photoCredit }) {
  return (
    <footer className="footer">
      <div className="footer-left">
        <a href="tel:116123" className="footer-crisis-link">
          Need urgent support? 116 123 (Samaritans, free, 24/7)
        </a>
      </div>
      <div className="footer-right">
{screenName && <span className="footer-screen-name">{screenName}</span>}
        {photoCredit && (
          <span className="footer-credit">Photo: {photoCredit}</span>
        )}
      </div>
    </footer>
  );
}
