import { PlayerEntity } from "./player.entity";

export type MarketEntity = {
    readonly id: string;
    readonly playersInMarket: PlayerEntity[];
}