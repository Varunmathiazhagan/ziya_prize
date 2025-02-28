import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterestP, FaEnvelope, FaPhone, FaMapMarkerAlt, FaLeaf } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  // Theme colors directly in component
  const theme = {
    colors: {
      primary: {
        main: '#5C8D89',
        dark: '#2E5D4B',
        light: '#A8C3B7'
      },
      secondary: {
        main: '#FF8C42',
        dark: '#E67A30',
        light: '#FFAD75'
      },
      neutral: {
        cream: '#FFF8E8',
        lightBrown: '#E6DBBF',
        darkBrown: '#4A3F35'
      }
    },
    typography: {
      fontFamily: {
        primary: '"Poppins", sans-serif',
        secondary: '"Playfair Display", serif'
      }
    }
  };
  
  const footerLinks = [
    {
      title: "Products",
      links: [
        { name: "Herbal Supplements", url: "/products/supplements" },
        { name: "Essential Oils", url: "/products/oils" },
        { name: "Ayurvedic Teas", url: "/products/teas" },
        { name: "Beauty & Skincare", url: "/products/beauty" },
        { name: "Health Foods", url: "/products/foods" },
        { name: "New Arrivals", url: "/products/new" },
        { name: "Best Sellers", url: "/products/best-sellers" }
      ]
    },
    {
      title: "Learn",
      links: [
        { name: "About Ayurveda", url: "/learn/about-ayurveda" },
        { name: "Doshas Explained", url: "/learn/doshas" },
        { name: "Ayurvedic Diet", url: "/learn/diet" },
        { name: "Daily Routines", url: "/learn/routines" },
        { name: "Blog & Articles", url: "/blog" },
        { name: "Research", url: "/learn/research" },
        { name: "Free Resources", url: "/resources" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Contact Us", url: "/contact" },
        { name: "FAQs", url: "/faqs" },
        { name: "Shipping Policy", url: "/shipping" },
        { name: "Returns & Refunds", url: "/returns" },
        { name: "Track Order", url: "/track-order" },
        { name: "Privacy Policy", url: "/privacy" },
        { name: "Terms of Service", url: "/terms" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", url: "/about" },
        { name: "Our Story", url: "/story" },
        { name: "Our Experts", url: "/experts" },
        { name: "Sustainability", url: "/sustainability" },
        { name: "Careers", url: "/careers" },
        { name: "Press", url: "/press" },
        { name: "Become an Affiliate", url: "/affiliate" }
      ]
    }
  ];

  const socialLinks = [
    { name: "Facebook", icon: <FaFacebookF />, url: "https://facebook.com" },
    { name: "Twitter", icon: <FaTwitter />, url: "https://twitter.com" },
    { name: "Instagram", icon: <FaInstagram />, url: "https://instagram.com" },
    { name: "YouTube", icon: <FaYoutube />, url: "https://youtube.com" },
    { name: "Pinterest", icon: <FaPinterestP />, url: "https://pinterest.com" }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <footer className="text-white" style={{ backgroundColor: theme.colors.primary.dark }}>
      {/* Newsletter Section */}
      <div className="w-full py-12 bg-opacity-90 bg-gradient-to-r" style={{ 
        backgroundImage: `linear-gradient(to right, ${theme.colors.primary.dark}, #1A3C30)` 
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <motion.h3 
                className="text-2xl md:text-3xl font-bold mb-3"
                style={{ fontFamily: theme.typography.fontFamily.secondary }}
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Join Our Ayurvedic Community
              </motion.h3>
              <motion.p 
                className="text-white/80 mb-0"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Get exclusive offers, wellness tips, and early access to new products.
              </motion.p>
            </div>
            <div>
              <form className="mt-8 sm:flex">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full px-5 py-3 border border-transparent text-base rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  placeholder="Enter your email"
                />
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Links Section */}
      <div className="w-full py-12 bg-opacity-90 bg-gradient-to-r" style={{ 
        backgroundImage: `linear-gradient(to right, ${theme.colors.primary.dark}, #1A3C30)` 
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerLinks.map((section, index) => (
              <motion.div 
                key={index}
                className="space-y-4"
                variants={item}
                initial="hidden"
                animate="show"
              >
                <h3 className="text-lg font-semibold" style={{ fontFamily: theme.typography.fontFamily.secondary }}>
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link to={link.url} className="text-white/80 hover:text-white">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Social Links Section */}
      <div className="w-full py-6 bg-opacity-90 bg-gradient-to-r" style={{ 
        backgroundImage: `linear-gradient(to right, ${theme.colors.primary.dark}, #1A3C30)` 
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <motion.a 
                key={index}
                href={social.url}
                className="text-white/80 hover:text-white"
                variants={item}
                initial="hidden"
                animate="show"
              >
                {social.icon}
                <span className="sr-only">{social.name}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="w-full py-4 bg-opacity-90 bg-gradient-to-r" style={{ 
        backgroundImage: `linear-gradient(to right, ${theme.colors.primary.dark}, #1A3C30)` 
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <p className="text-sm text-white/80">
              &copy; {new Date().getFullYear()} Your Company. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Link to="/privacy" className="text-white/80 hover:text-white">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-white/80 hover:text-white">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
