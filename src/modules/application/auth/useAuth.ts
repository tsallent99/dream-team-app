// useAuth.ts
import { useEffect, useState } from "react";
import { UseGetUser } from "../../application/user/queries/useGetUser";
import { useNavigate } from "react-router-dom";
import { queryClient } from "../../../lib/react-query";

export const useAuth = () => {
	const navigate = useNavigate();
	const [token, setToken] = useState<string | null>(
		localStorage.getItem("token")
	);
	const {
		data: user,
		isError,
		error,
		isLoading,
	} = UseGetUser({
		config: {
			enabled: !!token,
		},
	});

	useEffect(() => {
		if (token) {
			localStorage.setItem("token", token);
		} else {
			localStorage.removeItem("token");
		}
	}, [token]);

	const login = (newToken: string) => {
		setToken(newToken);
	};

	const logout = () => {
		setToken(null);
		localStorage.removeItem("token");
		queryClient.clear();
		navigate("/login");
	};

	return { user, token, login, logout, isLoading, isError, error };
};
