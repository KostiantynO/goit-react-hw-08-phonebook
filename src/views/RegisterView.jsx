import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { authSelectors } from 'redux/auth';

import { Section } from 'components/common';
import {
  AuthViewContainer,
  RegisterForm,
  AuthPageIndicator,
} from 'components/views';

const RegisterView = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return isLoggedIn ? (
    <Navigate to="/contacts" replace={true} />
  ) : (
    <Section>
      <AuthViewContainer>
        <AuthPageIndicator />
        <RegisterForm />
      </AuthViewContainer>
    </Section>
  );
};

RegisterView.propTypes = {};

export default RegisterView;
