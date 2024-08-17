
import { useMutation } from "@tanstack/react-query";
import { MutationConfig } from "../../../lib/react-query";
import { loginUser } from "../../infrastructure/api/auth/api";
import { useAuthStore } from "../../infrastructure/store/authStore";

type UseLoginOptions = {
    config?: MutationConfig<typeof loginUser>;
  };

export const useLogin = ({ config }: UseLoginOptions = {}) => {
    const setToken = useAuthStore((state) => state.setToken);
    return useMutation({
      ...config,
      mutationKey: ["login"],
      mutationFn: (data) => loginUser(data),
      onSuccess: (data) => {
        setToken(data.token)
      },
    });
  };