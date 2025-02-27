import { useMutation } from "@tanstack/react-query";
import { MutationConfig } from "../../../../lib/react-query";
import { useAuthStore } from "../../../infrastructure/store/authStore";
import { useUserRepositoryAdapterFactory } from "../../../dependency-injection/user/UserRepositoryContext";
import { LoginUserFnT } from "../../../domain/repositories/userRepository";

type UseLoginOptions = {
	config?: MutationConfig<LoginUserFnT>;
};

export const useLogin = ({ config }: UseLoginOptions = {}) => {
	const { login } = useUserRepositoryAdapterFactory();
	const { setToken } = useAuthStore();
	return useMutation({
		...config,
		mutationKey: ["login"],
		mutationFn: (data) => login(data),
		onSuccess: (data) => {
			setToken(data.token);
		},
	});
};
