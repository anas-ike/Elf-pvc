import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';

// Components
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import CommandsSection from './components/CommandsSection';
import PricingSection from './components/PricingSection';
import Footer from './components/Footer';

// Pages

// Background Component
const BackgroundWrapper = ({ children, className = "" }) => {
  const particles = [...Array(30)].map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    delay: Math.random() * 2,
    duration: Math.random() * 4 + 3
  }));

  return (
    <div className={`relative min-h-screen bg-black overflow-hidden ${className}`}>
      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="absolute bg-red-500/20 rounded-full animate-pulse"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`
            }}
          />
        ))}
      </div>

      {/* Grid Background */}
      <div className="fixed inset-0 w-full h-full bg-black/80">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle at 50% 50%, rgb(239, 68, 68) 0%, transparent 70%)",
            backgroundSize: "150% 150%",
            filter: "blur(80px)",
            backgroundPosition: "24.42% 24.42%"
          }}
        />
        <svg
          className="pointer-events-none absolute inset-0 w-full inset-x-0 inset-y-[-20%] h-[140%]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="grid-pattern"
              width="120"
              height="120"
              patternUnits="userSpaceOnUse"
              patternContentUnits="userSpaceOnUse"
              x="-1"
              y="-1"
            >
              <path
                d="M.5 120V.5H120"
                fill="none"
                stroke="#ef4444"
                className="opacity-[0.3]"
                strokeWidth="0.8"
                strokeDasharray="2"
              />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="url(#grid-pattern)"
            className="animate-pulse"
            style={{ animationDuration: "4s" }}
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

// Main Homepage Component
const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <CommandsSection />
        <PricingSection />
      </main>
      <Footer />
    </>
  );
};

// Main App Component
function App() {
  return (
    <Router>
      <BackgroundWrapper className="min-h-screen text-white overflow-x-hidden">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BackgroundWrapper>
    </Router>
  );
}

export default App;
