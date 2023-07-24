import { useContext } from 'react';

import { Theme, ThemeContext, LOCAL_STORAGE_THEME_KEY } from './ThemeContext';

interface IUseThemeResult {
  toggleTheme: () => void
  theme?: Theme
}

export const useTheme = (): IUseThemeResult => {
  const { setTheme, theme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;

    if (setTheme != null) {
      setTheme(newTheme);
      document.body.className = newTheme;
      localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    }
  };

  return {
    theme,
    toggleTheme,
  };
};
