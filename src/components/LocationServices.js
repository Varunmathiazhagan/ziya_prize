import React from 'react';
import { useTheme } from '../context/ThemeProvider';

const LocationServices = () => {
  const theme = useTheme();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Our Locations</h1>
      {/* Add location content */}
    </div>
  );
};

export default LocationServices;
