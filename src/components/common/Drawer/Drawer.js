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
    const handleKeydown = ({ code }) => {
      if (code === 'Escape') {
        hideDrawer();
      }
    };

    window.addEventListener('keydown', handleKeydown);
    console.log('Drawer didMount');

    return () => {
      window.removeEventListener('keydown', handleKeydown);
      console.log('Drawer will unmount');
    };
  }, [hideDrawer]);

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      hideDrawer();
    }
  };

  return createPortal(
    <DrawerBackdrop isOpen={isOpen} onClick={handleBackdropClick}>
      <DrawerContent isOpen={isOpen}>
        <CloseDrawerButton onClick={hideDrawer} icon autoFocus>
          <AiOutlineClose size={32} />
        </CloseDrawerButton>

        {children}
      </DrawerContent>
    </DrawerBackdrop>,
    drawerRoot
  );
};
