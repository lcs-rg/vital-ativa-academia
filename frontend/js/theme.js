const theme = {
  colors: {
    primary: {
      main: '#111111',
      secondary: '#1A1A1A',
      tertiary: '#262626'
    },
    accent: {
      main: '#E53935',
      hover: '#C62828',
      light: '#FFEBEE'
    },
    neutral: {
      white: '#FFFFFF',
      light: '#E5E7EB',
      medium: '#9CA3AF',
      dark: '#374151'
    },
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
    },
    status: {
      success: '#10B981',
      successBg: '#ECFDF5',
      warning: '#F59E0B',
      warningBg: '#FFFBEB',
      error: '#E53935',
      errorBg: '#FEF2F2',
      info: '#3B82F6',
      infoBg: '#EFF6FF'
    },
    divider: '#2A2A2A',
    overlay: 'rgba(0, 0, 0, 0.85)'
  },

  typography: {
    fontFamily: {
      display: "'Bebas Neue', sans-serif",
      body: "'DM Sans', sans-serif",
      fallback: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
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
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700
    },
    lineHeight: {
      tight: 1.25,
      normal: 1.5,
      relaxed: 1.75
    },
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em'
    }
  },

  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    '2xl': '48px',
    '3xl': '64px',
    '4xl': '96px'
  },

  borderRadius: {
    none: '0',
    sm: '2px',
    md: '4px',
    lg: '8px',
    xl: '12px',
    '2xl': '16px',
    full: '9999px'
  },

  shadows: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.3)',
    md: '0 4px 6px rgba(0, 0, 0, 0.3)',
    lg: '0 10px 15px rgba(0, 0, 0, 0.3)',
    xl: '0 20px 25px rgba(0, 0, 0, 0.3)',
    glow: '0 0 20px rgba(229, 57, 53, 0.3)',
    glowStrong: '0 0 40px rgba(229, 57, 53, 0.5)',
    inner: 'inset 0 2px 4px rgba(0, 0, 0, 0.2)'
  },

  transitions: {
    fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
    normal: '200ms cubic-bezier(0.4, 0, 0.2, 1)',
    slow: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
    bounce: '400ms cubic-bezier(0.68, -0.55, 0.265, 1.55)'
  },

  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px'
  },

  zIndex: {
    base: 0,
    dropdown: 100,
    sticky: 200,
    fixed: 300,
    modalBackdrop: 400,
    modal: 500,
    popover: 600,
    tooltip: 700,
    toast: 800
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { theme };
}