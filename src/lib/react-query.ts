/* eslint-disable @typescript-eslint/no-explicit-any */
import {
	DefaultOptions,
	QueryClient,
	QueryClientProvider,
	UseMutationOptions,
	useQueryErrorResetBoundary,
	UseQueryOptions,
} from "@tanstack/react-query";

import { AxiosError } from "axios";
import { PromiseValue } from "type-fest";
const queryConfig: DefaultOptions = {
	queries: {
		throwOnError: true,
		refetchOnWindowFocus: false,
		retry: false,
		staleTime: 5 * 60 * 1000,
	},
	mutations: {
		throwOnError: true,
		retry: false,
	},
};

export const queryClient = new QueryClient({ defaultOptions: queryConfig });

export type ExtractFnReturnType<FnType extends (...args: any) => any> =
	PromiseValue<ReturnType<FnType>>;

export type QueryConfig<QueryFnType extends (...args: any) => any> = Omit<
	UseQueryOptions<ExtractFnReturnType<QueryFnType>>,
	"queryKey" | "queryFn"
>;

export type MutationConfig<MutationFnType extends (...args: any) => any> =
	UseMutationOptions<
		ExtractFnReturnType<MutationFnType>,
		AxiosError,
		Parameters<MutationFnType>[0]
	>;

export { QueryClientProvider, useQueryErrorResetBoundary };

export * from "@tanstack/react-query";
