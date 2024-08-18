
import { useMutation } from "@tanstack/react-query";
import { MutationConfig } from "../../../lib/react-query";
import { useAuthStore } from "../../infrastructure/store/authStore";
import { useUserRepositoryAdapterFactory } from "../../dependency-injection/user/UserRepositoryContext";
import { GetUserFnT } from "../../domain/repositories/userRepository";
type UseGetUserOptions = {
    config?: MutationConfig<GetUserFnT>;
  };

export const UseGetUser = ({ config = {} }: UseGetUserOptions = {}) => {
  const { getUser  } = useUserRepositoryAdapterFactory()
    const setUser = useAuthStore((state) => state.setUser);
    return useMutation({

      mutationKey: ["user"],
      mutationFn: () => getUser(),
      onSuccess: (data) => {
        setUser(data)
      },
      ...config,
    });
  };