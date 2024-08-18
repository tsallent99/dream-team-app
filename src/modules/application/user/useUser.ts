import { useEffect } from "react";
import { useAuthStore } from "../../infrastructure/store/authStore";
import { UseGetUser } from "../mutations/useGetUser";

export const useUser = () => {
  const { user, setUser, token } = useAuthStore((state) => ({
    user: state.user,
    setUser: state.setUser,
    token: state.token
  }));
  const { data, isLoading, isError, error, isSuccess } = UseGetUser({
    config: {
    enabled: !!token
}
});
useEffect(() => {
if(isSuccess){
  setUser(data)
}
}, [isSuccess])
  return {
    user: user || data,
    isPending: isLoading,
    isError,
    error,

    
  };
};


