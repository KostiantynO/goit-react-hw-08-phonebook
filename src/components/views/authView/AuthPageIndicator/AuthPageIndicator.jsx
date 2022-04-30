import { useLang } from 'hooks';

import { AuthPageIndicatorStyled } from './AuthPageIndicator.styled';
import { NavLinkStyled } from 'components/Navigation/Navigation.styled';

export const AuthPageIndicator = () => {
  const lang = useLang();

  return (
    <AuthPageIndicatorStyled>
      <NavLinkStyled to="/register">
        {lang.registerView.currentPage}
      </NavLinkStyled>
      <NavLinkStyled to="/login">{lang.loginView.currentPage}</NavLinkStyled>
    </AuthPageIndicatorStyled>
  );
};
