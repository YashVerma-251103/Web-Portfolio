import React from 'react';

const Resume: React.FC = () => {
  return (
    <section id="resume" className="py-16 text-center">
      <h2 className="text-3xl font-bold mb-6">Resume</h2>
      <p className="mb-4">You can view my resume by clicking the button below:</p>
      <a href="YOUR_RESUME_LINK" target="_blank" rel="noopener noreferrer">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          View Resume (Google Drive)
        </button>
      </a>
    </section>
  );
};

export default Resume;
