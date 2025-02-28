import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeProvider';
import TestimonialsSlider from './TestimonialsSlider';
import NewsletterSignup from './NewsletterSignup';
import FeaturedProducts from './FeaturedProducts';

const HomePage = () => {
  const theme = useTheme();
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
      }
    }),
  };
  
  const features = [
    {
      title: "Pure Ayurvedic Products",
      description: "Carefully sourced and crafted using authentic Ayurvedic principles.",
      icon: "🌿",
      link: "/products"
    },
    {
      title: "Expert Consultations",
      description: "Connect with certified Ayurvedic doctors for personalized guidance.",
      icon: "👨‍⚕️",
      link: "/experts"
    },
    {
      title: "Community Forum",
      description: "Share experiences and insights with like-minded wellness seekers.",
      icon: "👥",
      link: "/community"
    },
    {
      title: "Find Ayurvedic Centers",
      description: "Discover centers and practitioners near your location.",
      icon: "🔍",
      link: "/locations"
    },
  ];
  
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div 
        className="relative h-screen flex items-center justify-center overflow-hidden bg-cover bg-center"
        style={{ 
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(/images/hero-ayurveda.jpg)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: theme.typography.fontFamily.secondary }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Discover the Ancient Wisdom<br />of Ayurveda
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Your one-stop destination for authentic Ayurvedic products, expert consultations, 
            and a thriving community dedicated to holistic wellness.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <Link
              to="/products"
              className="px-8 py-3 text-lg font-medium rounded-full shadow-lg"
              style={{ 
                backgroundColor: theme.colors.primary.main,
                color: 'white'
              }}
            >
              Explore Products
            </Link>
            <Link
              to="/experts"
              className="px-8 py-3 text-lg font-medium rounded-full shadow-lg bg-white"
              style={{ 
                color: theme.colors.primary.main,
              }}
            >
              Consult Experts
            </Link>
          </motion.div>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="py-20 bg-gray-50" style={{ backgroundColor: theme.colors.neutral.cream }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ 
                color: theme.colors.primary.dark,
                fontFamily: theme.typography.fontFamily.secondary
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Your Holistic Wellness Ecosystem
            </motion.h2>
            <motion.p
              className="text-lg max-w-3xl mx-auto"
              style={{ color: theme.colors.neutral.darkBrown }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              ZIYA brings together everything you need on your Ayurvedic wellness journey
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                custom={index}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                style={{ borderTop: `4px solid ${index % 2 === 0 ? theme.colors.primary.main : theme.colors.secondary.main}` }}
              >
                <div className="p-6">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-4 text-2xl mx-auto"
                  >
                    {feature.icon}
                  </div>
                  <h3 
                    className="text-xl font-semibold mb-2 text-center"
                    style={{ color: theme.colors.primary.dark }}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-center">
                    {feature.description}
                  </p>
                  <div className="text-center">
                    <Link
                      to={feature.link}
                      className="inline-block font-medium transition-colors duration-300"
                      style={{ color: theme.colors.primary.main }}
                    >
                      Discover More →
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Featured Products Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FeaturedProducts />
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20" style={{ backgroundColor: theme.colors.neutral.cream }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TestimonialsSlider />
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <NewsletterSignup />
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r" style={{ 
        backgroundImage: `linear-gradient(to right, ${theme.colors.primary.main}, ${theme.colors.primary.dark})`
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-white"
            style={{ fontFamily: theme.typography.fontFamily.secondary }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Begin Your Ayurvedic Journey Today
          </motion.h2>
          <motion.p
            className="text-lg mb-8 text-white/90 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Join thousands of others who have embraced the holistic benefits of Ayurveda
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link
              to="/register"
              className="inline-block px-8 py-3 text-lg font-medium rounded-full shadow-lg bg-white"
              style={{ color: theme.colors.primary.main }}
            >
              Create Free Account
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
