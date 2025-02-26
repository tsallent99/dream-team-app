import { API_URL, httpAxios } from "../../../../lib/axios";

export interface TournamentDto {
  Id: string;
  associatedLeague: number;
  initialBudget: number;
  name: string;
  prizePool: number;
  startDate: string;
  teams: string[];
  code: string;
}
export const getTournamentsByIds = async (ids: string[]): Promise<TournamentDto[]> => {
  const params = new URLSearchParams({ ids: ids.join(',') });
    const response = await httpAxios.get(`${API_URL}/get-tournaments-by-id?${params.toString()}`);
    return response.data;
  };
export const createTournament = async ({name, associatedLeague, startDate, prizePool, initialBudget}: {name: string, associatedLeague: number, startDate: string, prizePool: number, initialBudget: number}): Promise<TournamentDto> => {
    const response = await httpAxios.post(`${API_URL}/create-tournament`, { name, associatedLeague, startDate, prizePool, initialBudget });
    return response.data;
  };