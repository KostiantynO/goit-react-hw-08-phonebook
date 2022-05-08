// import PropTypes from 'prop-types'

import {
  AuthButtonStyled,
  AuthFormInput,
  AuthFormLabel,
  AuthFormStyled,
  AuthFormLabelText,
} from '../AuthForm.styled';
import PropTypes from 'prop-types';

export const RegisterForm = ({ onSubmit, lang }) => {
  return (
    <AuthFormStyled onSubmit={onSubmit}>
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

RegisterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  lang: PropTypes.object.isRequired,
};
