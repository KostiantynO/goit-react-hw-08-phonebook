import { useLang } from 'hooks';
import { NavLink } from 'react-router-dom';
import { NavigationStyled } from './Navigation.styled';

export const Navigation = () => {
  const lang = useLang();
  const isLoggedIn = false;

  return (
    <NavigationStyled>
      <NavLink to="/">{lang.main}</NavLink>
      <NavLink to="/todos">{lang.todos}</NavLink>
      {isLoggedIn && <NavLink to="/contacts">{lang.contacts}</NavLink>}
    </NavigationStyled>
  );
};
