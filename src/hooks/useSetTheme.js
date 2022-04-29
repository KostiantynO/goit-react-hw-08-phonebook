import { base, themes } from 'components/App/theme';
import { useEffect, useState } from 'react';

const LS_THEME_KEY = 'KO-goit-react-hw-08-phonebook-theme';
const savedTheme = localStorage.getItem(LS_THEME_KEY) ?? undefined;

export const useSetTheme = () => {
  const [mode, setMode] = useState(savedTheme ?? 'light');

  useEffect(() => {
    if (savedTheme) return;

    const themeQuery = window.matchMedia('(prefers-color-scheme: dark)');

    setMode(themeQuery.matches ? 'dark' : 'light');
    const callback = ({ matches }) => setMode(matches ? 'dark' : 'light');
    themeQuery.addEventListener('change', callback);

    return () => themeQuery.removeEventListener('change', callback);
  }, []);

  const theme = { ...base, colors: themes[mode], mode, setMode };

  mode && localStorage.setItem(LS_THEME_KEY, mode);

  return theme;
};
