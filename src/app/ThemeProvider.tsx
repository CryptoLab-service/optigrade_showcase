'use client';

import { createContext, useContext, useEffect, useState } from 'react';

// Initialize context with proper default values
export const ThemeContext = createContext({
  theme: 'system',
  setTheme: (theme: string) => {}
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState('system');

  useEffect(() => {
    // Only access localStorage in client-side environment
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('data-theme') || 'system';
      setTheme(storedTheme);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
