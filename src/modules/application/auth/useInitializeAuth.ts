import { useEffect } from "react";
import { UseGetUser } from "../../application/user/queries/useGetUser";
import { useAuthStore } from "../../infrastructure/store/authStore";

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
