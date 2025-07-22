import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Music from './components/Music';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // Apply theme to document root
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  return (
    <div className="App">
      <Navigation theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Projects />
      <Music />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;