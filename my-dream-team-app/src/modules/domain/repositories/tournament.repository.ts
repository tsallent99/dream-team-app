import { TeamEntity } from "../entities/team.entity";
import { TournamentEntity } from "../entities/tournament.entity";

export interface TournamentRepository {
    getTournamentById(id: string): Promise<TournamentEntity>;
    createTournament(name: string): Promise<TournamentEntity>;
    addTeamToTournament(teamId: string, tournamentId: string): Promise<TournamentEntity>;
    removeTeamFromTournament(teamId: string, tournamentId: string): Promise<TournamentEntity>;
    getTournamentTeams(tournamentId: string): Promise<TeamEntity[]>;
}