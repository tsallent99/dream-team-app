/* eslint-disable @typescript-eslint/no-explicit-any */
import { UserEntity } from "../entities/user.entity";

export type RegisterUserParams = {
username: string;
email: string;
password: string 
}
export type RegisterUserFnT = (params: RegisterUserParams) => Promise<any>

export type LoginParams = {
    email: string;
    password: string;
}

export type LoginUserFnT = (params: LoginParams) => Promise<{token: string}>

export type GetUserFnT = () => Promise<UserEntity>;
export interface UserRepository {
    getUser: GetUserFnT;
    register: RegisterUserFnT;
    login: LoginUserFnT
}