'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { useEffect } from 'react';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={true}
      storageKey="theme"
    >
      <ThemeCustomProperties>{children}</ThemeCustomProperties>
    </NextThemesProvider>
  );
}

// Component to apply CSS custom properties (migrated from ThemeContext.jsx)
function ThemeCustomProperties({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const applyThemeVariables = () => {
      const isDark = document.documentElement.classList.contains('dark');
      const root = document.documentElement;
      
      const themes = {
        dark: {
          '--bg-primary': '#0B1F3B',
          '--bg-secondary': '#0d2847',
          '--bg-tertiary': '#0f3154',
          '--bg-services': 'white',
          '--text-primary': '#ffffff',
          '--text-secondary': '#e5e5e5',
          '--text-muted': '#a0a0a0',
          '--accent-primary': '#0774E8',
          '--accent-secondary': '#1DA1F2',
          '--border-primary': '#1a3a5f',
          '--border-secondary': '#254a70',
          '--shadow-primary': 'rgba(0, 0, 0, 0.3)',
          '--shadow-secondary': 'rgba(0, 0, 0, 0.5)',
          '--gradient-primary': 'linear-gradient(135deg, #0B1F3B, #0d2847)',
          '--gradient-secondary': 'linear-gradient(135deg, #0d2847, #0f3154)',
          '--gradient-accent': 'linear-gradient(135deg, #0774E8, #1DA1F2)',
        },
        light: {
          '--bg-primary': '#ffffff',
          '--bg-secondary': '#f8f9fa',
          '--bg-tertiary': '#f1f5f9',
          '--text-primary': '#0B1F3B',
          '--text-secondary': '#1a3a5f',
          '--bg-services': '#e9edf9',
          '--text-muted': '#6b7280',
          '--accent-primary': '#0774E8',
          '--accent-secondary': '#1DA1F2',
          '--border-primary': '#e9ecef',
          '--border-secondary': '#d1d5db',
          '--shadow-primary': 'rgba(7, 116, 232, 0.1)',
          '--shadow-secondary': 'rgba(7, 116, 232, 0.2)',
          '--gradient-primary': 'linear-gradient(135deg, #ffffff, #f8f9fa)',
          '--gradient-secondary': 'linear-gradient(135deg, #f8f9fa, #f1f5f9)',
          '--gradient-accent': 'linear-gradient(135deg, #0774E8, #1DA1F2)',
        }
      };

      const currentTheme = isDark ? themes.dark : themes.light;
      Object.entries(currentTheme).forEach(([property, value]) => {
        root.style.setProperty(property, value);
      });
    };

    applyThemeVariables();

    // Watch for theme changes
    const observer = new MutationObserver(applyThemeVariables);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  return <>{children}</>;
}
