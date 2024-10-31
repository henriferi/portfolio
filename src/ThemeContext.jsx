// src/ThemeContext.js

import React, { createContext, useState, useContext, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/themes';

const ThemeToggleContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeToggleContext);
  if (!context) {
    throw new Error('useTheme deve ser usado dentro de um ThemeToggleContext.Provider');
  }
  return context;
};

export const ThemeContextProvider = ({ children }) => {
  // Inicializa o tema a partir do localStorage, se disponível
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';
  });

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); // Armazena a nova preferência no localStorage
  };

  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  useEffect(() => {
    // Aplica o tema no body
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <ThemeToggleContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
    </ThemeToggleContext.Provider>
  );
};
