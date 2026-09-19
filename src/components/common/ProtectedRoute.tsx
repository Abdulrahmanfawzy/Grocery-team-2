import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const token = localStorage.getItem('auth_token');
  const location = useLocation();

  if (!token) {
    const redirectPath = location.pathname.replace(/^\//, '');
    return <Navigate to={`/login?redirect=${redirectPath}`} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
