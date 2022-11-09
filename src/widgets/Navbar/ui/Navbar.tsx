/* eslint-disable i18next/no-literal-string */

import React from 'react';
import { classNames } from '../../../shared/lib/UtilityMethods';
import { AppLink } from '../../../shared/ui/AppLink/AppLink';
// styles
import classes from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar: React.FC<NavbarProps> = ( { className } ) => (
    <div
        className={ classNames(
            classes.navbar,
            {},
            [
                className as string
            ] 
        ) }>
        <div className={ classNames( classes.links ) }>
            <AppLink
                className={ classNames( classes.link ) }
                to='/'>
                home
            </AppLink>
            <AppLink
                className={ classNames( classes.link ) }
                to='/contact'>
                contact
            </AppLink>
            <AppLink
                className={ classNames( classes.link ) }
                to='/board'>
                board
            </AppLink>
        </div>
    </div>
);
