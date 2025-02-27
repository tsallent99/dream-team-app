import { TournamentEntity } from "./tournament.entity";

export interface TournamentRepository {
	findById(id: string): Promise<TournamentEntity>;
	create(tournament: TournamentEntity): Promise<TournamentEntity>;
	update(tournament: TournamentEntity): Promise<TournamentEntity>;
	delete(id: string): Promise<void>;
}
