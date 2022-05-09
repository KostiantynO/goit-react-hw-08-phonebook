import { useSetTheme } from 'hooks';
import { AppRouter } from 'components/AppRouter';
import { GlobalStyle } from 'components/common';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { authOperations } from 'redux/auth';

import { ThemeProvider } from 'styled-components';
import { AppStyled } from './App.styled';
import { persistor } from 'redux/store';

export const App = () => {
  const [isPurged, setIsPurged] = useState(false);
  const dispatch = useDispatch();
  const theme = useSetTheme(dispatch);

  useEffect(() => {
    dispatch(authOperations.refresh());
  }, [dispatch]);

  return isPurged ? (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />

        <AppStyled className="App" title="App">
          <AppRouter />
        </AppStyled>
      </>
    </ThemeProvider>
  ) : (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        gap: 30,
      }}
    >
      <button
        style={{ padding: 20 }}
        onClick={async () => {
          dispatch(authOperations.logOut());
          await persistor.purge();
          setIsPurged(true);
        }}
      >
        1. Purge persisted state and logout.
      </button>

      <button
        style={{
          padding: 20,
          backgroundColor: '#2196f3',
          color: 'white',
          '&:hover': {
            backgroundColor: 'red',
          },
        }}
        onClick={() => {
          setIsPurged(true);
        }}
      >
        2. Continue as usual (Render App with current state)
      </button>
    </div>
  );
};
