import { createPortal } from 'react-dom';
import { getRefs } from 'utils';
import { useEffect } from 'react';
import {
  SuperUkrainianBackdrop,
  SuperUkrainianModal,
  CloseModalButton,
} from './Modal.styled';

import { AiOutlineClose } from 'react-icons/ai';
import PropTypes from 'prop-types';

const { modalRoot } = getRefs();

export const Modal = ({ children, showModal, toggleModal }) => {
  useEffect(() => {
    if (!showModal) return;

    const callback = ({ code }) => {
      if (code === 'Escape') {
        toggleModal();
      }
    };

    window.addEventListener('keydown', callback);

    return () => {
      window.removeEventListener('keydown', callback);
    };
  }, [toggleModal, showModal]);

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      toggleModal();
    }
  };

  return createPortal(
    <SuperUkrainianBackdrop
      title="modal__backdrop"
      className="modal__backdrop"
      onMouseDown={handleBackdropClick}
      showModal={showModal}
    >
      <SuperUkrainianModal
        title="modal__content"
        className="modal__content"
        showModal={showModal}
      >
        <CloseModalButton onClick={toggleModal}>
          <AiOutlineClose size={32} />
        </CloseModalButton>

        {children}
      </SuperUkrainianModal>
    </SuperUkrainianBackdrop>,
    modalRoot
  );
};

Modal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
