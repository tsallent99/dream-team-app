export type TournamentEntity = {
    readonly id: string;
    readonly name: string;
    readonly teams: string[];
    readonly prizePool: number;
    readonly logo: string;
    readonly associatedLeague: number;
    readonly startDate: string;
    readonly code: string
}