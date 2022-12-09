import { userActions, getUserAuthData } from 'entities/User';
import { LoginModal } from 'features/AuthByUsername';
import React, { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Button, ButtonSizeEnum, ButtonThemeEnum } from 'shared/ui/Button';
import { Text, TextThemeEnum } from 'shared/ui/Text';
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
    const dispatch = useDispatch();
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
        <div
            className={ classNames(
                classes.navbar,
                {},
                [
                    className
                ] 
            ) }>
            <div className={ classNames( classes.links ) }>
                {authUserData ? (
                    <div className={ classes.authBlock }>
                        <Text
                            theme={ TextThemeEnum.SUCCESS }
                            title={ authUserData.username } />
                        <Button
                            size={ ButtonSizeEnum.MEDIUM }
                            theme={ ButtonThemeEnum.CLEAR_INVERTED }
                            onClick={ onLogoutHandler }>
                            {t( 'LOGOUT' )}
                        </Button>
                    </div>
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
        </div>
    );
} );
