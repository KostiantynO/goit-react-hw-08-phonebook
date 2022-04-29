import { ThemeProvider } from 'styled-components';
import { AppStyled } from './App.styled';

import { useSetTheme } from 'hooks';
import { AppRouter } from 'components/AppRouter';

export const App = () => {
  const theme = useSetTheme();

  return (
    <ThemeProvider theme={theme}>
      <AppStyled>
        <AppRouter />
      </AppStyled>
    </ThemeProvider>
  );
};
