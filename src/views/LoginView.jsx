import { AuthViewContainer, LoginForm } from 'components/views';
import { useLang } from 'hooks';
import React from 'react';
// import PropTypes from 'prop-types';

const LoginView = props => {
  const lang = useLang();

  return (
    <AuthViewContainer>
      <p>{lang.loginView.currentPage}</p>

      <LoginForm />
    </AuthViewContainer>
  );
};

LoginView.propTypes = {};

export default LoginView;
