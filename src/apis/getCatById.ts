import { useQuery } from 'react-query';

import { axios } from '../lib/axios';
import { ExtractFnReturnType, QueryConfig } from '../lib/react-query';
import { Cat } from '../types';

export const getCatById = (id: string): Promise<Cat> => {
    return axios.get(`v1/images/${id}`);
};

type QueryFnType = typeof getCatById;

type UseCatOptions = {
    config?: QueryConfig<QueryFnType>;
};

export const useCat = (id: string, { config }: UseCatOptions = {}) => {
    return useQuery<ExtractFnReturnType<QueryFnType>>({
        ...config,
        queryKey: ['cat'],
        queryFn: () => getCatById(id)
    });
};
