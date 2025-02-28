import React, { createContext, useContext } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const theme = {
    colors: {
      primary: {
        main: '#2E7D32',
        light: '#4CAF50',
        dark: '#1B5E20',
      },
      secondary: {
        main: '#FFA000',
        light: '#FFB74D',
        dark: '#FF6F00',
      },
      neutral: {
        cream: '#FFF8E1',
        lightBrown: '#EFEBE9',
        darkBrown: '#3E2723',
      },
    },
    typography: {
      fontFamily: {
        primary: "'Inter', sans-serif",
        secondary: "'Playfair Display', serif",
      },
    },
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
