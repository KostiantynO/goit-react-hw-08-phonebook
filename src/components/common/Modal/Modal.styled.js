import styled from 'styled-components';
import { ButtonStyled } from '../Button';

export const SuperUkrainianBackdrop = styled.div`
  position: fixed;
  inset: 0;
  display: flex;

  backdrop-filter: blur(1px);
  pointer-events: ${({ isModalOpen }) => (isModalOpen ? 'initial' : 'none')};
  visibility: ${({ isModalOpen }) => (isModalOpen ? 'visible' : 'hidden')};
  background: linear-gradient(rgba(0, 87, 183, 0.8), rgb(255, 215, 0));
  opacity: ${({ isModalOpen }) => (isModalOpen ? '0.99' : '0')};

  transition: ${({ theme }) => theme.transition};
  transform: ${({ isModalOpen }) => isModalOpen && 'scale(1.03)'};
  transition-property: transform, visibility, opacity;
`;

export const SuperUkrainianModal = styled.div`
  position: relative;

  padding: 48px 40px;
  margin: auto;

  background-color: ${({ theme }) => theme.colors.modal.bg};

  //prettier-ignore
  box-shadow:
  0 2px 1px -1px rgba(0, 0, 0, 0.2),
  0 1px 1px 0 rgba(0, 0, 0, 0.14),
  0 1px 3px 0 rgba(0, 0, 0, 0.12);

  transition: ${({ theme }) => theme.transition};
  transition-property: transform;
`;

export const CloseModalButton = styled(ButtonStyled)`
  position: absolute;
  top: 12px;
  right: 20px;
`;
