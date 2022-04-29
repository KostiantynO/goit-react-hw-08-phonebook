// import PropTypes from 'prop-types'

import { useLang } from 'hooks';
// import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import {
  RegisterButtonStyled,
  RegisterFormInput,
  RegisterFormLabel,
  RegisterFormStyled,
} from './RegisterForm.styled';

export const RegisterForm = () => {
  const lang = useLang();
  // const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const { elements } = form;

    const name = elements.name.value.trim();
    const email = elements.email.value.trim();
    const password = elements.password.value.trim();

    if (!name || !email || !password) {
      return toast.error(lang.registrationForm.formError);
    }
    toast.success(
      <>
        <p> {name}</p>
        <p> {email}</p>
        <p> {password}</p>
      </>
    );
    // console.log({ name, email, phone });

    // dispatch(signUp({ name, email, phone }));
    // form.reset();
  };

  return (
    <RegisterFormStyled onSubmit={onSubmit}>
      <RegisterFormLabel>
        <span>{lang.registrationForm.name}</span>
        <RegisterFormInput autoComplete="off" type="text" name="name" />
      </RegisterFormLabel>

      <RegisterFormLabel>
        <span>{lang.registrationForm.email}</span>
        <RegisterFormInput autoComplete="off" type="email" name="email" />
      </RegisterFormLabel>

      <RegisterFormLabel>
        <span>{lang.registrationForm.password}</span>
        <RegisterFormInput autoComplete="off" type="password" name="password" />
      </RegisterFormLabel>

      <RegisterButtonStyled type="submit">
        {lang.registrationForm.registerButtonText}
      </RegisterButtonStyled>
    </RegisterFormStyled>
  );
};

RegisterForm.propTypes = {};
