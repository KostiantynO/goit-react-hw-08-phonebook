import {
  AuthViewContainer,
  AuthPageIndicator,
  LoginForm,
} from 'components/views';

const LoginView = () => {
  return (
    <AuthViewContainer>
      <AuthPageIndicator />

      <LoginForm />
    </AuthViewContainer>
  );
};

LoginView.propTypes = {};

export default LoginView;
