import HomeIcon from '../../../shared/assets/icons/home.svg';
import ProfileIcon from '../../../shared/assets/icons/profile.svg';
import BoardIcon from '../../../shared/assets/icons/board.svg';
import { RoutesPath } from 'shared/config/routeConfig/routeConfig';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const sidebarItems: SidebarItemType[] = [
    {
        path: RoutesPath.home,
        text: 'HOME',
        Icon: HomeIcon,
    },
    {
        path: RoutesPath.profile,
        text: 'PROFILE',
        Icon: ProfileIcon,
    },
    {
        path: RoutesPath.board,
        text: 'BOARD',
        Icon: BoardIcon,
    },
];
