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
    // Esperar hasta que la inicialización esté completa
    return <div>Loading...</div>;
  }

  if (isPending) {
    // Mientras se esté cargando el usuario, mostrar un mensaje de carga
    return <div>Loading...</div>;
  }

  if (!isAuthenticated && !isPending) {
    // Redirigir al login si no está autenticado
    return <Navigate to="/" state={{ from: location }} />;
  }

  // Renderizar los hijos si está autenticado
  return children;
};

export default ProtectedRoute;


