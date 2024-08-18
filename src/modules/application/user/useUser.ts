import { useEffect } from "react";
import { useAuthStore } from "../../infrastructure/store/authStore";
import { UseGetUser } from "../mutations/useGetUser";


export const useUser = () => {
  const user = useAuthStore((state) => state.user);
  const { mutate: getUser, data, isPending, isError, error, } = UseGetUser();

  useEffect(() => {
    if (!user) {
        getUser(undefined); // Hacer el refetch si no hay usuario en la store
    }
  }, [user, getUser]);

  return {
    user: user || data, // Devuelve el usuario de la store o el data obtenido por el fetch
    isPending,
    isError,
    error,
    getUser
  };
};


