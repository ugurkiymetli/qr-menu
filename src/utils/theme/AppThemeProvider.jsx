/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import * as colors from '@mui/material/colors';

import React, { createContext, useState } from 'react';

const AppThemeContext = createContext({ changeTheme: () => {} });

const getDesignTokens = (mode) => ({
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
function AppThemeProvider({ children }) {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

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

  const values = { theme, changeTheme };
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
