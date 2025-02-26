import {  useQuery } from "@tanstack/react-query";
import { ExtractFnReturnType, QueryConfig } from "../../../lib/react-query";
import { useTournamentRepositoryAdapterFactory } from "../../dependency-injection/tournament/TournamentRepositoryContext";
import { TournamentRepository } from "../../domain/repositories/tournament.repository";

type QueryFnType = TournamentRepository["getLeaguesOptions"]
type UseGetLeaguesOptionsOptions = {
    config?: QueryConfig<QueryFnType>;
  };

export const UseGetLeaguesOptions = ({ config = {} }: UseGetLeaguesOptionsOptions ) => {
  const { getLeaguesOptions } = useTournamentRepositoryAdapterFactory();
    return useQuery<ExtractFnReturnType<QueryFnType>>({
      queryKey: ["leagues"],
      queryFn: () => getLeaguesOptions(),
       ...config,
    });
  };