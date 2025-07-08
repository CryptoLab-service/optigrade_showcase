'use client';

import { createContext, useContext, useEffect, useState } from 'react';

// FIX: Ensure proper context creation
const ThemeContext = createContext({
  theme: 'system',
  setTheme: (theme: string) => {}
});

// export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState('system');

  useEffect(() => {
    const storedTheme = localStorage.getItem('data-theme') || 'system';
    setTheme(storedTheme);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// export const useTheme = () => useContext(ThemeContext);
