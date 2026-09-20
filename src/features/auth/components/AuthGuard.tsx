import { Navigate, Outlet } from 'react-router-dom';

const AuthGuard = () => {
  const token = localStorage.getItem('auth_token');

  if (token) {
    return <Navigate to="/" replace />;
  }

  return <><Outlet /></>;
};

export default AuthGuard;
