import React from 'react';

type Project = {
  title: string;
  description: string;
  tags: string[];
  link: string;
};

const projectList: Project[] = [
  {
    title: "Quant Trading Strategy Simulator",
    description:
      "Developed a trading strategy simulator using Python and pandas. Implemented moving average crossover strategies and backtested performance on historical stock data.",
    tags: ["Python", "pandas", "Backtesting", "Finance"],
    link: "https://github.com/YashVerma-251103/quant-trading-simulator",
  },
  {
    title: "Stock Price Prediction (LSTM)",
    description:
      "Built an LSTM neural network with TensorFlow to predict future stock prices using historical data. Explored hyperparameter tuning for improved accuracy.",
    tags: ["TensorFlow", "Python", "Machine Learning", "Time Series"],
    link: "https://github.com/YashVerma-251103/lstm-stock-predictor",
  },
  {
    title: "Portfolio Optimization Tool",
    description:
      "Created a portfolio optimization tool using Markowitz mean-variance optimization and Monte Carlo simulations. Visualized efficient frontiers and risk-return trade-offs.",
    tags: ["C++", "numpy", "Finance", "Optimization"],
    link: "https://github.com/YashVerma-251103/portfolio-optimizer",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="space-y-8">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="border border-gray-300 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-2xl font-semibold">{project.title}</h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-blue-600 hover:underline"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
