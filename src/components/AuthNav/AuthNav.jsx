import { useLang } from 'hooks';
import { NavLink } from 'react-router-dom';
import { AuthNavStyled } from './AuthNav.styled';

export const AuthNav = () => {
  const lang = useLang();

  return (
    <AuthNavStyled>
      <NavLink to="register">{lang.register}</NavLink>
      <NavLink to="login">{lang.login}</NavLink>
    </AuthNavStyled>
  );
};
