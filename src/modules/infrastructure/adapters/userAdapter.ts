/* eslint-disable @typescript-eslint/no-explicit-any */
import { UserEntity } from "../../domain/entities/user.entity";
import { RegisterUserParams, UserRepository, LoginParams } from "../../domain/repositories/userRepository";
import { getUser as getApiUser, loginUser, registerUser } from "../api/auth/api";

 const getUser = (): Promise<UserEntity> => {
   return getApiUser()
}

const register = ({ username, email, password }: RegisterUserParams): Promise<any> => registerUser({username, email, password})

const login = ({ email, password }: LoginParams) => loginUser({email, password})

export const userAdapter: UserRepository = {
    getUser,
    register,
    login

}
