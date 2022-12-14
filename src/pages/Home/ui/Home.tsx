import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/utility/UtilityMethods';
import { Page } from 'shared/ui/Page';
// style
import classes from './Home.module.scss';

export interface HomePageProps {
    className?: string;
}

const HomePage: React.FC<HomePageProps> = ( { className } ) => {
    const { t } = useTranslation( 'home' );

    return (
        <Page
            className={ classNames(
                classes.HomePage,
                {},
                [
                    className
                ] 
            ) }>
            <h2>{t( 'HOME' )}</h2>
        </Page>
    );
};

export default HomePage;
