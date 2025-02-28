import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeProvider';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaInstagram, FaFacebookF, FaTwitter, FaYoutube, FaCheck } from 'react-icons/fa';

const ContactPage = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <FaPhone />,
      title: "Phone",
      details: ["+1 (800) 123-4567", "+1 (800) 987-6543"],
      link: "tel:+18001234567"
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      details: ["contact@ziya.com", "support@ziya.com"],
      link: "mailto:contact@ziya.com"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      details: ["123 Ayurveda Way", "Wellness City, WC 12345"],
      link: "https://maps.google.com"
    },
    {
      icon: <FaClock />,
      title: "Hours",
      details: ["Monday - Friday: 9am - 6pm", "Weekend: 10am - 4pm"],
      link: null
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      {/* Hero section */}
      <div 
        className="relative py-24 bg-cover bg-center"
        style={{ 
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(/images/contact-hero.jpg)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: theme.typography.fontFamily.secondary }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Get In Touch
          </motion.h1>
          <motion.div 
            className="w-24 h-1 bg-white mx-auto mb-6"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <motion.p 
            className="text-xl text-white/90 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We're here to answer any questions about our products, services, or Ayurvedic practices.
          </motion.p>
        </div>
      </div>

      {/* Contact information cards */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div 
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: theme.colors.primary.light, color: theme.colors.primary.dark }}
                >
                  {React.cloneElement(item.icon, { size: 24 })}
                </div>
                <h3 
                  className="text-xl font-semibold mb-3"
                  style={{ color: theme.colors.primary.dark }}
                >
                  {item.title}
                </h3>
                <div className="space-y-2">
                  {item.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600">{detail}</p>
                  ))}
                </div>
                {item.link && (
                  <a 
                    href={item.link}
                    className="inline-block mt-4 font-medium"
                    style={{ color: theme.colors.primary.main }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Connect →
                  </a>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Contact form and map */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <h2 
                className="text-3xl font-bold mb-6"
                style={{ 
                  color: theme.colors.primary.dark,
                  fontFamily: theme.typography.fontFamily.secondary
                }}
              >
                Send Us a Message
              </h2>
              
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div 
                    className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
                    style={{ backgroundColor: theme.colors.primary.light }}
                  >
                    <FaCheck size={32} style={{ color: theme.colors.primary.dark }} />
                  </div>
                  <h3 
                    className="text-2xl font-bold mb-3"
                    style={{ color: theme.colors.primary.dark }}
                  >
                    Thank You!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Your message has been sent successfully. We'll get back to you shortly!
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2 rounded-full text-white"
                    style={{ backgroundColor: theme.colors.primary.main }}
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label 
                        htmlFor="name" 
                        className="block mb-2 font-medium" 
                        style={{ color: theme.colors.primary.dark }}
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border focus:outline-none"
                        style={{ 
                          borderColor: theme.colors.neutral.lightBrown,
                          focus: { borderColor: theme.colors.primary.main }
                        }}
                      />
                    </div>
                    <div>
                      <label 
                        htmlFor="email" 
                        className="block mb-2 font-medium" 
                        style={{ color: theme.colors.primary.dark }}
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border focus:outline-none"
                        style={{ 
                          borderColor: theme.colors.neutral.lightBrown,
                          focus: { borderColor: theme.colors.primary.main }
                        }}
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label 
                        htmlFor="phone" 
                        className="block mb-2 font-medium" 
                        style={{ color: theme.colors.primary.dark }}
                      >
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border focus:outline-none"
                        style={{ 
                          borderColor: theme.colors.neutral.lightBrown,
                          focus: { borderColor: theme.colors.primary.main }
                        }}
                      />
                    </div>
                    <div>
                      <label 
                        htmlFor="subject" 
                        className="block mb-2 font-medium" 
                        style={{ color: theme.colors.primary.dark }}
                      >
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border focus:outline-none appearance-none"
                        style={{ 
                          borderColor: theme.colors.neutral.lightBrown,
                          focus: { borderColor: theme.colors.primary.main }
                        }}
                      >
                        <option value="">Select a subject</option>
                        <option value="product">Product Inquiry</option>
                        <option value="consultation">Consultation</option>
                        <option value="support">Support</option>
                        <option value="feedback">Feedback</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label 
                      htmlFor="message" 
                      className="block mb-2 font-medium" 
                      style={{ color: theme.colors.primary.dark }}
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 rounded-lg border focus:outline-none"
                      style={{ 
                        borderColor: theme.colors.neutral.lightBrown,
                        focus: { borderColor: theme.colors.primary.main }
                      }}
                    />
                  </div>
                  <div className="text-right">
                    <button
                      type="submit"
                      className="px-6 py-2 rounded-full text-white"
                      style={{ backgroundColor: theme.colors.primary.main }}
                      disabled={loading}
                    >
                      {loading ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
            {/* Add map or other content here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
