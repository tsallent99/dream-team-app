import { MutationConfig, useMutation } from "../../../../../lib/react-query";
import { UserRepository } from "../../domain/user.repository";
import { useUserRepositoryAdapterFactory } from "../dependency-injection/UserRepositoryContext";

type MutationConfigFnType = UserRepository["login"];
type UseLoginOptions = {
	config?: MutationConfig<MutationConfigFnType>;
};

export const useLogin = ({ config }: UseLoginOptions) => {
	const repository = useUserRepositoryAdapterFactory();
	return useMutation({
		...config,
		mutationFn: (data) => repository.login(data),
	});
};
