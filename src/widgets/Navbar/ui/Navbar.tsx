import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { classNames } from '../../../shared/lib/utility/UtilityMethods';
import { AppLink } from '../../../shared/ui/AppLink/AppLink';
// styles
import classes from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar: React.FC<NavbarProps> = ( { className } ) => {
    const { t } = useTranslation();

    const [
        error,
        setError
    ] = useState( false );

    useEffect(
        () => {
            if ( error ) {
                throw new Error( 'Error' );
            }
        },
        [
            error
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
                <AppLink
                    className={ classNames( classes.link ) }
                    to='/'>
                    {t( 'HOME' )}
                </AppLink>
                <AppLink
                    className={ classNames( classes.link ) }
                    to='/contact'>
                    {t( 'CONTACT' )}
                </AppLink>
                <AppLink
                    className={ classNames( classes.link ) }
                    to='/board'>
                    {t( 'BOARD' )}
                </AppLink>
                <Button
                    onClick={ () => {
                        setError( true );
                    } }>
                    error
                </Button>
            </div>
        </div>
    );
};
