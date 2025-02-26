import { LeagueEntity } from "../../domain/entities/league.entity";
import { TournamentEntity } from "../../domain/entities/tournament.entity";
import { TournamentRepository } from "../../domain/repositories/tournament.repository";
import { getLeagueById, getLeagues } from "../api/external-api/api";
import { LeagueDto } from "../api/external-api/api.dto";
import { createTournament, getTournamentsByIds, TournamentDto } from "../api/tournaments/api";

const createTournamentEntityFromDto = (league: LeagueDto, tournament: TournamentDto): TournamentEntity =>{
    const { logo } = league
    const { Id, code, name, ...rest } = tournament
    return {
        name,
        logo,
        id: Id,
        code,
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
const createNewTournament = async ({name, associatedLeague, startDate, prizePool, initialBudget}: {name: string, associatedLeague: number, startDate: string, prizePool: number, initialBudget: number}): Promise<TournamentEntity> => {
    const tournament = await createTournament({name, associatedLeague, startDate, prizePool, initialBudget});
    const league = await getLeagueById(associatedLeague);
    return createTournamentEntityFromDto(league, tournament);
   
}
const getLeaguesOptions = async (): Promise<LeagueEntity[]> => {
    const leagues = await getLeagues();
    console.log(leagues)
    return leagues as LeagueEntity[];
}
export const tournamentAdapter : TournamentRepository = {
    getUserTournaments,
    createNewTournament,
    getLeaguesOptions
}