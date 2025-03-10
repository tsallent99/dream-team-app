import { QueryConfig, useQuery } from "../../../../../../lib/react-query";

import { TournamentEntity } from "../../../domain/tournament.entity";
import { TournamentRepository } from "../../../domain/tournament.repository";
import { useTournamentRepositoryAdapterFactory } from "../../dependency-injection/TournamentRepositoryContext";

type QueryFnType = TournamentRepository["getUserTournaments"];

type UseGetUserTournamentsOptions = {
	config?: QueryConfig<QueryFnType>;
};

export const useGetUserTournaments = ({
	config,
}: UseGetUserTournamentsOptions) => {
	const repository = useTournamentRepositoryAdapterFactory();
	const { data, error, refetch, isFetching, isLoading } = useQuery<
		TournamentEntity[],
		Error
	>({
		...config,
		queryKey: ["user-tournaments"],
		queryFn: () => repository.getUserTournaments(),
	});
	return {
		data,
		error,
		refetch,
		isFetching,
		isLoading,
	};
};
