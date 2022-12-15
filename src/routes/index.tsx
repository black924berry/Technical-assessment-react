import { useRoutes } from 'react-router-dom';

import CatCardGrid from '../components/CatCardGrid';
import CatCardDetail from '../components/CatCardDetail';

export const AppRoutes = () => {

    const commonRoutes = [
        { path: '/', element: <CatCardGrid /> },
        { path: '/detail/:catId', element: <CatCardDetail /> }
    ];

    const element = useRoutes([...commonRoutes]);

    return <>{element}</>;
};
