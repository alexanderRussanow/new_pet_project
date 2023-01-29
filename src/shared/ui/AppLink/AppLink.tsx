import React, { memo } from 'react';
import { LinkProps, Link } from 'react-router-dom';
import { classNames } from '@/shared/lib/utility/UtilityMethods';
// styles
import classes from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}
const { PRIMARY } = AppLinkTheme;

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink: React.FC<AppLinkProps> = memo( ( { children, className, to, theme = PRIMARY, ...props } ) => (
    <Link
        to={ to }
        className={ classNames(
            classes.appLink,
            {},
            [
                className,
                classes[ theme ]
            ] 
        ) }
        { ...props }>
        {children}
    </Link>
) );
