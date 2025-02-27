import { z } from "zod";
import { playerSchema } from "../../../shared/domain/player.entity";
import { zodValidationHandler } from "../../../../shared/external-libs/zod/zod-validation-handler";

export const teamSchema = z.object({
	id: z.string(),
	points: z.number(),
	balance: z.number(),
	players: z.array(playerSchema),
});

export type Team = z.infer<typeof teamSchema>;

export class TeamEntity {
	private _team: Team;
	public get team() {
		return this._team;
	}
	constructor(team: unknown) {
		const validation = teamSchema.safeParse(team);
		this._validate(validation);
		this._team = validation.data;
	}

	private _validate(validation: {
		success: boolean;
		data?: Team;
	}): asserts validation is { success: true; data: Team } {
		zodValidationHandler(validation);
	}
}
