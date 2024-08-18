import { TournamentEntity } from "../../domain/entities/tournament.entity";
import { TournamentRepository } from "../../domain/repositories/tournament.repository";
import { getTournamentsByIds } from "../api/tournaments/api";

const getUserTournaments = (ids: string[]): Promise<TournamentEntity[]> => getTournamentsByIds(ids)
export const tournamentAdapter : TournamentRepository = {
    getUserTournaments
}