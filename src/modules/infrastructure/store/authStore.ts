/* eslint-disable @typescript-eslint/no-explicit-any */
// authStore.ts
import create from "zustand";
import { useEffect } from "react";
import { UseGetUser } from "../../application/user/queries/useGetUser";

interface AuthState {
	user: any;
	token: string | null;
	error: any;
	setUser: (user: any) => void;
	setToken: (token: string | null) => void;
	setError: (error: any) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
	user: null,
	token: null,
	error: null,
	setUser: (user) => set({ user }),
	setToken: (token) => {
		if (token) {
			localStorage.setItem("token", token);
		} else {
			localStorage.removeItem("token");
		}
		set({ token });
	},
	setError: (error) => set({ error }),
}));

export const useInitializeAuth = () => {
	const { setUser, setToken, setError, token } = useAuthStore();
	const { data, isError, error } = UseGetUser({
		config: {
			enabled: !!token,
		},
	});

	useEffect(() => {
		const token = localStorage.getItem("token");
		if (token) {
			setToken(token);
			if (isError) {
				setUser(null);
				setError(error);
			} else if (data) {
				setError(null);
				setUser(data);
			}
		}
	}, [data, isError, error, setToken, setUser, setError]);
};
