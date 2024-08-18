import { TeamEntity } from "../entities/team.entity";
import { TournamentEntity } from "../entities/tournament.entity";

export interface TournamentRepository {
    getUserTournaments(): Promise<TournamentEntity[]>
    getTournamentById(id: string): Promise<TournamentEntity>;
    createTournament(name: string): Promise<TournamentEntity>;
    JoinTournament(teamId: string, tournamentId: string): Promise<TournamentEntity>;
    removeTeamFromTournament(teamId: string, tournamentId: string): Promise<TournamentEntity>;
    getTournamentTeams(tournamentId: string): Promise<TeamEntity[]>;
}