import { MD3DarkTheme } from 'react-native-paper';

export const darkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: '#bb86fc',
    secondary: '#03dac6',
    tertiary: '#ff4444',
    background: '#121212',
    surface: '#1e1e1e',
    surfaceVariant: '#49454e',
    error: '#f2b8b5',
  },
};

export const customDarkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: '#44ff44',
    secondary: '#ff4444',
    tertiary: '#ffbb00',
    background: '#000000',
    surface: '#111111',
    surfaceVariant: '#222222',
    error: '#ff4444',
    onSurface: '#888888',
  },
};

export const themeConfig = {
  darkMode: {
    backgroundColor: '#000000',
    cardBackground: '#111111',
    textColor: '#ffffff',
    countdownColor: '#ff4444',
    countupColor: '#44ff44',
    borderColor: '#222222',
    subtleText: '#888888',
  },
};
