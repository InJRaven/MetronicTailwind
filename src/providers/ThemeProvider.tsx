import { getData, setData } from '@/utils';
import { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeProvider = ({ children }: PropsWithChildren) => {
  const getInitialTheme = () => {
    if (typeof window != 'undefined') {
      const savedTheme = getData('theme') as Theme | null;
      // Debugging

      // Kiểm tra xem savedTheme có phải là "light" hoặc "dark" hay không
      if (savedTheme) {
        return savedTheme;
      }
      const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
      setData('theme', systemPreference);
      return systemPreference;
    }
    return 'light';
  };
  const [theme, setTheme] = useState<Theme>(getInitialTheme());

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      setData('theme', newTheme);
      return newTheme;
    });
  };
  useEffect(() => {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
    document.body.setAttribute('data-theme', theme);
  }, [theme]);
  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export { ThemeProvider, useTheme };
