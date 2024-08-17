import { UserEntity } from "../entities/user.entity";

export interface UserRepository {
    getUser(): Promise<UserEntity>
}