import { UserEntity } from "./user.entity";

type LoginUserFnT = ({
	username,
	password,
}: {
	username: string;
	password: string;
}) => Promise<{
	token: string;
}>;
type RegisterUserFnT = ({
	username,
	password,
	email,
}: {
	username: string;
	password: string;
	email: string;
}) => Promise<{
	token: string;
}>;
type GetUserFnT = () => Promise<UserEntity>;
export interface UserRepository {
	login: LoginUserFnT;
	register: RegisterUserFnT;
	getUser: GetUserFnT;
}
