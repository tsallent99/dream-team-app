import { UseGetLeaguesOptions } from "../../modules/application/tournament/useGetLeaguesOptions";

export const useCreateTournamentPage = () => {
    const { isLoading: isLoadingLeagues, data: leagues } = UseGetLeaguesOptions({});
    return {
        isLoadingLeagues,
        leagues
    }
}