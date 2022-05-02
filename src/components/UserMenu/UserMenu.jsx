import {
  DefaultAvatar,
  LogOutButton,
  UserAvatar,
  UserMenuStyled,
  WelcomeText,
  UserWelcomeWrapper,
  LangThemeWrapper,
} from './UserMenu.styled';
import { LangSwitch, ThemeSwitch } from 'components/common';
import { useDispatch, useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';
import styled from 'styled-components';
import authOperations from 'redux/auth/authOperations';
import { useLang } from 'hooks';
import { closeDrawer } from 'redux/drawer';

const UserName = styled.b`
  transition: color ${({ theme }) => theme.transition};
`;

export const UserMenu = () => {
  const lang = useLang();
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  // const token = useSelector(authSelectors.getToken);
  const avatar = false;
  const logOut = () => {
    dispatch(authOperations.logOut());
    dispatch(closeDrawer());
  };

  return (
    <UserMenuStyled>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        {avatar ? <UserAvatar src={avatar} alt="avatar" /> : <DefaultAvatar />}

        <UserWelcomeWrapper>
          <WelcomeText>{lang.userMenu.greeting},</WelcomeText>
          <UserName>{name}</UserName>
        </UserWelcomeWrapper>
      </div>

      <LangThemeWrapper>
        <LangSwitch />
        <ThemeSwitch />
      </LangThemeWrapper>

      <LogOutButton primary onClick={logOut}>
        {lang.userMenu.logOutButtonText}
      </LogOutButton>
    </UserMenuStyled>
  );
};
