import { UkraineFlagIcon } from 'components/common';
import { ButtonStyled } from 'components/common/Button';
import styled from 'styled-components';

export const UserMenuStyled = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 48px;
`;

export const UserWelcomeWrapper = styled.div`
  display: flex;
  min-width: 160px;
  color: ${({ theme }) => theme.colors.main};
`;

export const LogOutButton = styled(ButtonStyled)`
  justify-content: center;
  align-self: center;
  max-width: clamp(80px, 50%, 200px);
`;

export const DefaultAvatar = styled(UkraineFlagIcon)`
  font-size: 32px;
  border-radius: 50%;
`;

export const UserAvatar = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 4px;
`;

export const WelcomeText = styled.b`
  margin-right: 12px;
  text-transform: capitalize;
  transition: color ${({ theme }) => theme.transition};
`;

export const LangThemeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;
