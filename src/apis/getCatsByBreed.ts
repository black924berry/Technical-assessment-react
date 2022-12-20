import { useInfiniteQuery } from 'react-query';
import { axios } from '../lib/axios';
import { Cat } from '../types';
import { ExtractFnReturnType } from '../lib/react-query';

const getCatsByBreed = async (pageParam: number, breedId: string): Promise<Cat[]> => {
    return await axios.get(`
v1/images/search?page=${pageParam}&limit=10&breed_id=${breedId}
    `);
};

type QueryFnType = typeof getCatsByBreed;

export const useCatsByBreed = (breedId: string) => {
    return useInfiniteQuery<ExtractFnReturnType<QueryFnType>>(
        ['cats', breedId],
        ({ pageParam = 1 }) => getCatsByBreed(pageParam, breedId),
        {
            getNextPageParam: (lastPage, allPages) => {
                if (lastPage.length < 10) {
                    return undefined;
                } else {
                    return allPages.length + 1;
                }
            }
        }
    );
};
