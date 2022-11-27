import { userAuthData } from 'entities/User';
import { memo, Suspense, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Loader } from 'shared/ui/Loader/ui/Loader';
import { PageLoader } from 'widgets/PageLoader.tsx';
import { routesConfig } from '../../../../shared/config/routeConfig/routeConfig';

export const AppRouter: React.FC = memo( () => {
    // redux hooks
    const isAuth = useSelector( userAuthData );

    const renderRoutes = useMemo(
        () => {
            return Object.values( routesConfig ).filter( route => {
                return route.private && !isAuth ? false : true;
            } );
        },
        [
            isAuth
        ] 
    );

    return (
        <Routes>
            {renderRoutes.map( ( { path, element } ) => (
                <Route
                    key={ path }
                    path={ path }
                    element={
                        <Suspense
                            fallback={
                                <PageLoader>
                                    <Loader />
                                </PageLoader>
                            }>
                            <div className='page'>{element}</div>
                        </Suspense>
                    }
                />
            ) )}
        </Routes>
    );
} );
