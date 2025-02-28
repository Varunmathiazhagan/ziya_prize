import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeProvider';

const ExpertsPage = () => {
  const theme = useTheme();
  const [filter, setFilter] = useState('all');
  
  // Dummy data - would come from an API in a real app
  const experts = [
    {
      id: 1,
      name: "Dr. Ananya Sharma",
      speciality: "Ayurvedic Physician",
      experience: "15+ years",
      rating: 4.9,
      reviews: 124,
      image: "https://randomuser.me/api/portraits/women/32.jpg",
      availability: ["Mon", "Wed", "Fri"],
      category: "physician"
    },
    {
      id: 2,
      name: "Dr. Rajiv Mehra",
      speciality: "Panchakarma Specialist",
      experience: "12+ years",
      rating: 4.7,
      reviews: 98,
      image: "https://randomuser.me/api/portraits/men/42.jpg",
      availability: ["Tue", "Thu", "Sat"],
      category: "panchakarma"
    },
    {
      id: 3,
      name: "Dr. Priya Patel",
      speciality: "Ayurvedic Nutritionist",
      experience: "8+ years",
      rating: 4.8,
      reviews: 76,
      image: "https://randomuser.me/api/portraits/women/45.jpg",
      availability: ["Mon", "Tue", "Wed", "Fri"],
      category: "nutrition"
    },
    {
      id: 4,
      name: "Dr. Vikram Singh",
      speciality: "Ayurvedic Dermatologist",
      experience: "10+ years",
      rating: 4.6,
      reviews: 89,
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      availability: ["Wed", "Thu", "Sat", "Sun"],
      category: "dermatology"
    },
  ];
  
  const filteredExperts = filter === 'all' ? experts : experts.filter(expert => expert.category === filter);
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const expertCard = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };
  
  return (
    <div className="pt-10 pb-20 bg-gray-50" style={{ backgroundColor: theme.colors.neutral.cream }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ 
              color: theme.colors.primary.dark,
              fontFamily: theme.typography.fontFamily.secondary
            }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Connect with Ayurvedic Experts
          </motion.h1>
          <motion.p
            className="text-lg max-w-3xl mx-auto"
            style={{ color: theme.colors.neutral.darkBrown }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Schedule virtual or in-person consultations with certified Ayurvedic practitioners
          </motion.p>
        </div>
        
        {/* Filters */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full ${
                filter === 'all' 
                  ? 'bg-green-600 text-white' 
                  : 'bg-white text-gray-700'
              }`}
              style={filter === 'all' ? { backgroundColor: theme.colors.primary.main } : {}}
            >
              All Experts
            </button>
            {['physician', 'panchakarma', 'nutrition', 'dermatology'].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full ${
                  filter === category 
                    ? 'bg-green-600 text-white' 
                    : 'bg-white text-gray-700'
                }`}
                style={filter === category ? { backgroundColor: theme.colors.primary.main } : {}}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Expert Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredExperts.map((expert) => (
            <motion.div
              key={expert.id}
              variants={expertCard}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <img
                  src={expert.image}
                  alt={expert.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-center mb-2" style={{ color: theme.colors.primary.dark }}>
                  {expert.name}
                </h3>
                <p className="text-gray-600 text-center mb-2">{expert.speciality}</p>
                <p className="text-gray-500 text-center mb-4">{expert.experience} Experience</p>
                
                <div className="flex items-center justify-center mb-4">
                  <span className="text-yellow-400 mr-1">★</span>
                  <span className="font-medium">{expert.rating}</span>
                  <span className="text-gray-500 ml-1">({expert.reviews} reviews)</span>
                </div>

                <div className="text-center mb-4">
                  <p className="text-sm text-gray-500">Available on:</p>
                  <div className="flex justify-center gap-2 mt-2">
                    {expert.availability.map((day) => (
                      <span
                        key={day}
                        className="px-2 py-1 text-xs rounded"
                        style={{ backgroundColor: theme.colors.neutral.lightBrown }}
                      >
                        {day}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  to={`/appointment/${expert.id}`}
                  className="block text-center py-2 px-4 rounded-full text-white font-medium transition-colors"
                  style={{ backgroundColor: theme.colors.primary.main }}
                >
                  Book Consultation
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ExpertsPage;