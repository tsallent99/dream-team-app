import { httpAxios } from "../../../../lib/axios";
import { useAuthStore } from "../../store/authStore";
const API_URL = "http://localhost:5170/api";

export interface loginPayload {
  email: string;
  password: string;
}
export interface registerPayload {
  username: string;
  email: string;
  password: string;
}
export interface LoginResponse {
  token: string;
}

export interface RegisterResponse {
  message: string;
}

export const loginUser = async ({email, password} : loginPayload): Promise<LoginResponse> => {
  const response = await httpAxios.post(`${API_URL}/login`, { email, password });
  return response.data;
};

export const registerUser = async ({ username, email, password }: registerPayload): Promise<RegisterResponse> => {
  const response = await httpAxios.post(`${API_URL}/register`, { username, email, password });
  return response.data;
};

export const getUser = async () => {
  const token = useAuthStore.getState().token;
  if (!token) throw new Error("No token found");

  const response = await httpAxios.get(`${API_URL}/user`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};