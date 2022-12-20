import React from 'react';
import { useCatsByBreed } from '../apis/getCatsByBreed';
import CatCard from './CatCard';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Cat } from '../types';

interface CatCardGridProps {
    breedId: string;
}

const CustomButton = styled(Button)`
    margin: 10px;
`;

const CatCardGrid: React.FC<CatCardGridProps> = ({ breedId }) => {
    const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
        useCatsByBreed(breedId);

    const cats = data?.pages.flat(1) as Cat[];
    let result: Cat[] = [];
    if (typeof cats !== 'undefined') {
        result = Object.values(cats.reduce((acc, obj) => ({ ...acc, [obj.id]: obj }), {}));
    }
    return status === 'loading' ? (
        <p>loading...</p>
    ) : status === 'error' ? (
        <p>error...</p>
    ) : (
        <>
            <Row>
                {result.map((item) => (
                    <CatCard key={item.id} item={item} />
                ))}
            </Row>
            <Row>
                {hasNextPage && (
                    <CustomButton
                        onClick={() => fetchNextPage()}
                        disabled={!hasNextPage || isFetchingNextPage}>
                        {isFetchingNextPage ? 'Loading more...' : 'Load More'}
                    </CustomButton>
                )}
            </Row>
        </>
    );
};

export default CatCardGrid;
