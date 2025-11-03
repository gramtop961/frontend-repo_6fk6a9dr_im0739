import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import FeatureGrid from './components/FeatureGrid.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white antialiased selection:bg-indigo-500/30 selection:text-white">
      <Header />
      <main>
        <Hero />
        <FeatureGrid />
      </main>
      <Footer />
    </div>
  );
}

export default App;
