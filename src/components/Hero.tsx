import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="py-16 text-center">
      <h1 className="text-5xl font-bold">Yash Verma</h1>

      <p className="mt-4 text-2xl font-semibold text-gray-700 dark:text-gray-300">
        Aspiring Quant Developer | AI in Finance | Applied Math & CS Student
      </p>

      <p className="mt-6 max-w-2xl mx-auto text-lg">
        I am Yash, a third year undergrad at IIITD. I am fascinated by Machine Learning and its applications in financial markets. I enjoy learning and testing different strategies and how they perform in real markets. I also believe ML has far more untapped potential in the field of Quant Finance, hence I eagerly pursue it and try to find ways to combine my ideas with already existing quant techniques and strategies in different asset sectors.
      </p>

      <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
        📍 Delhi, India •{' '}
        <a href="mailto:yash23610@iiitd.ac.in" className="text-blue-600 hover:underline">
          yash23610@iiitd.ac.in
        </a>
        ,{' '}
        <a href="mailto:davsvyash2003@gmail.com" className="text-blue-600 hover:underline">
          davsvyash2003@gmail.com
        </a>
      </p>

      {/* Social Links */}
      <div className="mt-6 flex justify-center space-x-6">
        <a
          href="https://github.com/YashVerma-251103"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 dark:text-gray-200 hover:text-blue-600"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/yash-verm4/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 dark:text-gray-200 hover:text-blue-600"
        >
          LinkedIn
        </a>
        <a
          href="https://numer.ai/~vemy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 dark:text-gray-200 hover:text-blue-600"
        >
          Numer.ai
        </a>
        <a
          href="https://www.kaggle.com/vemyish"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 dark:text-gray-200 hover:text-blue-600"
        >
          Kaggle
        </a>
      </div>

      {/* Resume Button */}
      <div className="mt-8">
        <a href="YOUR_RESUME_LINK" target="_blank" rel="noopener noreferrer">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            View Resume
          </button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
