import React from 'react';

const Skills: React.FC = () => {
  const languages: string[] = ["Python", "C++", "Java", "C"];
  const tools: string[] = [
    "NumPy", "pandas", "polars", "TensorFlow", "PyTorch",
    "Flask", "Redis", "scikit-learn", "SciPy", "libgdx"
  ];
  const interests: string[] = [
    "Quant Finance", "Time Series Analysis", "Machine Learning",
    "Trading Strategies", "Risk Analysis"
  ];

  return (
    <section id="skills" className="py-16">
      <h2 className="text-3xl font-bold mb-6">Skills & Technologies</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Languages */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Languages</h3>
          <ul className="list-disc list-inside space-y-1">
            {languages.map((lang, idx) => (
              <li key={idx}>{lang}</li>
            ))}
          </ul>
        </div>
        {/* Tools & Libraries */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Tools & Libraries</h3>
          <ul className="list-disc list-inside space-y-1">
            {tools.map((tool, idx) => (
              <li key={idx}>{tool}</li>
            ))}
          </ul>
        </div>
        {/* Areas of Interest */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Areas of Interest</h3>
          <ul className="list-disc list-inside space-y-1">
            {interests.map((area, idx) => (
              <li key={idx}>{area}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
