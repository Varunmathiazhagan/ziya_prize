export const theme = {
  colors: {
    primary: {
      main: '#5C8D89',
      dark: '#2E5D4B',
      light: '#A8C3B7',
      lighter: '#E5F0ED'
    },
    secondary: {
      main: '#FF8C42',
      dark: '#E67A30',
      light: '#FFAD75',
      lighter: '#FFE5D4'
    },
    accent: {
      sage: '#7CAA96',
      coral: '#FF6B6B',
      gold: '#FFD93D',
      lavender: '#E6E6FA'
    },
    neutral: {
      cream: '#FFF8E8',
      sand: '#F5E6D3',
      lightBrown: '#E6DBBF',
      darkBrown: '#4A3F35',
      gray: {
        50: '#F9FAFB',
        100: '#F3F4F6',
        200: '#E5E7EB',
        300: '#D1D5DB',
        400: '#9CA3AF',
        500: '#6B7280',
        600: '#4B5563',
        700: '#374151',
        800: '#1F2937',
        900: '#111827'
      }
    }
  },
  typography: {
    fontFamily: {
      primary: '"Poppins", sans-serif',
      secondary: '"Playfair Display", serif',
      tertiary: '"Cormorant Garamond", serif'
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem'
    }
  },
  spacing: {
    container: {
      padding: '2rem',
      maxWidth: '1280px'
    }
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
  },
  animations: {
    transition: {
      base: 'all 0.3s ease-in-out',
      slow: 'all 0.6s ease-in-out',
      fast: 'all 0.15s ease-in-out'
    },
    keyframes: {
      fadeIn: {
        from: { opacity: 0 },
        to: { opacity: 1 }
      },
      slideUp: {
        from: { transform: 'translateY(20px)', opacity: 0 },
        to: { transform: 'translateY(0)', opacity: 1 }
      }
    }
  }
};

export default theme;
