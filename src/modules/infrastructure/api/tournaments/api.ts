import { API_URL, httpAxios } from "../../../../lib/axios";

export interface TournamentDto {
  Id: string;
  associatedLeague: number;
  initialBudget: number;
  name: string;
  prizePool: number;
  startDate: string;
  teams: string[]
}
export const getTournamentsByIds = async (ids: string[]): Promise<TournamentDto[]> => {
  const params = new URLSearchParams({ ids: ids.join(',') });
    const response = await httpAxios.get(`${API_URL}/get-tournaments-by-id?${params.toString()}`);
    return response.data;
  };