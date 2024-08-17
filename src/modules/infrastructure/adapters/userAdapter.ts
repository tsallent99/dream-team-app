import { UserEntity } from "../../domain/entities/user.entity";
import { UserRepository } from "../../domain/repositories/userRepository";
import { getUser as getApiUser } from "../api/auth/api";
export const getUser = (): Promise<UserEntity> => {
   return getApiUser()
}

export const userAdapter: UserRepository = {
    getUser
}
