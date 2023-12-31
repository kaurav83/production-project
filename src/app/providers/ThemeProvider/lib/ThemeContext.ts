import { createContext } from 'react';

export enum Theme {
  LIGHT = 'global_light_theme',
  DARK = 'global_dark_theme',
}

export interface IThemeContextProps {
  theme?: Theme
  setTheme?: (theme: Theme) => void
}

export const ThemeContext = createContext<IThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
