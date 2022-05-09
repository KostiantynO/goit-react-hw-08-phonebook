import { ButtonStyled } from 'components/common/Button';
import styled from 'styled-components';

export const ContactStyled = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;

  padding: 4px 16px 4px 4px;
  background-color: ${({ theme }) => theme.colors.bg};
`;

export const ContactEditName = styled.input`
  width: 55%;
  color: ${({ theme }) => theme.colors.input.fg};
  background-color: transparent;
  border: none;
`;

export const ContactEditNumber = styled.input`
  width: 40%;
  color: ${({ theme }) => theme.colors.input.fg};
  background-color: transparent;
  border: none;
`;

export const DeleteContactButton = styled(ButtonStyled)`
  position: absolute;
  top: -8px;
  right: -12px;
  background-color: ${({ theme }) => theme.colors.bg};
`;
