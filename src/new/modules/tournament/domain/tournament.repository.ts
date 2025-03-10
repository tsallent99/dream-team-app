import { TournamentEntity } from "./tournament.entity";

export type CreateTournamentPayload = {
	name: string;
	prizePool: number;
	startDate: string;
	associatedLeague: number;
};
export interface TournamentRepository {
	getUserTournaments(): Promise<TournamentEntity[]>;
	create(params: CreateTournamentPayload): Promise<TournamentEntity>;
	joinTournament(
		tournamentId: string,
		userId: string
	): Promise<TournamentEntity>;
	leaveTournament(tournamentId: string, teamId: string): Promise<void>;
}
