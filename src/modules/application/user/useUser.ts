import { useEffect } from "react";
import { useAuthStore } from "../../infrastructure/store/authStore";
import { UseGetUser } from "./queries/useGetUser";

export const useUser = () => {
	const { user, setUser, token, setError } = useAuthStore((state) => ({
		user: state.user,
		setUser: state.setUser,
		token: state.token,
		setError: state.setError,
		error: state.error,
	}));
	const { data, isLoading, isError, error, isSuccess } = UseGetUser({
		config: {
			enabled: !!token,
			throwOnError: false,
		},
	});
	useEffect(() => {
		if (isSuccess) {
			setUser(data);
		}
		if (isError) {
			setUser(null);
			setError(error);
		}
	}, [isSuccess, isError, error, setUser, setError, data]);
	return {
		user: user || data,
		isPending: isLoading,
		isError,
		error,
	};
};
