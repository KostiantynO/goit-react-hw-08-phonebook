import styled from 'styled-components';

export const SectionStyled = styled.section`
  padding: 30px 0;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    padding: 60px 0;
  }
`;
