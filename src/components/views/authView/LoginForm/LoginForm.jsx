import PropTypes from 'prop-types';

import {
  AuthButtonStyled,
  AuthFormInput,
  AuthFormLabel,
  AuthFormStyled,
  AuthFormLabelText,
} from '../AuthForm.styled';

export const LoginForm = ({ handleSubmit, lang }) => {
  return (
    <AuthFormStyled onSubmit={handleSubmit}>
      <AuthFormLabel>
        <AuthFormLabelText>{lang.authForm.email}</AuthFormLabelText>
        <AuthFormInput type="email" name="email" autoComplete="email" />
      </AuthFormLabel>

      <AuthFormLabel>
        <AuthFormLabelText>{lang.authForm.password}</AuthFormLabelText>
        <AuthFormInput
          type="password"
          name="password"
          autoComplete="current-password"
        />
      </AuthFormLabel>

      <AuthButtonStyled primary type="submit">
        {lang.loginForm.loginButtonText}
      </AuthButtonStyled>
    </AuthFormStyled>
  );
};

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  lang: PropTypes.object.isRequired,
};
