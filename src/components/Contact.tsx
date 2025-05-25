// src/components/Contact.tsx
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <form className="max-w-xl mx-auto grid grid-cols-1 gap-4">
        {/* Name Field */}
        <input
          type="text"
          placeholder="Your Name"
          className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded"
        />
        {/* Email Field */}
        <input
          type="email"
          placeholder="Your Email"
          className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded"
        />
        {/* Message Field */}
        <textarea
          placeholder="Your Message"
          rows={4}
          className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded"
        />
        {/* Submit Button */}
        <button
          type="submit"
          className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
