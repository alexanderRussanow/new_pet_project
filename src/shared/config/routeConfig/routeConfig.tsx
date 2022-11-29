import { BlogPage } from 'pages/Blog';
import { ProfilePage } from 'pages/Profile';
import { HomePage } from 'pages/Home';
import { Page404 } from 'pages/Page404';
import { RouteProps } from 'react-router-dom';
import { BlogDetailPage } from 'pages/BlogDetail';

export type AppRouteProps = RouteProps & {
    private?: boolean;
};

export enum AppRoutes {
    HOME = 'home',
    PROFILE = 'profile',
    BLOG = 'blog',
    PAGE_404 = '404',
    BLOG_DETAIL = 'blogDetail',
}

export const RoutesPath: Record<AppRoutes, string> = {
    [ AppRoutes.HOME ]: '/',
    [ AppRoutes.PROFILE ]: '/profile',
    [ AppRoutes.BLOG ]: '/blog',
    [ AppRoutes.BLOG_DETAIL ]: '/blog/',
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
    [ AppRoutes.BLOG ]: {
        path: RoutesPath[ AppRoutes.BLOG ],
        element: <BlogPage />,
        private: true,
    },
    [ AppRoutes.BLOG_DETAIL ]: {
        path: RoutesPath[ AppRoutes.BLOG_DETAIL ] + ':id',
        element: <BlogDetailPage />,
        private: true,
    },
    [ AppRoutes.PAGE_404 ]: {
        path: RoutesPath[ AppRoutes.PAGE_404 ],
        element: <Page404 />,
    },
};
