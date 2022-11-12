import React, { useEffect, useState } from 'react';
import { Button, ButtonSizeEnum } from 'shared/ui/Button';
import { classNames } from '../../../shared/lib/utility/UtilityMethods';
// styles
import classes from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar: React.FC<NavbarProps> = ( { className } ) => {

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
                <Button
                    size={ ButtonSizeEnum.SMALL }
                    onClick={ () => {
                        setError( true );
                    } }>
                    throw error
                </Button>
            </div>
        </div>
    );
};
