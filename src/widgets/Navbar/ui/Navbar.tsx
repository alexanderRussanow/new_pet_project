
import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonSizeEnum, ButtonThemeEnum } from 'shared/ui/Button';
import { Modal } from 'shared/ui/Modal';
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
        isAuthOpen,
        setIsAuthOpen
    ] = useState( false );

    const authToggle = useCallback(
        () => setIsAuthOpen( prev => !prev ),
        [] 
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
                <Button
                    size={ ButtonSizeEnum.SMALL }
                    theme={ ButtonThemeEnum.CLEAR_INVERTED }
                    onClick={ authToggle }>
                    {t( 'LOGIN' )}
                </Button>
                <Modal
                    isOpen={ isAuthOpen }
                    onClose={ authToggle } />
            </div>
        </div>
    );
};
