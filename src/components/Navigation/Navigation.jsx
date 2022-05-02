import { useLang, useAuth } from 'hooks';
import { NavigationStyled, NavLinkStyled } from './Navigation.styled';

export const Navigation = () => {
  const lang = useLang();
  const { isLoggedIn } = useAuth();

  return (
    <NavigationStyled>
      <NavLinkStyled to="/">{lang.main}</NavLinkStyled>

      {isLoggedIn && (
        <NavLinkStyled to="/contacts">{lang.contacts}</NavLinkStyled>
      )}
    </NavigationStyled>
  );
};
