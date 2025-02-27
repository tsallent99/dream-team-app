import { MutationConfig, useMutation } from "../../../../../lib/react-query";
import { UserRepository } from "../../domain/user.repository";
import { useUserRepositoryAdapterFactory } from "../dependency-injection/UserRepositoryContext";

type MutationConfigFnType = UserRepository["register"];

type UseRegisterOptions = {
	config?: MutationConfig<MutationConfigFnType>;
};

export const useRegister = ({ config }: UseRegisterOptions) => {
	const repository = useUserRepositoryAdapterFactory();
	return useMutation({
		...config,
		mutationFn: (data) => repository.register(data),
	});
};
