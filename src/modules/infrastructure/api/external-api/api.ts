import { httpAxiosApiSports } from "../../../../lib/externalApi/http-axios-api-sports";
import { LeagueDto } from "./api.dto";


export async function getAllPlayers(): Promise<any> {
    return httpAxiosApiSports.get('/players?season=2023&team=33');
}

export function getLeagueById(id: number): Promise<LeagueDto> {
    return httpAxiosApiSports.get(`leagues?id=${id}`).then(({data}) =>{
        return data.response[0].league
    } )
}

export function getLeagues(): Promise<LeagueDto[]> {
    const countries = ['GB-ENG', 'ES', 'IT', 'DE']
    const leagues = ['Premier League', 'La Liga', 'Serie A', 'Bundesliga']
    return httpAxiosApiSports.get('leagues').then(({data}) =>{
        return data.response.filter((league: any) => 
            countries.includes(league.country.code) && leagues.includes(league.league.name)).map((league: any) => {
            console.log(league)
            return league.league
        })
    })
}