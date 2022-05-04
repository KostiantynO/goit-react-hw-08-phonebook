import { getRefs } from 'utils';
import { useDispatch, useSelector } from 'react-redux';
import { closeDrawer, getIsDrawerOpen } from 'redux/drawer';

import { createPortal } from 'react-dom';

import {
  CloseDrawerButton,
  DrawerBackdrop,
  DrawerContent,
} from './Drawer.styled';
import { AiOutlineClose } from 'react-icons/ai';
import { useCallback, useEffect } from 'react';

const { drawerRoot } = getRefs();

export const Drawer = ({ children }) => {
  const isOpen = useSelector(getIsDrawerOpen);
  const dispatch = useDispatch();
  const hideDrawer = useCallback(() => dispatch(closeDrawer()), [dispatch]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeydown = ({ code }) => {
      if (code === 'Escape') {
        hideDrawer();
      }
    };

    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, [hideDrawer, isOpen]);

  const handleBackdropClick = useCallback(
    event => {
      if (event.currentTarget === event.target) {
        hideDrawer();
      }
    },
    [hideDrawer]
  );

  return createPortal(
    <DrawerBackdrop
      title="DrawerBackdrop"
      className="DrawerBackdrop"
      isOpen={isOpen}
      onClick={handleBackdropClick}
    >
      <DrawerContent
        title="DrawerContent"
        className="DrawerContent"
        isOpen={isOpen}
      >
        <CloseDrawerButton onClick={hideDrawer} icon>
          <AiOutlineClose size={32} />
        </CloseDrawerButton>

        {children}
      </DrawerContent>
    </DrawerBackdrop>,
    drawerRoot
  );
};
