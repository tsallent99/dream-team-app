import { httpAxios } from "../../../../../lib/axios";
import { API_URL } from "../../../../../lib/axios";
import { TournamentDto } from "./api.dto";
import { CreateTournamentPayload } from "../../domain/tournament.repository";
export const getTournaments = async (): Promise<TournamentDto[]> => {
	const response = await httpAxios.get(`${API_URL}/get-tournaments`);
	return response.data;
};
export const getTournamentsByIds = async (
	ids: string[]
): Promise<TournamentDto[]> => {
	const params = new URLSearchParams({ ids: ids.join(",") });
	const response = await httpAxios.get(
		`${API_URL}/get-tournaments-by-id?${params.toString()}`
	);
	return response.data;
};
export const createTournament = async (params: CreateTournamentPayload) => {
	const response = await httpAxios.post(`${API_URL}/create-tournament`, params);
	return response.data;
};
export const joinTournament = async ({
	userId,
	tournamentId,
}: {
	userId: string;
	tournamentId: string;
}) => {
	const response = await httpAxios.post(`${API_URL}/join-tournament`, {
		userId,
		tournamentId,
	});
	return response.data;
};
export const leaveTournament = async ({
	teamId,
	tournamentId,
}: {
	teamId: string;
	tournamentId: string;
}) => {
	const response = await httpAxios.post(`${API_URL}/leave-tournament`, {
		teamId,
		tournamentId,
	});
	return response.data;
};
