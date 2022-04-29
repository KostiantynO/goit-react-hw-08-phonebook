import styled from 'styled-components';

export const AppStyled = styled.div`
  height: 100vh;
  font-size: 40px;
  color: ${({ theme }) => theme.colors.main};
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.colors.bg};
`;
