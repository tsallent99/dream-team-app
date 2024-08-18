
import {  useQuery } from "@tanstack/react-query";
import { ExtractFnReturnType, QueryConfig } from "../../../lib/react-query";

import { useUserRepositoryAdapterFactory } from "../../dependency-injection/user/UserRepositoryContext";
import {  UserRepository } from "../../domain/repositories/userRepository";
type QueryFnType = UserRepository["getUser"]
type UseGetUserOptions = {
    config?: QueryConfig<QueryFnType>;
  };

export const UseGetUser = ({ config = {} }: UseGetUserOptions ) => {
  const { getUser } = useUserRepositoryAdapterFactory()
    return useQuery<ExtractFnReturnType<QueryFnType>>({
      queryKey: ["user"],
      queryFn: () => getUser(),
      ...config,
    });
  };