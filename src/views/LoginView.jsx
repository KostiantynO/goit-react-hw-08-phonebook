import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { authOperations, authSelectors } from 'redux/auth';
import { useLang } from 'hooks';
import { Navigate } from 'react-router-dom';

import { Section } from 'components/common';
import {
  AuthViewContainer,
  AuthPageIndicator,
  LoginForm,
} from 'components/views';

const LoginView = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const dispatch = useDispatch();
  const lang = useLang();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();
    if (!email || !password) {
      return toast.error(lang.authForm.formError);
    }

    dispatch(authOperations.logIn({ email, password }));
    form.reset();
  };

  return isLoggedIn ? (
    <Navigate to="/contacts" replace={true} />
  ) : (
    <Section>
      <AuthViewContainer>
        <AuthPageIndicator />

        <LoginForm handleSubmit={handleSubmit} />
      </AuthViewContainer>
    </Section>
  );
};

LoginView.propTypes = {};

export default LoginView;
