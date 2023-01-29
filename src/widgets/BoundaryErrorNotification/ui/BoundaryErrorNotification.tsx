import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/Button/Button';
import { classNames } from '@/shared/lib/utility/UtilityMethods';
// styles
import classes from './BoundaryErrorNotification.module.scss';

interface BoundaryErrorNotificationProps {
    className?: string;
}

export const ErrorBoundaryNotification: React.FC<BoundaryErrorNotificationProps> = ( { className } ) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        window.location.reload();
    };

    const goToHomePage = () => {
        window.location.href = '/';
    };

    return (
        <div
            className={ classNames(
                classes.boundaryErrorNotification,
                {},
                [
                    className
                ] 
            ) }>
            <h1>{t( 'BOUNDARY_ERROR' )}</h1>
            <div className={ classNames( classes.navigation ) }>
                <Button onClick={ reloadPage }>{t( 'RELOAD_PAGE' )}</Button>
                <Button onClick={ goToHomePage }>{t( 'GO_TO_HOME' )}</Button>
            </div>
        </div>
    );
};
