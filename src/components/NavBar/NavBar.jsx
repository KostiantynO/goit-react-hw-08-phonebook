import { NavLink } from 'react-router-dom';
import { NavigationStyled } from './NavBar.styled';

export const NavBar = () => {
  const isLoggedIn = false;

  return (
    <NavigationStyled>
      {isLoggedIn && <NavLink to="contacts">Contacts</NavLink>}
    </NavigationStyled>
  );
};
