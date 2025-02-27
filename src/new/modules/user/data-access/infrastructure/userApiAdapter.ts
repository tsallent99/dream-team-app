import { UserEntity } from "../../domain/user.entity";
import { UserRepository } from "../../domain/user.repository";
import { getUser, loginUser, registerUser } from "./api";

const getApiUser = async (): Promise<UserEntity> => {
	const response = await getUser();
	return new UserEntity(response);
};

const registerApiUser = async ({
	username,
	password,
	email,
}: {
	username: string;
	password: string;
	email: string;
}): Promise<{ token: string }> => {
	const response = await registerUser({ username, password, email });
	return response;
};

const loginApiUser = async ({
	username,
	password,
}: {
	username: string;
	password: string;
}): Promise<{ token: string }> => {
	const response = await loginUser({ username, password });
	return response;
};

export const userApiAdapter: UserRepository = {
	getUser: getApiUser,
	register: registerApiUser,
	login: loginApiUser,
};
