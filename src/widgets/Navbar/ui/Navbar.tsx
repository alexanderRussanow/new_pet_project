import { getUserAuthData } from '@/entities/User';
import { LoginModal } from '@/features/AuthByUsername';
import { NotificationButton } from '@/features/NotificationButton';
import { UserAvatarDropdown } from '@/features/UserAvatarDropdown';
import { classNames } from '@/shared/lib/utility/UtilityMethods';
import { Button, ButtonSizeEnum, ButtonThemeEnum } from '@/shared/ui/Button/Button';
import { Row } from '@/shared/ui/Layout/Flex/Flex.stories';
import React, { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
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

    // state
    const [
        isLoginModalOpen,
        setIsLoginModalOpen
    ] = useState( false );

    const onLoginModalClose = () => setIsLoginModalOpen( false );
    const onLoginModalOpen = () => setIsLoginModalOpen( true );

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
                    <Row gap='small'>
                        <NotificationButton />
                        <UserAvatarDropdown />
                    </Row>
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
