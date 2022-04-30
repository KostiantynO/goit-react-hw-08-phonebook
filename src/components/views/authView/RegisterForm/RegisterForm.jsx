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
} from '../AuthForm.styled';

export const RegisterForm = () => {
  const lang = useLang();
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value.trim();
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();
    if (!name || !email || !password) {
      return toast.error(lang.authForm.formError);
    }
    dispatch(authOperations.register({ name, email, password }));
    form.reset();
  };

  return (
    <AuthFormStyled onSubmit={handleSubmit}>
      <AuthFormLabel>
        <AuthFormLabelText>{lang.authForm.name}</AuthFormLabelText>
        <AuthFormInput autoComplete="name" type="text" name="name" />
      </AuthFormLabel>

      <AuthFormLabel>
        <AuthFormLabelText>{lang.authForm.email}</AuthFormLabelText>
        <AuthFormInput autoComplete="email" type="email" name="email" />
      </AuthFormLabel>

      <AuthFormLabel>
        <AuthFormLabelText>{lang.authForm.password}</AuthFormLabelText>
        <AuthFormInput
          autoComplete="new-password"
          type="password"
          name="password"
        />
      </AuthFormLabel>

      <AuthButtonStyled primary type="submit">
        {lang.registrationForm.registerButtonText}
      </AuthButtonStyled>
    </AuthFormStyled>
  );
};

RegisterForm.propTypes = {};
