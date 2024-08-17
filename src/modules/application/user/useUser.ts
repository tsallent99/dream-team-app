import { useAuthStore } from "../../infrastructure/store/authStore";


export const useUser = () =>{
    const token = useAuthStore((state) => state.token);
    const { data: user,  } = useGetUser({config: {
        enabled: !!token
    }
})

}

