import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../user/useUser';
import { useAuthStore } from '../../infrastructure/store/authStore';

export const useAuthGuard = () => {
  const navigate = useNavigate();
  const { token } = useAuthStore();
  const { user, isPending } = useUser();
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const initialize = async () => {
      setIsInitialized(true);
    };

    initialize();
  }, [token, user, isPending, navigate]);

  return {
    isPending,
    isAuthenticated: !!user && !isPending,
    isInitialized
  };
};

