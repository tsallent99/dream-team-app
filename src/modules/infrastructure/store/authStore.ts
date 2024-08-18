import { create } from 'zustand'
import { UserEntity } from '../../domain/entities/user.entity';
import { useUser } from '../../application/user/useUser';
import { useQuery } from '@tanstack/react-query';

interface AuthState {
  token: string | null;
  setToken: (token: string | null) => void;
  user: UserEntity | null;
  setUser: (user: UserEntity | null) => void;
  initializeAuth: () => void; 
}

export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  setToken: (token) => {
    if (token) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }
    set({ token });
  },
  user: null,
  setUser: (user) => set({ user }),

  
  initializeAuth: () => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      set({ token: storedToken });
    } else {
      set({ token: null });
    }
  }
}));


export const useAuthInitialization = () => {
  const { token, setToken, setUser, initializeAuth } = useAuthStore();
  const { user } = useUser();

  useQuery({
    queryKey: ['initializeAuth'],
    queryFn: async () => {
      initializeAuth();

      if (token) {
        try {
          if (!token || !user) {
            setToken(null);
            setUser(null);
          }
        } catch (error) {
          console.error('Failed to fetch user:', error);
          setToken(null);
          setUser(null);
        }
      } else {
        setUser(null);
      }

      return token || null;
    },

  });
};



