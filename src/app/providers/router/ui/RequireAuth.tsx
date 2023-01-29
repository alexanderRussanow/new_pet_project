import { getUserAuthData, getUserRoles, UserRolesEnum } from '@/entities/User';
import { RoutesPath } from '@/shared/types/routesPaths';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

export interface RequireAuthProps {
    roles?: UserRolesEnum[];
    children: JSX.Element;
}

export const RequireAuth: React.FC<RequireAuthProps> = ( { roles, children } ) => {
    // redux hooks
    const isAuth = useSelector( getUserAuthData );
    const userRoles = useSelector( getUserRoles );
    // react-router hooks
    const location = useLocation();

    const hasRequiredRole = useMemo(
        () => {
            if ( !roles ) {
                return true;
            }
            return roles.some( role => userRoles?.includes( role ) );
        },
        [
            roles,
            userRoles
        ] 
    );

    if ( !isAuth ) {
        return <Navigate
            state={ { from: location } }
            to={ RoutesPath.home }
            replace />;
    }

    if ( !hasRequiredRole ) {
        return <Navigate
            state={ { from: location } }
            to={ RoutesPath.forbidenPage }
            replace />;
    }

    return children;
};
