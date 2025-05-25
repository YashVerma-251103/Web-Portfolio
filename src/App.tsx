// src/App.tsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Certifications from './components/Certifications';

const App: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main content sections */}
      <main className="px-4 md:px-16 lg:px-32">
        <Hero />
        <Projects />
        <Skills />
        <Blog />
        <Resume />
        <Contact />
        <Certifications />
      </main>

      {/* Footer */}
      <footer className="text-center py-8 text-sm text-gray-500">
        © {new Date().getFullYear()} Yash Verma. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
