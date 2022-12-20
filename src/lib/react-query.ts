import { QueryClient, UseQueryOptions } from 'react-query';
import { PromiseValue } from 'type-fest';

export const queryClient = new QueryClient();

export type ExtractFnReturnType<FnType extends (...args: any) => any> = PromiseValue<
    ReturnType<FnType>
>;

export type QueryConfig<QueryFnType extends (...args: any) => any> = Omit<
    UseQueryOptions<ExtractFnReturnType<QueryFnType>>,
    'queryKey' | 'queryFn'
>;
