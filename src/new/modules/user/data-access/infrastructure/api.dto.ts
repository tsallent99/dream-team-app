import { z } from "zod";

const userSchemaDto = z.object({
	id: z.string(),
	username: z.string(),
	email: z.string(),
});

export type UserDto = z.infer<typeof userSchemaDto>;

const loginSchemaDto = z.object({
	token: z.string(),
});

export type LoginDto = z.infer<typeof loginSchemaDto>;

const registerSchemaDto = z.object({
	token: z.string(),
});

export type RegisterDto = z.infer<typeof registerSchemaDto>;
