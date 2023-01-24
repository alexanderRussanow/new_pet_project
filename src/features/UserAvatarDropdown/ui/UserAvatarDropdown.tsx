import { getUserAuthData, isUserAdmin, userActions } from 'entities/User';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RoutesPath } from 'shared/config/routeConfig/routeConfig';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { classNames } from 'shared/lib/utility/UtilityMethods';
import { Avatar } from 'shared/ui/Avatar';
import { Dropdown } from 'shared/ui/Dropdown';
import { Row } from 'shared/ui/Layout';
import { Text, TextSizeEnum } from 'shared/ui/Text';

// styles
import classes from './UserAvatarDropdown.module.scss';

export interface UserAvatarDropdownProps {
    className?: string;
}

export const UserAvatarDropdown: React.FC<UserAvatarDropdownProps> = ( { className } ) => {
    const { t } = useTranslation();
    // redux hooks
    const isAdminDashboardAvaileble = useSelector( isUserAdmin );
    const authUserData = useSelector( getUserAuthData );
    const dispatch = useAppDispatch();

    const onLogoutHandler = useCallback(
        () => dispatch( userActions.logout() ),
        [
            dispatch
        ] 
    );

    if ( !authUserData ) {
        return null;
    }

    return (
        <Dropdown
            direction='bottom left'
            className={ classNames(
                classes.UserAvatarDropdown,
                {},
                [
                    className
                ] 
            ) }
            items={ [
                ...( isAdminDashboardAvaileble
                    ? [
                        {
                            content: t( 'ADMIN' ),
                            href: RoutesPath.adminPage,
                        },
                    ]
                    : [] ),
                {
                    content: t( 'PROFILE' ),
                    href: RoutesPath.profile + authUserData.id,
                },
                {
                    content: t( 'LOGOUT' ),
                    onClick: onLogoutHandler,
                },
            ] }
            trigger={
                <Row gap='extraSmall'>
                    <Text
                        className={ classes.username }
                        size={ TextSizeEnum.SMALL }
                        title={ authUserData.username } />
                    <Avatar
                        className={ classes.avatar }
                        size={ 40 }
                        src={ authUserData.avatar } />
                </Row>
            }
        />
    );
};
