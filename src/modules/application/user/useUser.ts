import { useUserRepositoryAdapterFactory } from "../../dependency-injection/user/UserRepositoryContext";
import { UserRepository } from "../../domain/repositories/userRepository";
import { ExtractFnReturnType, QueryConfig } from "../../../lib/react-query";
import { useQuery } from "@tanstack/react-query";
import { useAuthStore } from "../../infrastructure/store/authStore";

type QueryFnType = UserRepository['getUser'];
type UseGetUserOptions = {
    config?: QueryConfig<QueryFnType>
}
export const useUser = ({
    config
}: UseGetUserOptions = {}) => {
    const token = useAuthStore((state) => state.token);
    const { getUser } = useUserRepositoryAdapterFactory(); 
    return useQuery<ExtractFnReturnType<QueryFnType>>({
        queryKey: ['user'],
        queryFn: () => getUser(),
        enabled: !!token,
        ...config
    })
};