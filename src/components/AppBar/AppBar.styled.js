import styled from 'styled-components';
import { Container } from 'components/common';

export const AppBarStyled = styled.header`
  position: relative;

  padding: 12px 0;

  ::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 1px;

    background-color: ${({ theme }) => theme.colors.accent};
    border-radius: 16px;
  }
`;

export const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;
