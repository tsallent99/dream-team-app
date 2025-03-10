import { MutationConfig, useMutation } from "../../../../../../lib/react-query";
import {
	CreateTournamentPayload,
	TournamentRepository,
} from "../../../domain/tournament.repository";
import { useTournamentRepositoryAdapterFactory } from "../../dependency-injection/TournamentRepositoryContext";

type MutationConfigFnType = TournamentRepository["create"];

type UseCreateTournamentOptions = {
	config?: MutationConfig<MutationConfigFnType>;
};

export const useCreateTournament = ({ config }: UseCreateTournamentOptions) => {
	const repository = useTournamentRepositoryAdapterFactory();
	return useMutation({
		...config,
		mutationFn: (params: CreateTournamentPayload) => repository.create(params),
	});
};
