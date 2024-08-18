import { createGenericContext } from "../../../core/dependency-injection/createGenericContext";
import { TournamentRepository } from "../../domain/repositories/tournament.repository";


export const { useContext, createContextProvider: provideTournamentRepository } = createGenericContext<TournamentRepository>();

export function useTournamentRepositoryAdapterFactory() {
    return useContext().value;
}