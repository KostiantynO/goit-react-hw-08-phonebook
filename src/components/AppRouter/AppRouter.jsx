import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout';

const LoginView = () => <div>LoginView</div>;
const ContactsView = () => <div>ContactsView</div>;
const RegisterView = () => <div>RegisterView</div>;

export const AppRouter = () => {
  const isLoggedIn = false;

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {isLoggedIn ? (
          <Route path="contacts" element={<ContactsView />} />
        ) : (
          <>
            <Route path="login" element={<LoginView />} />
            <Route path="register" element={<RegisterView />} />
          </>
        )}
      </Route>
    </Routes>
  );
};
