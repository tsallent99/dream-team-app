import { z } from "zod";
import { teamSchema } from "../../team/domain/team.entity";
import { zodValidationHandler } from "../../../../shared/external-libs/zod/zod-validation-handler";
import { playerSchema } from "../../../shared/domain/player.entity";
const tournamentSchema = z.object({
	id: z.string(),
	name: z.string(),
	prizePool: z.number(),
	startDate: z.string(),
	logo: z.string(),
	associatedLeague: z.number(),
	code: z.string(),
	teams: z.array(teamSchema),
	players: z.array(playerSchema),
});

export type Tournament = z.infer<typeof tournamentSchema>;

export class TournamentEntity {
	private _tournament: Tournament;
	public get tournament() {
		return this._tournament;
	}
	constructor(tournament: unknown) {
		const validation = tournamentSchema.safeParse(tournament);
		this._validate(validation);
		this._tournament = validation.data;
	}
	public get teams() {
		return this._tournament.teams;
	}
	public get players() {
		return this._tournament.players;
	}

	private _validate(validation: {
		success: boolean;
		data?: Tournament;
	}): asserts validation is { success: true; data: Tournament } {
		zodValidationHandler(validation);
	}
}
