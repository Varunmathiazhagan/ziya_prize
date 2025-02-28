import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeProvider';

const ProductPage = ({ addToCart }) => {
  const theme = useTheme();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 99.99,
      image: "/product1.jpg",
      description: "Product description...",
      features: ["Feature 1", "Feature 2", "Feature 3"],
      longDescription: "Detailed product description..."
    },
    // ...more products
  ];

  const handleAddToCart = (product) => {
    addToCart({ ...product, quantity });
    setSelectedProduct(null);
    setQuantity(1);
  };

  // Animation variants
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1 }}
      >
        {products.map(product => (
          <motion.div
            key={product.id}
            className="border rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer"
            whileHover={{ y: -5 }}
            onClick={() => setSelectedProduct(product)}
          >
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-48 object-cover rounded"
            />
            <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
            <p className="text-gray-600 line-clamp-2">{product.description}</p>
            <p className="text-green-600 font-bold mt-2">${product.price}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <motion.div
              className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src={selectedProduct.image} 
                    alt={selectedProduct.name} 
                    className="w-full h-auto"
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <h2 className="text-2xl font-bold">{selectedProduct.name}</h2>
                    <button 
                      onClick={() => setSelectedProduct(null)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  
                  <p className="text-2xl font-semibold text-green-600">
                    ${selectedProduct.price}
                  </p>
                  
                  <p className="text-gray-600">{selectedProduct.longDescription}</p>
                  
                  <div className="flex items-center space-x-4">
                    <input
                      type="number"
                      min="1"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
                      className="w-20 p-2 border rounded"
                    />
                    <button
                      onClick={() => handleAddToCart(selectedProduct)}
                      className="px-6 py-2 text-white rounded-lg transition-colors"
                      style={{ backgroundColor: theme.colors.primary.main }}
                    >
                      Add to Cart
                    </button>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-xl font-semibold mb-4">Features</h3>
                    <ul className="list-disc list-inside space-y-2">
                      {selectedProduct.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductPage;
