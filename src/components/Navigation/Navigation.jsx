import { useLang } from 'hooks';
import { NavigationStyled, NavLinkStyled } from './Navigation.styled';

export const Navigation = () => {
  const lang = useLang();
  const isLoggedIn = false;

  return (
    <NavigationStyled>
      <NavLinkStyled to="/">{lang.main}</NavLinkStyled>
      {/* <NavLinkStyled to="/todos">{lang.todos}</NavLinkStyled> */}
      {isLoggedIn && (
        <NavLinkStyled to="/contacts">{lang.contacts}</NavLinkStyled>
      )}
    </NavigationStyled>
  );
};
