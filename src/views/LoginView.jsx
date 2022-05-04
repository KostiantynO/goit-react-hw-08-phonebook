import { Section } from 'components/common';
import {
  AuthViewContainer,
  AuthPageIndicator,
  LoginForm,
} from 'components/views';

const LoginView = () => {
  return (
    <Section>
      <AuthViewContainer>
        <AuthPageIndicator />

        <LoginForm />
      </AuthViewContainer>
    </Section>
  );
};

LoginView.propTypes = {};

export default LoginView;
