import { z } from "zod";

export const playerSchema = z.object({
	id: z.string(),
	name: z.string(),
	lastName: z.string(),
	club: z.string(),
	position: z.string(),
	fitnessStatus: z.string(),
	marketValue: z.string(),
	score: z.number(),
});

export type PlayerEntity = z.infer<typeof playerSchema>;
