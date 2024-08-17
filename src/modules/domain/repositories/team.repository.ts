import { TeamEntity } from "../entities/team.entity";

export interface TeamRepository {
    createTeam(name: string, userId: string): Promise<TeamEntity>;
    getTeamByTournamentId(id: string): Promise<TeamEntity>;
    addPlayerToTeam(playerId: string, teamId: string): Promise<TeamEntity>;
    removePlayerFromTeam(playerId: string, teamId: string): Promise<TeamEntity>;
    getTeamPoints(teamId: string): Promise<number>;
    getTeamBalance(teamId: string): Promise<number>;
}