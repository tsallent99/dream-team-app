import { MarketEntity } from "../entities/market.entity";

export interface MarketRepository {
    getMarketByTournamentId(): Promise<MarketEntity>;
    addPlayerToMarket(playerId: string): Promise<MarketEntity>;
    removePlayerFromMarket(playerId: string): Promise<MarketEntity>;
}