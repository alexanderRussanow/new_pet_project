import { userAuthData } from 'entities/User';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutesPath } from 'shared/config/routeConfig/routeConfig';

export const RequireAuth = ( { children }: { children: JSX.Element } ) => {
    const isAuth = useSelector( userAuthData );
    const location = useLocation();

    if ( !isAuth ) {
        return <Navigate
            state={ { from: location } }
            to={ RoutesPath.home }
            replace />;
    }
    return children;
};
