import styled from 'styled-components';

export const ButtonStyled = styled.button.attrs(type => ({
  type: type ? type : 'button',
}))`
  display: flex;
  padding: 12px 20px;
  font-size: 1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.nav};
  /* border: 1px solid ${({ theme }) => theme.colors.border}; */
  cursor: pointer;
  transition: ${({ theme }) => theme.transition};
  transition-property: color, background-color;
  border-radius: 4px;

  :hover {
    color: ${({ theme }) => theme.colors.bg};
    background-color: ${({ theme }) => theme.colors.accent};
  }

  :focus {
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;
