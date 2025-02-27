import { useMutation } from "@tanstack/react-query";
import { MutationConfig } from "../../../lib/react-query";
import { useTournamentRepositoryAdapterFactory } from "../../dependency-injection/tournament/TournamentRepositoryContext";
import { TournamentRepository } from "../../domain/repositories/tournament.repository";

type CreateTournamentFnT = TournamentRepository["createNewTournament"];
type UseCreateTournamentOptions = {
	config?: MutationConfig<CreateTournamentFnT>;
};
export const useCreateTournament = ({
	config,
}: UseCreateTournamentOptions = {}) => {
	const { createNewTournament } = useTournamentRepositoryAdapterFactory();
	return useMutation({
		...config,
		mutationFn: createNewTournament,
	});
};
