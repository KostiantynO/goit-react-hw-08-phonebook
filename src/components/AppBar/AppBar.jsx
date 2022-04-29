import { AppBarStyled, HeaderContainer } from './AppBar.styled';
import { NavBar } from 'components/NavBar';
import { UserMenu } from 'components/UserMenu';
import { AuthNav } from 'components/AuthNav';

export const AppBar = () => {
  return (
    <AppBarStyled>
      <HeaderContainer>
        <NavBar />
        <AuthNav />
        <UserMenu />
      </HeaderContainer>
    </AppBarStyled>
  );
};
