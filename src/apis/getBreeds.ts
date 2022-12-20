import { useQuery } from 'react-query';

import { axios } from '../lib/axios';
import { ExtractFnReturnType, QueryConfig } from '../lib/react-query';

export const getBreeds = (): Promise<any> => {
    return axios.get(`/v1/breeds`);
};

type QueryFnType = typeof getBreeds;

type UseBreedsOptions = {
    config?: QueryConfig<QueryFnType>;
};

export const useBreeds = ({ config }: UseBreedsOptions = {}) => {
    return useQuery<ExtractFnReturnType<QueryFnType>>({
        ...config,
        queryKey: ['breeds'],
        queryFn: () => getBreeds()
    });
};
