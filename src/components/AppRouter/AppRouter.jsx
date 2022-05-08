import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout';
import { chunk } from 'utils';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

const LoginView = chunk('LoginView');
const ContactsView = chunk('ContactsView');
const RegisterView = chunk('RegisterView');
const HomeView = chunk('HomeView');
const NotFoundView = chunk('NotFoundView');

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <PublicRoute>
              <HomeView />
            </PublicRoute>
          }
        />

        <Route
          path="register"
          element={
            <PublicRoute restricted navigateTo="/contacts">
              <RegisterView />
            </PublicRoute>
          }
        />

        <Route
          path="login"
          element={
            <PublicRoute restricted navigateTo="/contacts">
              <LoginView />
            </PublicRoute>
          }
        />

        <Route
          path="contacts"
          element={
            <PrivateRoute navigateTo="/login">
              <ContactsView />
            </PrivateRoute>
          }
        />

        <Route
          path="*"
          element={
            <PublicRoute>
              <NotFoundView />
            </PublicRoute>
          }
        />
      </Route>
    </Routes>
  );
};
