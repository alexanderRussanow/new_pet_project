import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { RoutesPath } from 'shared/config/routeConfig/routeConfig';
import PostsIcon from '../../../../shared/assets/icons/board.svg';
import HomeIcon from '../../../../shared/assets/icons/home.svg';
import ProfileIcon from '../../../../shared/assets/icons/profile.svg';
import AboutPageIcon from '../../../../shared/assets/icons/about-20-20.svg';
import { SidebarItemType } from 'widgets/Sidebar';

export const getSidebarItems = createSelector(
    getUserAuthData,
    authData => {
        const sidebarItems: SidebarItemType[] = [
            {
                path: RoutesPath.home,
                text: 'HOME',
                Icon: HomeIcon,
            },
            {
                path: RoutesPath.aboutPage,
                text: 'ABOUT',
                Icon: AboutPageIcon,
            },
        ];
        if ( authData ) {
            sidebarItems.push(
                {
                    path: RoutesPath.profile + `${ authData.id }`,
                    text: 'PROFILE',
                    Icon: ProfileIcon,
                    privateOnly: true,
                },
                {
                    path: RoutesPath.posts,
                    text: 'POSTS',
                    Icon: PostsIcon,
                    privateOnly: true,
                }
            );
        }
        return sidebarItems;
    } 
);
