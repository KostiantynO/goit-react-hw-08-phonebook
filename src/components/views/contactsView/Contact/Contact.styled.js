import { ButtonStyled } from 'components/common/Button';
import styled from 'styled-components';

export const ContactStyled = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;

  padding: 4px 16px 4px 4px;
  background-color: ${({ theme }) => theme.colors.contact.bg};
`;

export const ContactEditName = styled.input`
  width: 55%;
`;

export const ContactEditNumber = styled.input`
  width: 40%;
`;

export const DeleteContactButton = styled(ButtonStyled)`
  position: absolute;
  top: -8px;
  right: -12px;
`;
