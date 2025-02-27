import { createGenericContext } from "../../../../../core/dependency-injection/createGenericContext";
import { UserRepository } from "../../domain/user.repository";

export const { useContext, createContextProvider: provideUserRepository } =
	createGenericContext<UserRepository>();

export function useUserRepositoryAdapterFactory() {
	return useContext().value;
}
