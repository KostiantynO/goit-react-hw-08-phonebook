import { Section } from 'components/common';
import {
  AuthViewContainer,
  RegisterForm,
  AuthPageIndicator,
} from 'components/views';

const RegisterView = () => {
  return (
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
