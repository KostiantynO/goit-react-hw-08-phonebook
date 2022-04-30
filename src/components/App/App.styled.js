import styled from 'styled-components';

export const AppStyled = styled.div`
  height: 100vh;

  font-size: clamp(1rem, 2.1vw, 1.2rem);
  /* font-weight: 700; */
  color: ${({ theme }) => theme.colors.main};

  background-color: ${({ theme }) => theme.colors.bgHero};

  transition: background-color ${({ theme }) => theme.transition};
`;
