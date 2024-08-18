import { httpAxiosApiSports } from "../../../../lib/externalApi/http-axios-api-sports";
import { LeagueDto } from "./api.dto";


export async function getAllPlayers(): Promise<any> {
    return httpAxiosApiSports.get('/players?season=2023&team=33');
}

export function getLeagueById(id: number): Promise<LeagueDto> {
    return httpAxiosApiSports.get(`leagues?id=${id}`).then(({data}) =>{
        console.log(data.response[0].league)
        return data.response[0].league
    } )
}