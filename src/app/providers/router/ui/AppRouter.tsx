import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Loader } from 'shared/ui/Loader/Loader';
import { PageLoader } from 'widgets/PageLoader.tsx';
import { routesConfig } from '../../../../shared/config/routeConfig/routeConfig';

export const AppRouter: React.FC = () => (
    <Routes>
        {Object.values( routesConfig ).map( ( { path, element } ) => (
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
