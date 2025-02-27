import { useQuery } from "@tanstack/react-query";
import { UserRepository } from "../../domain/user.repository";
import { QueryConfig } from "../../../../../lib/react-query";
import { useUserRepositoryAdapterFactory } from "../dependency-injection/UserRepositoryContext";
import { UserEntity } from "../../domain/user.entity";

type QueryFnType = UserRepository["getUser"];

type UseGetUserOptions = {
	config?: QueryConfig<QueryFnType>;
};

export const useGetUser = ({ config }: UseGetUserOptions) => {
	const repository = useUserRepositoryAdapterFactory();
	const { data, error, refetch, isFetching, isLoading } = useQuery<
		UserEntity,
		Error
	>({
		...config,
		queryKey: ["user"],
		queryFn: () => repository.getUser(),
	});
	return {
		data,
		error,
		refetch,
		isFetching,
		isLoading,
	};
};
