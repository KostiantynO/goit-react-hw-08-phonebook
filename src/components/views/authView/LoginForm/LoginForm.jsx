// import PropTypes from 'prop-types'

import { useLang } from 'hooks';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import authOperations from 'redux/auth/authOperations';

import {
  AuthButtonStyled,
  AuthFormInput,
  AuthFormLabel,
  AuthFormStyled,
  AuthFormLabelText,
} from '../RegisterForm/AuthForm.styled';

export const LoginForm = () => {
  const lang = useLang();
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();
    if (!email || !password) {
      return toast.error(lang.authForm.formError);
    }
    dispatch(authOperations.register({ email, password }));
    form.reset();
  };

  return (
    <AuthFormStyled onSubmit={handleSubmit}>
      <AuthFormLabel>
        <AuthFormLabelText>{lang.authForm.email}</AuthFormLabelText>
        <AuthFormInput autoComplete="" type="email" name="email" />
      </AuthFormLabel>

      <AuthFormLabel>
        <AuthFormLabelText>{lang.authForm.password}</AuthFormLabelText>
        <AuthFormInput
          autoComplete="current-password"
          type="password"
          name="password"
        />
      </AuthFormLabel>

      <AuthButtonStyled type="submit">
        {lang.loginForm.loginButtonText}
      </AuthButtonStyled>
    </AuthFormStyled>
  );
};

LoginForm.propTypes = {};
