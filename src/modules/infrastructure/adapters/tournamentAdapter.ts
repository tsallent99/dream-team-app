import { TournamentEntity } from "../../domain/entities/tournament.entity";
import { TournamentRepository } from "../../domain/repositories/tournament.repository";
import { getLeagueById } from "../api/external-api/api";
import { LeagueDto } from "../api/external-api/api.dto";
import { getTournamentsByIds, TournamentDto } from "../api/tournaments/api";

const createTournamentEntityFromDto = (league: LeagueDto, tournament: TournamentDto): TournamentEntity =>{
    const { name: leagueName, logo } = league
    const { Id, ...rest } = tournament
    return {
        leagueName,
        logo,
        id: Id,
        ...rest
    }
}
const getUserTournaments = async (ids: string[]): Promise<TournamentEntity[]> => {
    const tournaments = await getTournamentsByIds(ids);
  
    const userTournaments = await Promise.all(
      tournaments.map(async (tournament) => {
        const league = await getLeagueById(tournament.associatedLeague);
  
        return createTournamentEntityFromDto(league, tournament);
      })
    );
  
    return userTournaments;
  };
  
export const tournamentAdapter : TournamentRepository = {
    getUserTournaments
}