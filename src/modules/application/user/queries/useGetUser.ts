import { useQuery } from "@tanstack/react-query";
import { ExtractFnReturnType, QueryConfig } from "../../../../lib/react-query";

import { useUserRepositoryAdapterFactory } from "../../../dependency-injection/user/UserRepositoryContext";
import { UserRepository } from "../../../domain/repositories/userRepository";
import { useAuthStore } from "../../../infrastructure/store/authStore";
type QueryFnType = UserRepository["getUser"];
type UseGetUserOptions = {
	config?: QueryConfig<QueryFnType>;
};

export const UseGetUser = ({ config = {} }: UseGetUserOptions) => {
	const { getUser } = useUserRepositoryAdapterFactory();

	const { token } = useAuthStore();
	return useQuery<ExtractFnReturnType<QueryFnType>>({
		queryKey: ["user"],
		queryFn: () =>
			getUser().then((user) => {
				return user;
			}),
		...config,
		enabled: !!token,
		throwOnError: false,
	});
};
