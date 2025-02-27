// useAuthGuard.ts
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { queryClient } from "../../../lib/react-query";
import { useAuth } from "../auth/useAuth";
import { useInitializeAuth } from "../auth/useInitializeAuth";

export const useAuthGuard = () => {
	const navigate = useNavigate();
	const { user, token, error, isError } = useAuth();
	const isLoading = !user && !!token && !error;

	useInitializeAuth();
	useEffect(() => {
		if (!isLoading && (!user || !token || isError)) {
			navigate("/login");
			localStorage.removeItem("token");
			queryClient.clear();
		}
	}, [user, token, navigate, isError, error, isLoading]);

	return { user, token, isLoading, isError, error };
};
