'use client';

import { useEffect } from 'react';

export function ThemeScript({ config }: { config: Record<string, any> }) {
  useEffect(() => {
    try {
      const root = document.documentElement;
      const defaultTheme = 'system';

      Object.entries(config).forEach(([key, value]) => {
        root.setAttribute('data-' + key, value);
      });

      const resolveTheme = (themeValue: string | null) => {
        if (!themeValue || themeValue === 'system') {
          return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        return themeValue;
      };

      const savedTheme = localStorage.getItem('data-theme');
      const resolvedTheme = resolveTheme(savedTheme);
      root.setAttribute('data-theme', resolvedTheme);

      const styleKeys = Object.keys(config);
      styleKeys.forEach(key => {
        const value = localStorage.getItem('data-' + key);
        if (value) {
          root.setAttribute('data-' + key, value);
        }
      });
    } catch (e) {
      console.error('Failed to initialize theme:', e);
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, [config]);

  return null;
}
