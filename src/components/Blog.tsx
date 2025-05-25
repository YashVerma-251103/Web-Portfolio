import React from 'react';

type BlogPost = {
  title: string;
  excerpt: string;
  date: string;
  link: string;
};

const blogPosts: BlogPost[] = [
  {
    title: "Applying ML to Option Pricing",
    excerpt: "Explored using neural networks to estimate Black-Scholes option prices...",
    date: "March 2025",
    link: "#"
  },
  {
    title: "Time Series Forecasting with ARIMA",
    excerpt: "Analyzed stock price time series and compared ARIMA vs LSTM predictions...",
    date: "January 2025",
    link: "#"
  }
];

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-16">
      <h2 className="text-3xl font-bold mb-6">Blog</h2>
      <div className="space-y-8">
        {blogPosts.map((post, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
            <h3 className="text-2xl font-semibold">{post.title}</h3>
            <p className="text-sm text-gray-500">{post.date}</p>
            <p className="mt-2 text-gray-700 dark:text-gray-300">{post.excerpt}</p>
            <a href={post.link} className="inline-block mt-4 text-blue-600 hover:underline">
              Read more
            </a>
          </div>
        ))}
        {blogPosts.length === 0 && (
          <p>No blog posts yet. Stay tuned!</p>
        )}
      </div>
    </section>
  );
};

export default Blog;
