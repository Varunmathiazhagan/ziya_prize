import React, { useState } from 'react';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "./components/Navbar";
import Home from "./components/HomePage";
import Products from "./components/ProductPage";
import Recommendations from "./components/RecommendationsPage";
import About from "./components/AboutPage";
import Contact from "./components/ContactPage";
import Cart from "./components/CartPage";
import Footer from "./components/Footer";
import Experts from "./components/ExpertsPage";
import Community from "./components/CommunityPage";
import LocationServices from "./components/LocationServices";
import Appointment from "./components/AppointmentPage";
import ThemeProvider from "./context/ThemeProvider";
import './App.css';

// Add ScrollProgress component
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-blue-600 origin-left z-50"
      style={{ scaleX }}
    />
  );
};

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      } else {
        return [...prevCart, product];
      }
    });
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
        <ScrollProgress />
        <Navbar cart={cart} />
        <div className="flex-grow pt-16 pb-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<Products addToCart={addToCart} />} />
            <Route path="/recommendations" element={<Recommendations />} />
            <Route path="/experts" element={<Experts />} />
            <Route path="/community" element={<Community />} />
            <Route path="/locations" element={<LocationServices />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/cart"
              element={
                <Cart
                  cart={cart}
                  setCart={setCart}
                  updateQuantity={updateQuantity}
                  removeFromCart={removeFromCart}
                />
              }
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;