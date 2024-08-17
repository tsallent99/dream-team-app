import { useMutation } from "@tanstack/react-query";
import { MutationConfig } from "../../../../lib/react-query";
import { RegisterUserFnT } from "../../../domain/repositories/userRepository"
import { useUserRepositoryAdapterFactory } from "../../../dependency-injection/user/UserRepositoryContext";

type UseRegisterOptions = {
    config?: MutationConfig<RegisterUserFnT>;
  };
  
export const useRegister = ({ config }: UseRegisterOptions = {}) => {
  
  const { register  } = useUserRepositoryAdapterFactory()
    return useMutation({
      ...config,
      mutationKey: ["register"],
      mutationFn: (data) => register(data),
    });
  };