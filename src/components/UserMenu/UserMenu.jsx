import { UserMenuStyled } from './UserMenu.styled';
import { ThemeSwitch } from 'components/common';

export const UserMenu = () => {
  return (
    <UserMenuStyled>
      <div>
        <img src="" alt="avatar" />
        UserMenu
      </div>

      <ThemeSwitch />
    </UserMenuStyled>
  );
};
