import { createPortal } from 'react-dom';
import { getRefs } from 'utils';

import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal, getIsModalOpen } from 'redux/modal';
import {
  SuperUkrainianBackdrop,
  SuperUkrainianModal,
  CloseModalButton,
} from './Modal.styled';

import { AiOutlineClose } from 'react-icons/ai';

const { modalRoot } = getRefs();

export const Modal = ({ children }) => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(getIsModalOpen);
  const hideModal = useCallback(() => dispatch(closeModal()), [dispatch]);

  useEffect(() => {
    if (!isModalOpen) return;

    const callback = ({ code }) => {
      if (code === 'Escape') {
        hideModal();
      }
    };

    window.addEventListener('keydown', callback);

    return () => {
      window.removeEventListener('keydown', callback);
    };
  }, [hideModal, isModalOpen]);

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      hideModal();
    }
  };

  return createPortal(
    <SuperUkrainianBackdrop
      title="modal__backdrop"
      className="modal__backdrop"
      onClick={handleBackdropClick}
      isModalOpen={isModalOpen}
    >
      <SuperUkrainianModal
        title="modal__content"
        className="modal__content"
        isModalOpen={isModalOpen}
      >
        <CloseModalButton onClick={hideModal}>
          <AiOutlineClose size={32} />
        </CloseModalButton>

        {children}
      </SuperUkrainianModal>
    </SuperUkrainianBackdrop>,
    modalRoot
  );
};
