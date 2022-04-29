import { RegisterForm, RegisterViewContainer } from 'components/views';
import React from 'react';
// import PropTypes from 'prop-types';

const RegisterView = props => {
  return (
    <RegisterViewContainer>
      <RegisterForm />
    </RegisterViewContainer>
  );
};

RegisterView.propTypes = {};

export default RegisterView;
