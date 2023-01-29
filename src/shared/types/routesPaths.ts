import { AppRoutes } from "../const/appRoutes";

export const RoutesPath: Record<AppRoutes, string> = {
    [ AppRoutes.HOME ]: '/',
    [ AppRoutes.PROFILE ]: '/profile/',
    [ AppRoutes.POSTS ]: '/posts',
    [ AppRoutes.POST_DETAIL ]: '/posts/',
    [ AppRoutes.ABOUT_PAGE ]: '/about',
    [ AppRoutes.POST_CREATE ]: '/posts/create',
    [ AppRoutes.POST_EDIT ]: '/posts/:id/edit',
    [ AppRoutes.ADMIN_PAGE ]: '/admin',
    [ AppRoutes.FORBIDEN_PAGE ]: '/forbiden',
    [ AppRoutes.PAGE_404 ]: '*',
};
