// src/components/Certifications.tsx
import React from 'react';

const Certifications: React.FC = () => {
  return (
    // Hidden by default. Remove "hidden" class to show this section.
    <section id="certifications" className="py-16 hidden">
      <h2 className="text-3xl font-bold mb-6">Certifications</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Chartered Financial Analyst (Level 1) – CFA Institute (2025)</li>
        <li>Machine Learning Certification – Coursera (2024)</li>
        <li>Deep Learning Specialization – Coursera (2023)</li>
        {/* Add more certifications here */}
      </ul>
    </section>
  );
};

export default Certifications;
