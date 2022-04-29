import { UserMenuStyled } from './UserMenu.styled';
import { LangSwitch, ThemeSwitch } from 'components/common';

export const UserMenu = () => {
  return (
    <UserMenuStyled>
      <div>
        <img src="" alt="avatar" />
        UserMenu
      </div>

      <LangSwitch />
      <ThemeSwitch />
    </UserMenuStyled>
  );
};
