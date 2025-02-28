import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeProvider';
import { FaLeaf, FaHeart, FaUsers, FaGlobe } from 'react-icons/fa';

const AboutPage = () => {
  const theme = useTheme();

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const stats = [
    { number: "10+", label: "Years Experience", icon: <FaLeaf /> },
    { number: "50k+", label: "Happy Customers", icon: <FaHeart /> },
    { number: "200+", label: "Expert Practitioners", icon: <FaUsers /> },
    { number: "20+", label: "Countries Served", icon: <FaGlobe /> }
  ];

  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div 
        className="relative py-24 bg-cover bg-center"
        style={{ 
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(/images/about-hero.jpg)'
        }}
      >
        {/* ... Add hero content ... */}
      </div>

      {/* Mission Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* ... Add mission content ... */}
        </div>
      </div>

      {/* Stats Section */}
      <div 
        className="py-16"
        style={{ backgroundColor: theme.colors.neutral.cream }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-center"
              >
                {/* ... Add stat content ... */}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* ... Add team content ... */}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
