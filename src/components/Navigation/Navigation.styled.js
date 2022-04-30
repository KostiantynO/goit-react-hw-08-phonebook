import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigationStyled = styled.nav`
  display: flex;
  gap: 12px;

  > a {
    text-transform: capitalize;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  position: relative;

  font-weight: 700;
  color: ${({ theme }) => theme.colors.main};
  text-decoration: none;

  transition: color ${({ theme }) => theme.transition};

  ::after {
    content: '';
    position: absolute;
    bottom: -12px;
    left: 2%;
    width: 96%;
    height: 4px;

    background-color: ${({ theme }) => theme.colors.accent};
    border-radius: 4px;
    transition: transform ${({ theme }) => theme.transition};
    transform: scaleX(0);
  }

  :hover,
  :focus,
  &.active {
    color: ${({ theme }) => theme.colors.accent};
  }

  &.active {
    ::after {
      transform: scaleX(1);
    }
  }
`;
