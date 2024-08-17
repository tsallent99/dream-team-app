import { PlayerEntity } from "../entities/player.entity";

export interface PlayersRepository {
    buyPlayer(playerId: string, teamId: string): Promise<PlayerEntity>;
    sellPlayer(playerId: string, teamId: string): Promise<PlayerEntity>;
    getPlayerById(id: string): Promise<PlayerEntity>;
    getPlayersByTeamId(teamId: string): Promise<PlayerEntity[]>
    getPlayersByPosition(position: string): Promise<PlayerEntity[]>
    getPlayersByMarketStatus(marketStatus: string): Promise<PlayerEntity[]>
}