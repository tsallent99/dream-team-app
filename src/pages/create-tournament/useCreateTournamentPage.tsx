import { useCreateTournament } from "../../modules/application/tournament/useCreateTournament";
import { UseGetLeaguesOptions } from "../../modules/application/tournament/useGetLeaguesOptions";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
export const useCreateTournamentPage = () => {
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const { isLoading: isLoadingLeagues, data: leagues } = UseGetLeaguesOptions(
		{}
	);
	const { mutate: createTournament, isPending: isCreatingTournament } =
		useCreateTournament({
			config: {
				onSuccess: () => {
					queryClient.invalidateQueries({ queryKey: ["user"] });
					navigate("/home");
				},
			},
		});
	return {
		isLoadingLeagues,
		leagues,
		createTournament,
		isCreatingTournament,
	};
};
