import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 bg-white dark:bg-gray-800 shadow-md z-10">
      <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Site Title or Logo */}
        <div className="text-xl font-bold">
          Yash Verma
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li>
            <a href="#hero" className="hover:text-blue-600 dark:hover:text-blue-400">
              Home
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400">
              Skills
            </a>
          </li>
          <li>
            <a href="#blog" className="hover:text-blue-600 dark:hover:text-blue-400">
              Blog
            </a>
          </li>
          <li>
            <a href="#resume" className="hover:text-blue-600 dark:hover:text-blue-400">
              Resume
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
