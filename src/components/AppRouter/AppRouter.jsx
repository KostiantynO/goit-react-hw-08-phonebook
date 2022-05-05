import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout';
import { chunk } from 'utils';
import { RestrictedRoute } from './RestrictedRoute';

const LoginView = chunk('LoginView');
const ContactsView = chunk('ContactsView');
const RegisterView = chunk('RegisterView');
const HomeView = chunk('HomeView');
const NotFoundView = chunk('NotFoundView');

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeView />} />

        <Route
          path="contacts"
          element={
            <RestrictedRoute>
              <ContactsView />
            </RestrictedRoute>
          }
        />

        <Route path="login" element={<LoginView />} />
        <Route path="register" element={<RegisterView />} />

        <Route path="*" element={<NotFoundView />} />
      </Route>
    </Routes>
  );
};
