import { create } from 'zustand'
import { UserEntity } from '../../domain/entities/user.entity';

interface AuthState {
  token: string | null;
  setToken: (token: string) => void;
  user: UserEntity | null;
  setUser: (user: UserEntity) => void 
}

export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  setToken: (token: string) => set({ token }),
  user: null,
  setUser: (user: UserEntity) => set({ user })
}));
