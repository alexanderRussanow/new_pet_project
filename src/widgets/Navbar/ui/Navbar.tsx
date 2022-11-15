import { LoginModal } from 'features/AuthByUsername';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonSizeEnum, ButtonThemeEnum } from 'shared/ui/Button';
import { classNames } from '../../../shared/lib/utility/UtilityMethods';
// styles
import classes from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar: React.FC<NavbarProps> = ( { className } ) => {
    // i18n
    const { t } = useTranslation();
    // state
    const [
        isLoginModalOpen,
        setIsLoginModalOpen
    ] = useState( false );

    const onLoginModalClose = () => setIsLoginModalOpen( false );
    const onLoginModalOpen = () => setIsLoginModalOpen( true );

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
                <Button
                    size={ ButtonSizeEnum.SMALL }
                    theme={ ButtonThemeEnum.CLEAR_INVERTED }
                    onClick={ onLoginModalOpen }>
                    {t( 'LOGIN' )}
                </Button>
                <LoginModal
                    isOpen={ isLoginModalOpen }
                    onClose={ onLoginModalClose } />
            </div>
        </div>
    );
};
