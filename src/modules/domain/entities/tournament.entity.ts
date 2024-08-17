import { TeamEntity } from "./team.entity";

export type TournamentEntity = {
    readonly id: string;
    readonly name: string;
    readonly teams: TeamEntity[];
    readonly status: string;
    readonly prizePool: number;
}