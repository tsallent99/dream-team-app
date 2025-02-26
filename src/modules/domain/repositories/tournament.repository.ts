import { LeagueEntity } from "../entities/league.entity";
import { TournamentEntity } from "../entities/tournament.entity";

export interface TournamentRepository {
    getUserTournaments(ids: string[]): Promise<TournamentEntity[]>
    // getTournamentById(id: string): Promise<TournamentEntity>;
    createNewTournament({name, associatedLeague, startDate, prizePool, initialBudget}: {name: string, associatedLeague: number, startDate: string, prizePool: number, initialBudget: number}): Promise<TournamentEntity>;
    getLeaguesOptions(): Promise<LeagueEntity[]>;
    // JoinTournament(teamId: string, tournamentId: string): Promise<TournamentEntity>;
    // removeTeamFromTournament(teamId: string, tournamentId: string): Promise<TournamentEntity>;
    // getTournamentTeams(tournamentId: string): Promise<TeamEntity[]>;
}