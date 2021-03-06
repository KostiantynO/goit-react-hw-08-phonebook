import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { authOperations } from 'redux/auth';
import { useLang } from 'hooks';

import { Section } from 'components/common';
import {
  AuthViewContainer,
  AuthPageIndicator,
  LoginForm,
} from 'components/views';

const LoginView = () => {
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

    dispatch(authOperations.logIn({ email, password, lang }));
    form.reset();
  };

  return (
    <Section>
      <AuthViewContainer>
        <AuthPageIndicator />

        <LoginForm handleSubmit={handleSubmit} lang={lang} />
      </AuthViewContainer>
    </Section>
  );
};

LoginView.propTypes = {};

export default LoginView;
