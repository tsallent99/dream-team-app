import { z } from "zod";
import { playerSchema } from "../../../../shared/domain/player.entity";
import { teamSchema } from "../../../team/domain/team.entity";

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
export type TournamentDto = z.infer<typeof tournamentSchema>;
