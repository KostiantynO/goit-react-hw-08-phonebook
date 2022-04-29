import { ButtonStyled } from 'components/common/Button';
import styled from 'styled-components';

export const RegisterFormLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;

  > span {
    text-transform: capitalize;
    transition: ${({ theme }) => theme.transition};
    transition-property: color;
  }
`;

export const RegisterFormInput = styled.input`
  font-size: 1.4rem;

  padding: 4px 8px;

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

export const RegisterFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;

  max-width: 280px;
`;

export const RegisterButtonStyled = styled(ButtonStyled)`
  align-self: center;
  text-transform: uppercase;
  margin-top: 30px;
`;
