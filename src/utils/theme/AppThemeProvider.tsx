import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  PaletteMode,
} from '@mui/material';
import * as colors from '@mui/material/colors';

import React, { createContext, useState } from 'react';

interface AppThemeContextType {
  theme: PaletteMode;
  changeTheme: () => void;
}

const AppThemeContext = createContext<AppThemeContextType>({
  theme: 'dark',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  changeTheme: () => {},
});

interface DesignTokens {
  palette: {
    mode: PaletteMode;
    primary: { main: string };
    secondary: { main: string };
    divider: string;
    common: {
      white: string;
    };
    text: {
      primary: string;
      secondary: string;
      tertiary: string;
    };
    background: {
      default: string;
      paper: string;
    };
  };
}

const getDesignTokens = (mode: PaletteMode): DesignTokens => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: { main: '#4D26C1' },
          secondary: { main: '#9AC126' },
          divider: '#333',
          common: {
            white: '#fff',
          },
          text: {
            primary: colors.blueGrey[900],
            secondary: colors.grey[800],
            tertiary: colors.red[900],
          },
          background: {
            default: colors.grey[300],
            paper: colors.grey[100],
          },
        }
      : {
          // palette values for dark mode
          primary: { main: '#4D26C1' },
          secondary: { main: '#9AC126' },
          divider: '#ddd',
          common: {
            white: '#fff',
          },
          text: {
            primary: colors.grey[200],
            secondary: colors.blueGrey[200],
            tertiary: colors.red[500],
          },
          background: {
            default: '#121212',
            paper: '#2c2c2e',
          },
        }),
  },
});

function AppThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<PaletteMode>(
    (localStorage.getItem('theme') as PaletteMode) || 'dark'
  );

  const myTheme = createTheme(getDesignTokens(theme));

  const changeTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    } else if (theme === 'dark') {
      setTheme('light');
      localStorage.setItem('theme', 'light');
    }
  };

  const values: AppThemeContextType = { theme, changeTheme };
  return (
    <AppThemeContext.Provider value={values}>
      <ThemeProvider theme={myTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppThemeContext.Provider>
  );
}

export { AppThemeContext, AppThemeProvider };
