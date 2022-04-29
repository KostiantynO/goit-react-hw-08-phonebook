import { AuthViewContainer, RegisterForm } from 'components/views';
import { useLang } from 'hooks';
import React from 'react';
// import PropTypes from 'prop-types';

const RegisterView = props => {
  const lang = useLang();
  return (
    <AuthViewContainer>
      <p>{lang.registerView.currentPage}</p>

      <RegisterForm />
    </AuthViewContainer>
  );
};

RegisterView.propTypes = {};

export default RegisterView;
