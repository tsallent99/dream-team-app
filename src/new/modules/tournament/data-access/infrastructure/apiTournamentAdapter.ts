import {
	TournamentRepository,
	CreateTournamentPayload,
} from "../../domain/tournament.repository";
import { TournamentEntity } from "../../domain/tournament.entity";
import {
	createTournament,
	getTournaments,
	joinTournament,
	leaveTournament,
} from "./api";

export const apiTournamentAdapter: TournamentRepository = {
	getUserTournaments: async () => {
		const tournaments = await getTournaments();
		return tournaments.map((tournament) => new TournamentEntity(tournament));
	},
	create: async (params: CreateTournamentPayload) => {
		const tournamentDto = await createTournament(params);
		return new TournamentEntity(tournamentDto);
	},
	joinTournament: async (tournamentId: string, userId: string) => {
		const tournamentDto = await joinTournament({ tournamentId, userId });
		return new TournamentEntity(tournamentDto);
	},
	leaveTournament: async (tournamentId: string, teamId: string) => {
		await leaveTournament({ tournamentId, teamId });
	},
};
