import { AppBarStyled, HeaderContainer } from './AppBar.styled';
import { Navigation } from 'components/Navigation';
import { AuthNav } from 'components/AuthNav';
import { UserMenu } from 'components/UserMenu';

export const AppBar = () => {
  return (
    <AppBarStyled>
      <HeaderContainer>
        <Navigation />
        <AuthNav />
        <UserMenu />
      </HeaderContainer>
    </AppBarStyled>
  );
};
