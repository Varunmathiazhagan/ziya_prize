import React from 'react';
import { useTheme } from '../context/ThemeProvider';

const RecommendationsPage = () => {
  const theme = useTheme();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Recommended For You</h1>
      {/* Add recommendation content */}
    </div>
  );
};

export default RecommendationsPage;
