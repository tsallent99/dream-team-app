import { API_URL, httpAxios } from "../../../../lib/axios";

export const getTournamentsByIds = async (ids: string[]): Promise<any[]> => {
    const response = await httpAxios.post(`${API_URL}/get-tournaments-by-id`, { ids });
    return response.data;
  };