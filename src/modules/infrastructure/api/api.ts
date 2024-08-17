import { httpAxiosApiSports } from "../../../lib/externalApi/http-axios-api-sports";

export async function getAllPlayers(): Promise<any> {
    return httpAxiosApiSports.get('/players?season=2023&team=33');
}
