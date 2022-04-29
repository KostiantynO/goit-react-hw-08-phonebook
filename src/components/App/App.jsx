import { ThemeProvider } from 'styled-components';
import { AppStyled } from './App.styled';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useSetTheme } from 'hooks';
import { AppRouter } from 'components/AppRouter';

export const App = () => {
  const theme = useSetTheme();

  return (
    <ThemeProvider theme={theme}>
      <AppStyled>
        <AppRouter />

        <ToastContainer autoClose={2500} />
      </AppStyled>
    </ThemeProvider>
  );
};
