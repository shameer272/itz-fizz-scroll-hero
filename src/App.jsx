import React, { useState, useCallback } from 'react';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureSection from './components/FeatureSection';
import Footer from './components/Footer';

export default function App() {
  const [preloaderDone, setPreloaderDone] = useState(false);

  const handlePreloaderComplete = useCallback(() => {
    setPreloaderDone(true);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#040508] text-[#F3F4F6] selection:bg-white selection:text-black">
      {/* Editorial Fast Preloader */}
      <Preloader onComplete={handlePreloaderComplete} />

      {/* Smooth Trailing Magnetic Cursor */}
      <CustomCursor />

      {/* Navigation */}
      <Navbar />

      {/* Main Experience */}
      <main className="w-full">
        <Hero preloaderDone={preloaderDone} />
        <FeatureSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
