import { PlayerEntity } from './player.entity';

export type TeamEntity = {
    id: string;
    name: string;
    userId: string;
    players: PlayerEntity[];
    points: number;
    balance: number;
}
