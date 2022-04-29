import { ButtonStyled } from 'components/common/Button';
import styled from 'styled-components';

export const AuthFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 280px;
`;

export const AuthFormLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const AuthFormLabelText = styled.label`
  text-transform: capitalize;
  transition: ${({ theme }) => theme.transition};
  transition-property: color;
`;

export const AuthFormInput = styled.input`
  padding: 4px 8px;
  font-size: 1.4rem;

  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme: { colors, mode } }) =>
    mode === 'dark' ? colors.border : colors.bg};

  border-radius: 4px;
  outline: none;
  transition: ${({ theme }) => theme.transition};
  transition-property: color, background-color, box-shadow;

  :focus {
    box-shadow: 1px 2px 4px 2px ${({ theme }) => theme.colors.accent};
  }
`;

export const AuthButtonStyled = styled(ButtonStyled)`
  align-self: center;
  margin-top: 24px;
  text-transform: uppercase;
`;
