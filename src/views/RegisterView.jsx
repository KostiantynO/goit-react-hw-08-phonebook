import {
  AuthViewContainer,
  RegisterForm,
  AuthPageIndicator,
} from 'components/views';

const RegisterView = () => {
  return (
    <AuthViewContainer>
      <AuthPageIndicator />
      <RegisterForm />
    </AuthViewContainer>
  );
};

RegisterView.propTypes = {};

export default RegisterView;
