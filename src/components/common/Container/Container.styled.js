import styled from 'styled-components';

export const ContainerStyled = styled.div`
  padding: 0 20px;
  margin: 0 auto;

  max-width: ${({ theme }) => theme.breakpoints[0]}; // 320

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    max-width: ${({ theme }) => theme.breakpoints[1]}; // 768
    padding: 0 60px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    max-width: ${({ theme }) => theme.breakpoints[2]}; // 1200
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[3]}) {
    max-width: ${({ theme }) => theme.breakpoints[3]}; // 1440
    padding: 0 80px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[4]}) {
    max-width: ${({ theme }) => theme.breakpoints[4]}; // 1600
  }
`;
