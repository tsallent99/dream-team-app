import { z } from "zod";
import { zodValidationHandler } from "../../../../shared/external-libs/zod/zod-validation-handler";

const userSchema = z.object({
	id: z.string(),
	username: z.string(),
	email: z.string(),
});
export type User = z.infer<typeof userSchema>;

export class UserEntity {
	private _user: User;
	public get user() {
		return this._user;
	}
	constructor(user: unknown) {
		const validation = userSchema.safeParse(user);
		this._validate(validation);
		this._user = validation.data;
	}

	private _validate(validation: {
		success: boolean;
		data?: User;
	}): asserts validation is { success: true; data: User } {
		zodValidationHandler(validation);
	}
}
