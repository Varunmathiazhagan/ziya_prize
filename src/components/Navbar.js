import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeProvider';
import { FiHome, FiBox, FiUsers, FiMessageCircle, FiMapPin, FiInfo, FiMail, FiShoppingCart } from 'react-icons/fi';

const Navbar = ({ cart }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const theme = useTheme();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);
  
  const navItems = [
    { name: 'Home', path: '/', icon: FiHome },
    { name: 'Products', path: '/products', icon: FiBox },
    { name: 'Experts', path: '/experts', icon: FiUsers },
    { name: 'Community', path: '/community', icon: FiMessageCircle },
    { name: 'Find Centers', path: '/locations', icon: FiMapPin },
    { name: 'About', path: '/about', icon: FiInfo },
    { name: 'Contact', path: '/contact', icon: FiMail },
  ];

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const linkVariants = {
    hover: {
      y: -3,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: { scale: 0.95 }
  };
  
  return (
    <motion.nav 
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed top-0 w-full z-40 ${
        scrolled 
          ? 'bg-gradient-to-r from-green-50/90 via-white/90 to-green-50/90 backdrop-blur-md shadow-lg' 
          : 'bg-transparent backdrop-blur-sm'
      } transition-all duration-500`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center group">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative"
              >
                <img 
                  className="h-12 w-auto filter drop-shadow-md" 
                  src="/logo.svg" 
                  alt="ZIYA Logo"
                />
                <div className="absolute inset-0 bg-green-300 rounded-full filter blur-xl opacity-30 group-hover:opacity-40 transition-opacity"></div>
              </motion.div>
              <motion.span 
                className="ml-3 text-2xl font-bold tracking-tight bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent drop-shadow-sm"
                whileHover={{ scale: 1.05 }}
              >
                ZIYA
              </motion.span>
            </Link>
            
            <div className="hidden md:ml-10 md:flex md:space-x-6">
              {navItems.map((item) => (
                <motion.div
                  key={item.name}
                  variants={linkVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="relative"
                >
                  <Link
                    to={item.path}
                    className={`px-4 py-2.5 rounded-lg text-sm font-medium flex items-center space-x-2 transition-all duration-300 ${
                      location.pathname === item.path 
                        ? 'bg-gradient-to-r from-green-500 to-green-400 text-white shadow-md' 
                        : 'text-gray-700 hover:bg-green-50/80'
                    }`}
                  >
                    <item.icon className={`w-4 h-4 ${location.pathname === item.path ? 'text-white' : 'text-green-600'}`} />
                    <span>{item.name}</span>
                    {location.pathname === item.path && (
                      <motion.div 
                        className="absolute bottom-0 left-0 right-0 h-1 bg-white rounded-full mx-4"
                        layoutId="activeIndicator"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="flex items-center">
            <motion.div 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="mr-4"
            >
              <Link to="/cart" className="relative group">
                <div className="p-2.5 rounded-full bg-green-50 group-hover:bg-green-100 transition-colors duration-300 shadow-sm">
                  <FiShoppingCart className="w-5 h-5 text-green-600" />
                  {cartItemsCount > 0 && (
                    <motion.span 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="absolute -top-2 -right-2 w-6 h-6 flex items-center justify-center text-xs font-semibold text-white rounded-full bg-gradient-to-r from-green-500 to-green-400 shadow-md"
                    >
                      {cartItemsCount}
                    </motion.span>
                  )}
                </div>
                <motion.span 
                  className="absolute inset-0 rounded-full bg-green-300 -z-10"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.4, scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                ></motion.span>
              </Link>
            </motion.div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-lg bg-green-50 text-green-600 hover:bg-green-100 focus:outline-none transition-colors"
              aria-label="Menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="md:hidden overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="px-4 pt-2 pb-4 space-y-2 bg-gradient-to-b from-white to-green-50 shadow-inner">
              {navItems.map((item) => (
                <motion.div
                  key={item.name}
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    delay: navItems.indexOf(item) * 0.05 
                  }}
                >
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-medium ${
                      location.pathname === item.path 
                        ? 'bg-gradient-to-r from-green-500 to-green-400 text-white shadow-md' 
                        : 'text-gray-700 hover:bg-green-100'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className={`w-5 h-5 ${location.pathname === item.path ? 'text-white' : 'text-green-600'}`} />
                    <span>{item.name}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
