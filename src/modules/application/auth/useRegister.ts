import { useMutation } from "@tanstack/react-query";
import { MutationConfig } from "../../../lib/react-query";
import { registerUser } from "../../infrastructure/api/auth/api";

type UseRegisterOptions = {
    config?: MutationConfig<typeof registerUser>;
  };
  
export const useRegister = ({ config }: UseRegisterOptions = {}) => {
    return useMutation({
      ...config,
      mutationKey: ["register"],
      mutationFn: (data) => registerUser(data),
    });
  };