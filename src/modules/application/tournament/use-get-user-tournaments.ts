import { useEffect, useState } from "react";
import { useTournamentRepositoryAdapterFactory } from "../../dependency-injection/tournament/TournamentRepositoryContext";
import { useUser } from "../user/useUser";
import { TournamentEntity } from "../../domain/entities/tournament.entity";

export const useGetUserTournaments = () => {
	const { getUserTournaments } = useTournamentRepositoryAdapterFactory();
	const { user, isPending: isUserPending, isError: isUserError } = useUser();
	const [tournaments, setTournaments] = useState<TournamentEntity[]>([]);
	const [isPending, setIsPending] = useState(true);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		const fetchTournaments = async () => {
			console.log("entro");
			console.log(user);
			if (
				!isUserPending &&
				user &&
				user.tournaments &&
				user.tournaments.length > 0
			) {
				console.log("entro2");
				try {
					const fetchedTournaments = await getUserTournaments(user.tournaments);
					setTournaments(fetchedTournaments);
				} catch (error) {
					setIsError(true);
				}
			}
			setIsPending(false);
		};

		fetchTournaments();
	}, [user, isUserPending, getUserTournaments]);

	return {
		tournaments,
		isPending: isPending || isUserPending,
		isError: isError || isUserError,
	};
};
