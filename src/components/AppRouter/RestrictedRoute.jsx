import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { Navigate } from 'react-router-dom';

export const RestrictedRoute = ({ children }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return isLoggedIn ? children : <Navigate to="/login" replace={true} />;
};
