import { ThemeProvider } from 'styled-components';
import { AppStyled } from './App.styled';

import { useSetTheme } from 'hooks';
import { AppRouter } from 'components/AppRouter';
import { GlobalStyle } from 'components/common';

export const App = () => {
  const theme = useSetTheme();

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
