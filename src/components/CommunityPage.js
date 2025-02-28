import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeProvider';

const CommunityPage = () => {
  const theme = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="container mx-auto px-4 py-20"
    >
      <motion.h1 
        variants={itemVariants}
        className="text-5xl font-bold mb-12 text-center"
        style={{ color: theme.colors.primary.main }}
      >
        Our Vibrant Community
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Featured Members */}
        <motion.div variants={itemVariants} className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Featured Members</h2>
          <div className="space-y-4">
            {/* Add member cards */}
          </div>
        </motion.div>

        {/* Recent Discussions */}
        <motion.div variants={itemVariants} className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Recent Discussions</h2>
          <div className="space-y-4">
            {/* Add discussion list */}
          </div>
        </motion.div>

        {/* Upcoming Events */}
        <motion.div variants={itemVariants} className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
          <div className="space-y-4">
            {/* Add event cards */}
          </div>
        </motion.div>
      </div>

      {/* Community Stats */}
      <motion.div
        variants={itemVariants}
        className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
      >
        <div className="text-center p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-3xl font-bold" style={{ color: theme.colors.primary.main }}>5K+</h3>
          <p className="text-gray-600">Members</p>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-3xl font-bold" style={{ color: theme.colors.primary.main }}>200+</h3>
          <p className="text-gray-600">Daily Posts</p>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-3xl font-bold" style={{ color: theme.colors.primary.main }}>50+</h3>
          <p className="text-gray-600">Events/Month</p>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-3xl font-bold" style={{ color: theme.colors.primary.main }}>15+</h3>
          <p className="text-gray-600">Categories</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CommunityPage;
