import { useLang } from 'hooks';

import { AuthNavStyled } from './AuthNav.styled';
import { NavLinkStyled } from 'components/Navigation/Navigation.styled';

export const AuthNav = () => {
  const lang = useLang();

  return (
    <AuthNavStyled>
      <NavLinkStyled to="/register">{lang.register}</NavLinkStyled> |
      <NavLinkStyled to="/login">{lang.login}</NavLinkStyled>
    </AuthNavStyled>
  );
};
