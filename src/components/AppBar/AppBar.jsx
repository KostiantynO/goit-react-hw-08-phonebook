import { AppBarStyled, HeaderContainer } from './AppBar.styled';
import { Navigation } from 'components/Navigation';
import { AuthNav } from 'components/AuthNav';
import { UserMenu } from 'components/UserMenu';
import { Drawer } from 'components/common';
import { ButtonStyled } from 'components/common/Button';
import { openDrawer } from 'redux/drawer';
import { useDispatch } from 'react-redux';
import { useCallback } from 'react';

import { GiHamburgerMenu } from 'react-icons/gi';

export const AppBar = () => {
  const dispatch = useDispatch();
  const showDrawer = useCallback(() => {
    dispatch(openDrawer());
  }, [dispatch]);

  return (
    <AppBarStyled>
      <HeaderContainer>
        <Navigation />
        <AuthNav />

        <ButtonStyled onClick={showDrawer} icon>
          <GiHamburgerMenu size={32} />
        </ButtonStyled>

        <Drawer>
          <UserMenu />
        </Drawer>
      </HeaderContainer>
    </AppBarStyled>
  );
};
