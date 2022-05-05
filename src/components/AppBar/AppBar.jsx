import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openDrawer } from 'redux/drawer';

import { AppBarStyled, HeaderContainer } from './AppBar.styled';
import { Navigation } from 'components/Navigation';
import { AuthNav } from 'components/AuthNav';
import { ButtonStyled } from 'components/common/Button';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Drawer } from 'components/common';
import { UserMenu } from 'components/UserMenu';
import { authSelectors } from 'redux/auth';

export const AppBar = () => {
  const dispatch = useDispatch();
  const showDrawer = useCallback(() => {
    dispatch(openDrawer());
  }, [dispatch]);

  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <AppBarStyled title="AppBar" className="AppBar">
      <HeaderContainer title="HeaderContainer" className="HeaderContainer">
        <Navigation />

        {!isLoggedIn && <AuthNav />}

        {isLoggedIn && (
          <>
            <ButtonStyled onClick={showDrawer} icon>
              <GiHamburgerMenu size={32} />
            </ButtonStyled>

            <Drawer>
              <UserMenu />
            </Drawer>
          </>
        )}
      </HeaderContainer>
    </AppBarStyled>
  );
};
