import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const userName = useSelector(authSelectors.getUserName);
  const authState = useMemo(
    () => ({ isLoggedIn, userName }),
    [isLoggedIn, userName]
  );
  return authState;
};
