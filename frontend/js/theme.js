const theme = {
  dark: {
    colors: {
      background: '#111111',
      surface: '#1A1A1A',
      surfaceSecondary: '#262626',
      textPrimary: '#FFFFFF',
      textSecondary: '#9CA3AF',
      border: '#2A2A2A',
      borderLight: '#374151',
      primary: '#E53935',
      primaryHover: '#C62828',
      primaryLight: 'rgba(229, 57, 53, 0.1)',
      success: '#10B981',
      successBg: 'rgba(16, 185, 129, 0.1)',
      error: '#E53935',
      errorBg: 'rgba(229, 57, 53, 0.1)',
      overlay: 'rgba(0, 0, 0, 0.85)',
      navbarBg: 'rgba(17, 17, 17, 0.9)'
    },
    shadows: {
      sm: '0 1px 2px rgba(0, 0, 0, 0.3)',
      md: '0 4px 6px rgba(0, 0, 0, 0.3)',
      lg: '0 10px 15px rgba(0, 0, 0, 0.3)',
      glow: '0 0 20px rgba(229, 57, 53, 0.3)',
      glowStrong: '0 0 40px rgba(229, 57, 53, 0.5)'
    }
  },
  light: {
    colors: {
      background: '#F8F9FA',
      surface: '#FFFFFF',
      surfaceSecondary: '#F3F4F6',
      textPrimary: '#1A1A1A',
      textSecondary: '#6B7280',
      border: '#E5E7EB',
      borderLight: '#D1D5DB',
      primary: '#E53935',
      primaryHover: '#C62828',
      primaryLight: 'rgba(229, 57, 53, 0.08)',
      success: '#15803D',
      successBg: 'rgba(21, 128, 61, 0.08)',
      error: '#B91C1C',
      errorBg: 'rgba(185, 28, 28, 0.08)',
      overlay: 'rgba(0, 0, 0, 0.5)',
      navbarBg: 'rgba(255, 255, 255, 0.9)'
    },
    shadows: {
      sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
      md: '0 4px 6px rgba(0, 0, 0, 0.07)',
      lg: '0 10px 15px rgba(0, 0, 0, 0.1)',
      glow: '0 0 20px rgba(229, 57, 53, 0.15)',
      glowStrong: '0 0 40px rgba(229, 57, 53, 0.25)'
    }
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

theme.setTheme = function(mode) {
  const isDark = mode === 'dark';
  const colors = isDark ? this.dark.colors : this.light.colors;
  const shadows = isDark ? this.dark.shadows : this.light.shadows;

  const root = document.documentElement;
  root.style.setProperty('--bg', colors.background);
  root.style.setProperty('--surface', colors.surface);
  root.style.setProperty('--surface-secondary', colors.surfaceSecondary);
  root.style.setProperty('--text-primary', colors.textPrimary);
  root.style.setProperty('--text-secondary', colors.textSecondary);
  root.style.setProperty('--border', colors.border);
  root.style.setProperty('--border-light', colors.borderLight);
  root.style.setProperty('--primary', colors.primary);
  root.style.setProperty('--primary-hover', colors.primaryHover);
  root.style.setProperty('--primary-light', colors.primaryLight);
  root.style.setProperty('--success', colors.success);
  root.style.setProperty('--success-bg', colors.successBg);
  root.style.setProperty('--error', colors.error);
  root.style.setProperty('--error-bg', colors.errorBg);
  root.style.setProperty('--overlay', colors.overlay);
  root.style.setProperty('--navbar-bg', colors.navbarBg);

  root.style.setProperty('--shadow-sm', shadows.sm);
  root.style.setProperty('--shadow-md', shadows.md);
  root.style.setProperty('--shadow-lg', shadows.lg);
  root.style.setProperty('--shadow-glow', shadows.glow);
  root.style.setProperty('--shadow-glow-strong', shadows.glowStrong);

  document.body.setAttribute('data-theme', mode);
  localStorage.setItem('theme', mode);
};

theme.init = function() {
  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const mode = saved || (prefersDark ? 'dark' : 'dark');
  this.setTheme(mode);
};

theme.toggle = function() {
  const current = document.body.getAttribute('data-theme') || 'dark';
  const newTheme = current === 'dark' ? 'light' : 'dark';
  this.setTheme(newTheme);

  setTimeout(() => {
    const navbar = document.querySelector('.header');
    if (navbar) {
      navbar.outerHTML = window.Navbar();
    }
  }, 50);
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { theme };
}

window.theme = theme;