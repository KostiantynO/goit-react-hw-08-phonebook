import { NavLink } from 'react-router-dom';
import { AuthNavStyled } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthNavStyled>
      <NavLink to="register">Register</NavLink>
      <NavLink to="login">Login</NavLink>
    </AuthNavStyled>
  );
};
