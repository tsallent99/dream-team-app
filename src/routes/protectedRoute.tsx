import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthGuard } from '../modules/application/guards/useAuthGuard';
import { useAuthInitialization } from '../modules/infrastructure/store/authStore';

interface ProtectedRouteProps {
  children: React.ReactElement;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    useAuthInitialization()
  const { isPending, isAuthenticated, isInitialized } = useAuthGuard();
  const location = useLocation();

  if (!isInitialized) {
    return <div>Loading...</div>;
  }

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated && !isPending) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  return children;
};

export default ProtectedRoute;


