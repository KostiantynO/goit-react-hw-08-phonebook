import styled from 'styled-components';

export const ContainerStyled = styled.div`
  padding: 0 20px;
  margin: 0 auto;

  max-width: ${({ theme }) => theme.breakpoints[0]};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    max-width: ${({ theme }) => theme.breakpoints[1]};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    max-width: ${({ theme }) => theme.breakpoints[2]};
  }
`;
