import styled from 'styled-components';

export const AppStyled = styled.div`
  min-height: 100vh;
  font-size: clamp(1rem, 2.1vw, 1.2rem);
  color: ${({ theme }) => theme.colors.main};
  /* background-color: ${({ theme }) => theme.colors.app.bg}; */
  /* transition: background-color ${({ theme }) => theme.transition}; */
`;
