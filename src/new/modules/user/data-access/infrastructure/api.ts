import { API_URL, httpAxios } from "../../../../../lib/axios";
import { LoginDto, RegisterDto, UserDto } from "./api.dto";
export const loginUser = async ({
	username,
	password,
}: {
	username: string;
	password: string;
}): Promise<LoginDto> => {
	const response = await httpAxios.post(`${API_URL}/login`, {
		username,
		password,
	});
	return response.data;
};

export const registerUser = async ({
	username,
	password,
	email,
}: {
	username: string;
	password: string;
	email: string;
}): Promise<RegisterDto> => {
	const response = await httpAxios.post(`${API_URL}/register`, {
		username,
		password,
		email,
	});
	return response.data;
};

export const getUser = async (): Promise<UserDto> => {
	const response = await httpAxios.get(`${API_URL}/user`);
	return response.data;
};
