import { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Capabilities from './components/Capabilities';
import NCPER from './components/NCPER';
import Engagement from './components/Engagement';
import WhoItsFor from './components/WhoItsFor';
import Philosophy from './components/Philosophy';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

function App() {
  useEffect(() => {
    // Initialize Google Analytics 4
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX';
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      if (window.dataLayer) {
        window.dataLayer.push(args);
      }
    }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  }, []);

  return (
    <div className="app">
      <Navigation />
      <Hero />
      <Problem />
      <Capabilities />
      <NCPER />
      <Engagement />
      <WhoItsFor />
      <Philosophy />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
