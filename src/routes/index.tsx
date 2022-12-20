import React from 'react';
import { useRoutes } from 'react-router-dom';
import CatCardDetail from '../components/CatCardDetail';
import Home from '../components/Home';

export const AppRoutes = () => {
    const commonRoutes = [
        { path: '/', element: <Home /> },
        { path: '/detail/:catId', element: <CatCardDetail /> }
    ];

    const element = useRoutes([...commonRoutes]);

    return <>{element}</>;
};
