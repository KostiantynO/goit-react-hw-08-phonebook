import { base, themes } from 'components/App/theme';
import { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { getCurrentTheme, setTheme } from 'redux/theme';

export const useSetTheme = dispatch => {
  const mode = useSelector(getCurrentTheme);

  useEffect(() => {
    if (mode) return;

    const themeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const defaultPreferredTheme = themeQuery.matches ? 'dark' : 'light';
    dispatch(setTheme(defaultPreferredTheme));

    // const callback = ({ matches }) => setMode(matches ? 'dark' : 'light');
    // themeQuery.addEventListener('change', callback);
    // return () => themeQuery.removeEventListener('change', callback);
  }, [dispatch, mode]);

  const theme = useMemo(
    () => ({ ...base, colors: themes[mode], mode }),
    [mode]
  );
  return theme;
};
