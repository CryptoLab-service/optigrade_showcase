'use client';

import { createContext, useContext, useEffect, useState } from 'react';

interface ThemeContextType {
  theme: string;
  setTheme: (theme: string) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'system',
  setTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState('system');

  useEffect(() => {
    const storedTheme = localStorage.getItem('data-theme') || 'system';
    setTheme(storedTheme);
  }, []);

  useEffect(() => {
    const resolveTheme = (themeValue: string) => {
      if (themeValue === 'system') {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      }
      return themeValue;
    };

    const resolvedTheme = resolveTheme(theme);
    document.documentElement.setAttribute('data-theme', resolvedTheme);
    localStorage.setItem('data-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
