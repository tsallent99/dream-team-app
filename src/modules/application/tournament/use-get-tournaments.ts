import { useUser } from "../user/useUser";


export const useGetTournaments = () => {
  const { user, isPending, isError } = useUser()
  return {
    tournaments: user?.tournaments,
    isError,
    isPending
  }
  
};