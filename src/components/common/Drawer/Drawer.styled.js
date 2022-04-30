import styled from 'styled-components';
import { ButtonStyled } from '../Button';

export const DrawerBackdrop = styled.div`
  position: fixed;
  inset: 0;
  backdrop-filter: blur(1px);

  pointer-events: ${({ isOpen }) => (isOpen ? 'initial' : 'none')};
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  background-color: rgba(21, 21, 21, 0.21);
  opacity: ${({ isOpen }) => (isOpen ? '0.99' : '0')};

  transition: ${({ theme }) => theme.transition};
  transition-property: visibility, background-color, opacity;
`;

export const DrawerContent = styled.div`
  display: flex;
  flex-direction: column;

  position: absolute;
  top: 0;
  left: 100%;
  width: 60%;
  max-width: 600px;
  height: 100%;
  padding: 48px 40px;
  background-color: ${({ theme }) => theme.colors.bgHero};

  //prettier-ignore
  box-shadow:
  0 2px 1px -1px rgba(0, 0, 0, 0.2),
  0 1px 1px 0 rgba(0, 0, 0, 0.14),
  0 1px 3px 0 rgba(0, 0, 0, 0.12);

  transition: ${({ theme }) => theme.transition};
  transition-property: transform;
  transform: ${({ isOpen }) => isOpen && 'translateX(-100%)'};
`;

export const CloseDrawerButton = styled(ButtonStyled)`
  position: absolute;
  top: 12px;
  right: 20px;
`;
