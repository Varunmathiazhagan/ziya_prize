import React from 'react';
import { useTheme } from '../context/ThemeProvider';

const FeaturedProducts = () => {
  const theme = useTheme();

  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Add featured products */}
      </div>
    </div>
  );
};

export default FeaturedProducts;
