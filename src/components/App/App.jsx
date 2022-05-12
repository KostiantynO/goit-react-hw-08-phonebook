import { useSetTheme } from 'hooks';
import { AppRouter } from 'components/AppRouter';
import { GlobalStyle } from 'components/common';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { authOperations } from 'redux/auth';

import { ThemeProvider } from 'styled-components';
import { AppStyled } from './App.styled';

export const App = () => {
  const dispatch = useDispatch();
  const theme = useSetTheme(dispatch);

  useEffect(() => {
    dispatch(authOperations.refresh());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />

        <AppStyled className="App" title="App">
          <AppRouter />
        </AppStyled>
      </>
    </ThemeProvider>
  );
};
