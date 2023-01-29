import { PostsPage } from '@/pages/PostsPage';
import { ProfilePage } from '@/pages/Profile';
import { HomePage } from '@/pages/Home';
import { Page404 } from '@/pages/Page404';
import { RouteProps } from 'react-router-dom';
import { PostDetailPage } from '@/pages/PostDetailsPage';
import { AboutPage } from '@/pages/AboutPage';
import { PostCreateEditPage } from '@/pages/PostCreateEditPage';
import { AdminPage } from '@/pages/AdminPage';
import { UserRolesEnum } from '@/entities/User';
import { ForbidenPage } from '@/pages/ForbidenPage';
import { AppRoutes } from '@/shared/const/appRoutes';
import { RoutesPath } from '@/shared/types/routesPaths';

export type AppRouteProps = RouteProps & {
    private?: boolean;
    roles?: UserRolesEnum[];
};

export const routesConfig: Record<AppRoutes, AppRouteProps> = {
    [ AppRoutes.HOME ]: {
        path: RoutesPath[ AppRoutes.HOME ],
        element: <HomePage />,
    },
    [ AppRoutes.ABOUT_PAGE ]: {
        path: RoutesPath[ AppRoutes.ABOUT_PAGE ],
        element: <AboutPage />,
    },
    [ AppRoutes.PROFILE ]: {
        path: RoutesPath[ AppRoutes.PROFILE ] + ':id',
        element: <ProfilePage />,
        private: true,
    },
    [ AppRoutes.POSTS ]: {
        path: RoutesPath[ AppRoutes.POSTS ],
        element: <PostsPage />,
        private: true,
    },
    [ AppRoutes.POST_DETAIL ]: {
        path: RoutesPath[ AppRoutes.POST_DETAIL ] + ':id',
        element: <PostDetailPage />,
        private: true,
    },
    [ AppRoutes.POST_CREATE ]: {
        path: RoutesPath[ AppRoutes.POST_CREATE ],
        element: <PostCreateEditPage />,
        private: true,
    },
    [ AppRoutes.POST_EDIT ]: {
        path: RoutesPath[ AppRoutes.POST_EDIT ],
        element: <PostCreateEditPage />,
        private: true,
    },
    [ AppRoutes.ADMIN_PAGE ]: {
        path: RoutesPath[ AppRoutes.ADMIN_PAGE ],
        element: <AdminPage />,
        private: true,
        roles: [
            UserRolesEnum.ADMIN
        ],
    },
    [ AppRoutes.FORBIDEN_PAGE ]: {
        path: RoutesPath[ AppRoutes.FORBIDEN_PAGE ],
        element: <ForbidenPage />,
    },
    [ AppRoutes.PAGE_404 ]: {
        path: RoutesPath[ AppRoutes.PAGE_404 ],
        element: <Page404 />,
    },
};
