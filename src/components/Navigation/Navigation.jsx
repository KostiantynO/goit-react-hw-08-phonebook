import { useLang } from 'hooks';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { NavigationStyled, NavLinkStyled } from './Navigation.styled';

export const Navigation = () => {
  const lang = useLang();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <NavigationStyled title="Navigation">
      <NavLinkStyled to="/">{lang.main}</NavLinkStyled>

      {isLoggedIn && (
        <>
          <NavLinkStyled to="/contacts">{lang.contacts}</NavLinkStyled>
          <NavLinkStyled to="/upload">{lang.upload}</NavLinkStyled>
        </>
      )}
    </NavigationStyled>
  );
};
