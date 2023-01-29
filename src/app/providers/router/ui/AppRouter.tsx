import { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from '@/widgets/PageLoader.tsx';
import { RequireAuth } from './RequireAuth';
import { AppRouteProps, routesConfig } from '../config/routesConfig';

export const AppRouter: React.FC = memo( () => {
    const renderRoutes = useCallback(
        ( route: AppRouteProps ) => {
            const component = <Suspense fallback={ <PageLoader /> }>{route.element}</Suspense>;

            return (
                <Route
                    element={ route.private ? <RequireAuth roles={ route.roles }>{component}</RequireAuth> : component }
                    key={ route.path }
                    path={ route.path }
                />
            );
        },
        [] 
    );

    return <Routes>{Object.values( routesConfig ).map( renderRoutes )}</Routes>;
} );
