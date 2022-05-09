import { Navigate } from 'react-router-dom';

const NotFoundView = () => <Navigate to="/" replace={true} />;

export default NotFoundView;
