export type TournamentEntity = {
    readonly id: string;
    readonly name: string;
    readonly teams: string[];
    readonly prizePool: number;
    readonly logo: string;
    readonly leagueName: string;
    readonly startDate: string
}