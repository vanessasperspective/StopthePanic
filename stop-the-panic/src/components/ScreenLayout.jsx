import Navbar from './Navbar';
import Footer from './Footer';

export default function ScreenLayout({
  backgroundImage,
  children,
  screenNumber,
  totalScreens,
  screenName,
  photoCredit,
  layoutClassName,
}) {
  return (
    <div
      className={['screen-layout', layoutClassName].filter(Boolean).join(' ')}
      style={backgroundImage ? { '--screen-bg-image': `url(${backgroundImage})` } : undefined}
    >
      <div className="screen-layout-overlay" />
      <Navbar />
      <main className="screen-layout-main">{children}</main>
      <Footer
        screenNumber={screenNumber}
        totalScreens={totalScreens}
        screenName={screenName}
        photoCredit={photoCredit}
      />
    </div>
  );
}
