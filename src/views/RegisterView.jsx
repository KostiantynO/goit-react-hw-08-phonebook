import { Section } from 'components/common';
import {
  AuthViewContainer,
  RegisterForm,
  AuthPageIndicator,
} from 'components/views';
import { useLang } from 'hooks';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { authOperations } from 'redux/auth';

const RegisterView = () => {
  const lang = useLang();
  const dispatch = useDispatch();

  const handleRegisterSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value.trim();
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();
    if (!name || !email || !password) {
      return toast.error(lang.authForm.formError);
    }
    dispatch(authOperations.register({ name, email, password, lang }));
    form.reset();
  };

  return (
    <Section>
      <AuthViewContainer>
        <AuthPageIndicator />
        <RegisterForm onSubmit={handleRegisterSubmit} lang={lang} />
      </AuthViewContainer>
    </Section>
  );
};

RegisterView.propTypes = {};

export default RegisterView;
