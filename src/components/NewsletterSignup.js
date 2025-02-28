import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeProvider';

const NewsletterSignup = () => {
  const theme = useTheme();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Add newsletter signup API integration here
      setStatus('success');
      setEmail('');
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="relative">
      <div 
        className="absolute inset-0 bg-gradient-to-r rounded-lg opacity-50"
        style={{ 
          background: `linear-gradient(135deg, ${theme.colors.primary.light}, ${theme.colors.secondary.main})`
        }}
      />
      <div className="relative bg-white/90 rounded-lg p-8 md:p-12">
        <div className="text-center max-w-2xl mx-auto">
          <h2 
            className="text-3xl font-bold mb-4"
            style={{ 
              color: theme.colors.primary.dark,
              fontFamily: theme.typography.fontFamily.secondary 
            }}
          >
            Join Our Wellness Community
          </h2>
          <p className="text-gray-600 mb-8">
            Subscribe to receive Ayurvedic wisdom, exclusive offers, and wellness tips
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 rounded-full border focus:outline-none focus:ring-2"
              style={{ 
                focusRing: theme.colors.primary.light,
                borderColor: theme.colors.neutral.lightBrown 
              }}
              required
            />
            <button
              type="submit"
              className="px-8 py-3 rounded-full text-white font-medium transition-colors"
              style={{ backgroundColor: theme.colors.primary.main }}
            >
              Subscribe
            </button>
          </form>

          {status === 'success' && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-green-600"
            >
              Thank you for subscribing!
            </motion.p>
          )}

          {status === 'error' && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-red-600"
            >
              Oops! Something went wrong. Please try again.
            </motion.p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsletterSignup;
