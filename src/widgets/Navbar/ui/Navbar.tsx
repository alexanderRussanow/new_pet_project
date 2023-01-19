import { getUserAuthData, userActions } from 'entities/User';
import { LoginModal } from 'features/AuthByUsername';
import React, { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RoutesPath } from 'shared/config/routeConfig/routeConfig';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Avatar } from 'shared/ui/Avatar';
import { Button, ButtonSizeEnum, ButtonThemeEnum } from 'shared/ui/Button';
import { Dropdown } from 'shared/ui/Dropdown';
import { Row } from 'shared/ui/Layout';
import { Text, TextSizeEnum } from 'shared/ui/Text';
import { classNames } from '../../../shared/lib/utility/UtilityMethods';
// styles
import classes from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar: React.FC<NavbarProps> = memo( ( { className } ) => {
    // i18n
    const { t } = useTranslation();
    // redux hook
    const authUserData = useSelector( getUserAuthData );
    const dispatch = useAppDispatch();

    // state
    const [
        isLoginModalOpen,
        setIsLoginModalOpen
    ] = useState( false );

    const onLoginModalClose = () => setIsLoginModalOpen( false );
    const onLoginModalOpen = () => setIsLoginModalOpen( true );
    const onLogoutHandler = useCallback(
        () => dispatch( userActions.logout() ),
        [
            dispatch
        ] 
    );

    return (
        <header
            className={ classNames(
                classes.navbar,
                {},
                [
                    className
                ] 
            ) }>
            <div className={ classNames( classes.links ) }>
                {authUserData ? (
                    <Dropdown
                        direction='bottom left'
                        items={ [
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
                ) : (
                    <>
                        <Button
                            size={ ButtonSizeEnum.MEDIUM }
                            theme={ ButtonThemeEnum.CLEAR_INVERTED }
                            onClick={ onLoginModalOpen }>
                            {t( 'LOGIN' )}
                        </Button>
                        <LoginModal
                            isOpen={ isLoginModalOpen }
                            onClose={ onLoginModalClose } />
                    </>
                )}
            </div>
        </header>
    );
} );
