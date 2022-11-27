import { BoardPage } from 'pages/Board';
import { ProfilePage } from 'pages/Profile';
import { HomePage } from 'pages/Home';
import { Page404 } from 'pages/Page404';
import { RouteProps } from 'react-router-dom';

export type AppRouteProps = RouteProps & {
    private?: boolean;
};

export enum AppRoutes {
    HOME = 'home',
    PROFILE = 'profile',
    BOARD = 'board',
    PAGE_404 = '404',
}

export const RoutesPath: Record<AppRoutes, string> = {
    [ AppRoutes.HOME ]: '/',
    [ AppRoutes.PROFILE ]: '/profile',
    [ AppRoutes.BOARD ]: '/board',
    [ AppRoutes.PAGE_404 ]: '*',
};

export const routesConfig: Record<AppRoutes, AppRouteProps> = {
    [ AppRoutes.HOME ]: {
        path: RoutesPath[ AppRoutes.HOME ],
        element: <HomePage />,
    },
    [ AppRoutes.PROFILE ]: {
        path: RoutesPath[ AppRoutes.PROFILE ],
        element: <ProfilePage />,
        private: true,
    },
    [ AppRoutes.BOARD ]: {
        path: RoutesPath[ AppRoutes.BOARD ],
        element: <BoardPage />,
    },
    [ AppRoutes.PAGE_404 ]: {
        path: RoutesPath[ AppRoutes.PAGE_404 ],
        element: <Page404 />,
    },
};
